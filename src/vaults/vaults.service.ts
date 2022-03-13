import { BigNumber, ethers } from 'ethers';
import { TokenBalance, VaultState, RegistryVault, VaultVersion } from '..';
import {
  Byvwbtc__factory,
  StrategyV15__factory,
  VaultV15__factory,
  Vault__factory,
  Controller__factory,
  Strategy__factory,
  Vault,
  Erc20__factory,
} from '../contracts';
import { Service } from '../service';
import { formatBalance } from '../tokens';
import {
  LoadVaultOptions,
  VaultHarvestEvent,
  VaultPerformance,
  VaultRegistration,
} from './interfaces';
import { ONE_YEAR_MS } from '../config/constants';
import { VaultRegistryEntry } from '../registry/interfaces/vault-registry-entry.interface';
import { ListVaultOptions } from './interfaces/list-vault-options.interface';
import { keyBy } from '../utils/key-by';
import {
  HarvestEvent,
  Strategy,
  TreeDistributionEvent,
} from '../contracts/Strategy';
import { VaultTreeDistributionEvent } from './interfaces/vault-tree-distribution-event.interface';
import { TransactionStatus } from '../config/enums/transaction-status.enum';

const wbtcYearnVault = '0x4b92d19c11435614CD49Af1b589001b7c08cD4D5';
const diggStabilizerVault = '0x608b6D82eb121F3e5C0baeeD32d81007B916E83C';

export class VaultsService extends Service {
  private loading?: Promise<void>;
  private vaultsInfo: Record<string, VaultRegistration> = {};
  private vaults: Record<string, RegistryVault> = {};

  async ready() {
    if (!this.loading) {
      this.loading = this.init();
    }
    return this.loading;
  }

  async loadVaults(): Promise<RegistryVault[]> {
    const registry = await this.sdk.registry.getProductionVaults();

    const registryVaultsInfo = registry.flatMap((info) =>
      info.list
        // the digg stabilizer is an experimental vault that does not have the standard vault methods and will be removed
        // from the registry
        // TODO: remove once it is removed from registry
        .filter((vault) => vault !== diggStabilizerVault)
        .map((address) => ({
          address,
          version: info.version,
          status: info.status,
        })),
    );

    const serializedCachedVaults = JSON.stringify(
      Object.keys(this.vaults).sort(),
    );

    const serializedRegistryVaultsAddresses = JSON.stringify(
      registryVaultsInfo.map((registryVault) => registryVault.address).sort(),
    );

    // this serialization is to perform a simple array of string comparison to check if the cached vault addresses are
    // the same to the list we just fetched from the registry
    if (serializedCachedVaults === serializedRegistryVaultsAddresses) {
      return Object.values(this.vaults);
    }

    const registryVaults = await Promise.all(
      registryVaultsInfo.map((registry) => this.fetchVault(registry)),
    );

    this.vaults = Object.fromEntries(
      registryVaults.map((registryVault) => [
        registryVault.address,
        registryVault,
      ]),
    );

    return registryVaults;
  }

  async loadVault({
    address,
    update,
    requireRegistry = true,
    version,
    status,
  }: LoadVaultOptions): Promise<RegistryVault> {
    // vaults may be loaded without a registry but require extra information
    if (!requireRegistry && (!status || !version)) {
      throw new Error(
        'Status and version fields are required when requireRegistry is false',
      );
    }

    const checksumAddress = ethers.utils.getAddress(address);
    const vaultsRegistry = await this.sdk.registry.getProductionVaults();
    const vaultMap = Object.fromEntries(
      vaultsRegistry.flatMap((i) =>
        i.list.map((v) => {
          const vaultAddress = ethers.utils.getAddress(v);
          return [
            vaultAddress,
            { address: vaultAddress, status: i.status, version: i.version },
          ];
        }),
      ),
    );
    let registration = vaultMap[checksumAddress];

    if (requireRegistry && !registration) {
      throw new Error(
        `${checksumAddress} is an unregistered vault, try setting requireRegistry to false`,
      );
    }

    // create a pseudo registration for fetching
    if (!registration) {
      // check for typescript
      if (!status || !version) {
        throw new Error('Invalid vault options provided');
      }
      registration = {
        address: checksumAddress,
        status,
        version,
      };
    }

    if (!this.vaults[checksumAddress] || update) {
      this.vaults[checksumAddress] = await this.fetchVault(registration);
    }

    return this.vaults[checksumAddress];
  }

  async loadVaultPerformance(address: string): Promise<VaultPerformance> {
    const checksumAddress = ethers.utils.getAddress(address);
    const vaultSummary = this.vaultsInfo[checksumAddress];

    if (!vaultSummary || vaultSummary.version != VaultVersion.v1_5) {
      // throw new Error(
      //   `Cannot load performance for ${vaultSummary.version} vault`,
      // );
      console.log('Vault not found');
    }

    const vault = VaultV15__factory.connect(checksumAddress, this.sdk.provider);
    const vaultToken = await this.loadVault({ address: vault.address });
    const token = await this.sdk.tokens.loadToken(vaultToken.token.address);
    const strategyAddress = await vault.strategy();
    const strategy = StrategyV15__factory.connect(
      strategyAddress,
      this.sdk.provider,
    );
    const tokens = await strategy.getProtectedTokens();

    const [
      lastHarvestedAt,
      lastHarvestedAmount,
      lastAssetsAmount,
      lifeTimeEarned,
      balance,
      vaultDepositToken,
    ] = await Promise.all([
      vault.lastHarvestedAt(),
      vault.lastHarvestAmount(),
      vault.assetsAtLastHarvest(),
      vault.lifeTimeEarned(),
      vault.balance(),
      vault.token(),
    ]);

    const depositToken = await this.sdk.tokens.loadToken(vaultDepositToken);
    const previousTreeDistribution = Object.fromEntries(
      await Promise.all(
        tokens.map(async (token) => {
          let rewardTokenDecimals = 18;
          if (token !== ethers.constants.AddressZero) {
            const rewardToken = await this.sdk.tokens.loadToken(token);
            rewardTokenDecimals = rewardToken.decimals;
          }
          const lastAdditionalAmount = await vault.lastAdditionalTokenAmount(
            token,
          );
          return [
            token,
            formatBalance(lastAdditionalAmount, rewardTokenDecimals),
          ];
        }),
      ),
    );
    const [balanceOfRewards, autoCompoundRatio, maxBps] = await Promise.all([
      strategy.balanceOfRewards(),
      strategy.autoCompoundRatio(),
      strategy.MAX_BPS(),
    ]);
    const expectedHarvestAssets = Object.fromEntries(
      await Promise.all(
        balanceOfRewards.map(async (balance) => {
          const rewardToken = await this.sdk.tokens.loadToken(balance.token);
          return [
            rewardToken.address,
            formatBalance(balance.amount, rewardToken.decimals),
          ];
        }),
      ),
    );

    // query previous harvest events to aggregate data
    const harvestFilter = vault.filters.Harvested();
    const harvestEvents = await vault.queryFilter(harvestFilter);

    // collect all the harvest timestamps
    const eventTimestamps = new Set<BigNumber>();
    harvestEvents.forEach((e) => {
      const timestamp = e.args[3];
      if (!eventTimestamps.has(timestamp)) {
        eventTimestamps.add(timestamp);
      }
    });

    /**
     * sort by most recent harvests, and remove all but the most recent 4 harvests
     * we use 4 so we can have 3 harvest cycles, the 4th harvest is used as the
     * start of the first cycle
     */
    const recentTimestamps = [...eventTimestamps]
      .sort((a, b) => b.sub(a).toNumber())
      .slice(0, 3);

    // previous harvest start is the timestamp of the second most recent harvest
    const previousHarvestTimestamp = recentTimestamps[1];
    const firstHarvestTimestamp = recentTimestamps[recentTimestamps.length - 1];
    const recentHarvestEvents = harvestEvents.filter((h) =>
      h.args[3].gte(firstHarvestTimestamp),
    );
    const harvests = await Promise.all(
      recentHarvestEvents.map(async (d): Promise<TokenBalance> => {
        const { name, decimals, symbol } = await this.sdk.tokens.loadToken(
          d.args[0],
        );
        return {
          address: d.args[0],
          balance: formatBalance(d.args[1], decimals),
          name,
          decimals,
          symbol,
          value: 0,
        };
      }),
    );

    const treeDistributionFilter = vault.filters.TreeDistribution();
    const treeDistributionEvents = (
      await vault.queryFilter(treeDistributionFilter)
    ).filter((e) => e.args[3].gte(firstHarvestTimestamp));
    const treeDistributions = await Promise.all(
      treeDistributionEvents.map(async (d): Promise<TokenBalance> => {
        const { name, decimals, symbol } = await this.sdk.tokens.loadToken(
          d.args[0],
        );
        return {
          address: d.args[0],
          balance: formatBalance(d.args[1], decimals),
          name,
          decimals,
          symbol,
          value: 0,
        };
      }),
    );

    // harvests will always report underlying (thus one asset) and can be summed across
    const cumulativeHarvest = harvests.reduce(
      (total, harvest) => (total += harvest.balance),
      0,
    );

    // tree distributions may consist of many tokens and we should sum all of the distributions
    const cumulativeTreeDistributions: Record<string, number> = {};
    treeDistributions.forEach((harvest) => {
      if (!cumulativeTreeDistributions[harvest.address]) {
        cumulativeTreeDistributions[harvest.address] = 0;
      }
      cumulativeTreeDistributions[harvest.address] += harvest.balance;
    });

    const cumulativeHarvestTimeDelta =
      recentTimestamps[0].toNumber() - firstHarvestTimestamp.toNumber();

    const previousHarvestTimeDelta =
      lastHarvestedAt.toNumber() - previousHarvestTimestamp.toNumber();
    const previousHarvest = formatBalance(lastHarvestedAmount, token.decimals);
    const historicBalance = formatBalance(lastAssetsAmount, token.decimals);
    const basePerformance =
      100 *
      (previousHarvest / historicBalance) *
      (ONE_YEAR_MS / 1000 / previousHarvestTimeDelta);

    const expectedHarvestTimeDelta =
      Date.now() / 1000 - lastHarvestedAt.toNumber();
    const currentBalance = formatBalance(balance, depositToken.decimals);
    return {
      // general vault information
      currentBalance,
      historicBalance,
      autoCompoundRatio: autoCompoundRatio.toNumber() / maxBps.toNumber(),
      lifeTimeEarned: formatBalance(lifeTimeEarned, token.decimals),
      basePerformance,

      // values pertaining to the expected harvest
      expectedHarvestTimeDelta,
      expectedHarvestAssets,

      // values pertaining to the previous harvest
      previousHarvest,
      previousHarvestTimeDelta,
      previousTreeDistribution,

      // values pertaining to the previous three harvests
      cumulativeHarvest,
      cumulativeTreeDistributions,
      cumulativeHarvestTimeDelta,
    };
  }

  async listHarvests({
    address,
    timestamp_gt,
    timestamp_gte,
    timestamp_lt,
    timestamp_lte,
  }: ListVaultOptions): Promise<{
    data: {
      timestamp: number;
      harvests: VaultHarvestEvent[];
      treeDistributions: VaultTreeDistributionEvent[];
    }[];
  }> {
    const timestampInRange = (timestamp: number): boolean => {
      if (timestamp_gt && timestamp <= timestamp_gt) {
        return false;
      }
      if (timestamp_gte && timestamp < timestamp_gte) {
        return false;
      }
      if (timestamp_lt && timestamp >= timestamp_lt) {
        return false;
      }
      if (timestamp_lte && timestamp > timestamp_lte) {
        return false;
      }
      return true;
    };

    const strategy = await this.getVaultStrategy(address);
    const harvestFilter = strategy.filters.Harvest();
    const treeDistributionFilter = strategy.filters.TreeDistribution();

    // Get harvest and tree distributions for given time range filter
    const [allHarvestEvents, allTreeDistributionEvents] = await Promise.all([
      strategy.queryFilter(harvestFilter),
      strategy.queryFilter(treeDistributionFilter),
    ]);

    const [harvestEventsWithTimestamps, treeDistributionEventWithTimestamps] =
      await this.parseHarvestEvents(
        allHarvestEvents,
        allTreeDistributionEvents,
      );
    const harvestEvents = harvestEventsWithTimestamps.filter((h) =>
      timestampInRange(h.timestamp),
    );
    const treeDistributionEvents = treeDistributionEventWithTimestamps.filter(
      (d) => timestampInRange(d.timestamp),
    );

    const harvestEventsByTimestamps = keyBy(
      harvestEvents,
      (harvestEvent) => harvestEvent.timestamp,
    );
    const treeDistributionEventsByTimestamps = keyBy(
      treeDistributionEvents,
      (treeDistributionEvent) => treeDistributionEvent.timestamp,
    );

    // Create timestamps for events
    const harvestEventsTimestamps = Array.from(
      harvestEventsByTimestamps.keys(),
    );
    const treeDistributionEventsTimestamps = Array.from(
      treeDistributionEventsByTimestamps.keys(),
    );
    const timestamps = Array.from(
      new Set([
        ...harvestEventsTimestamps,
        ...treeDistributionEventsTimestamps,
      ]),
    ).sort();

    const data = [];
    // Map timestamps to events
    for (const timestamp of timestamps) {
      const harvests = harvestEventsByTimestamps.get(timestamp) ?? [];
      const treeDistributions =
        treeDistributionEventsByTimestamps.get(timestamp) ?? [];
      data.push({
        timestamp,
        harvests,
        treeDistributions,
      });
    }

    return {
      data,
    };
  }

  private async parseHarvestEvents(
    harvestEvents: HarvestEvent[],
    treeDistributionEvents: TreeDistributionEvent[],
  ): Promise<[VaultHarvestEvent[], VaultTreeDistributionEvent[]]> {
    const parsedHarvests = await Promise.all(
      harvestEvents.map(async (event) => {
        const block = await event.getBlock();
        return {
          timestamp: block.timestamp,
          block: block.number,
          harvested: event.args[0],
        };
      }),
    );
    const parsedTreeDistributions = treeDistributionEvents.map((e) => ({
      timestamp: Number(e.args[3].toString()),
      block: e.blockNumber,
      token: e.args[0],
      amount: e.args[1],
    }));
    return [parsedHarvests, parsedTreeDistributions];
  }

  private async init() {
    try {
      await this.sdk.registry.ready();
      const vaultsInfo = await this.sdk.registry.getProductionVaults();
      this.vaultsInfo = Object.fromEntries(
        vaultsInfo.flatMap((info) =>
          info.list.map((vault): [string, VaultRegistration] => [
            vault,
            { address: vault, version: info.version, status: info.status },
          ]),
        ),
      );
    } catch (err) {
      console.log(
        `Failed to initialize vaults for ${this.sdk.config.network}`,
        err,
      );
    }
  }

  private async fetchVault(
    registryVault: VaultRegistryEntry,
  ): Promise<RegistryVault> {
    const { address, status, version } = registryVault;

    const vault = Vault__factory.connect(
      ethers.utils.getAddress(address),
      this.sdk.provider,
    );

    const [
      name,
      symbol,
      decimals,
      token,
      totalSupply,
      available,
      balance,
      pricePerFullShare,
    ] = await Promise.all([
      vault.name(),
      vault.symbol(),
      vault.decimals(),
      vault.token(),
      vault.totalSupply(),
      ...this.getVaultVariantData(vault),
    ]);

    const tokenInfo = await this.sdk.tokens.loadToken(token);

    return {
      address,
      name,
      symbol,
      decimals,
      version: this.getVaultVersion(version),
      state: this.getVaultState(status),
      totalSupply: formatBalance(totalSupply, decimals),
      balance: formatBalance(balance, tokenInfo.decimals),
      available: formatBalance(available, tokenInfo.decimals),
      pricePerFullShare: formatBalance(pricePerFullShare, decimals),
      token: { ...tokenInfo },
    };
  }

  /**
   * some vaults have different way of getting some data, this method abstracts the process of getting them.
   */
  private getVaultVariantData(
    vault: Vault,
  ): [Promise<BigNumber>, Promise<BigNumber>, Promise<BigNumber>] {
    const isYearnWbtc = vault.address === wbtcYearnVault;

    // the byvWBTC vault wrapper does not have the standard available, balance and price per full share method
    if (isYearnWbtc) {
      const byvWbtc = Byvwbtc__factory.connect(
        ethers.utils.getAddress(wbtcYearnVault),
        this.sdk.provider,
      );

      return [
        // TODO: update this to the correct amount
        Promise.resolve(BigNumber.from(0)),
        byvWbtc.totalVaultBalance(ethers.utils.getAddress(wbtcYearnVault)),
        byvWbtc.pricePerShare(),
      ];
    }

    return [vault.available(), vault.balance(), vault.getPricePerFullShare()];
  }

  async getVaultStrategy(address: string): Promise<Strategy> {
    const checksumAddress = ethers.utils.getAddress(address);
    const vault = Vault__factory.connect(checksumAddress, this.sdk.provider);
    const controller = Controller__factory.connect(
      await vault.controller(),
      this.sdk.provider,
    );
    const strategyAddress = await controller.strategies(await vault.token());
    return Strategy__factory.connect(strategyAddress, this.sdk.provider);
  }

  async deposit(vault: string, amount: BigNumber): Promise<TransactionStatus> {
    if (!this.sdk.address || !this.sdk.signer) {
      console.error(`Failed deposit to ${vault}, requires an active signer`);
      return TransactionStatus.Failure;
    }
    const vaultContract = Vault__factory.connect(vault, this.sdk.signer);
    const depositToken = await vaultContract.token();
    const depositTokenContract = Erc20__factory.connect(
      depositToken,
      this.sdk.provider,
    );
    const allowance = await depositTokenContract.allowance(
      this.sdk.address,
      vault,
    );
    if (amount.gt(allowance)) {
      try {
        const approveTx = await depositTokenContract.increaseAllowance(
          vault,
          amount,
        );
        await approveTx.wait();
      } catch (err) {
        console.log(err);
        return TransactionStatus.Failure;
      }
    }
    try {
      // TODO: try a look up via badger api if possible for the current address proof
      const depositTx = await vaultContract['deposit(uint256,bytes32[])'](
        amount,
        [],
      );
      await depositTx.wait();
      return TransactionStatus.Success;
    } catch (err) {
      console.error(err);
      return TransactionStatus.Failure;
    }
  }

  async withdraw(vault: string, amount: BigNumber): Promise<TransactionStatus> {
    if (!this.sdk.address || !this.sdk.signer) {
      console.error(`Failed withdraw to ${vault}, requires an active signer`);
      return TransactionStatus.Failure;
    }
    const vaultContract = Vault__factory.connect(vault, this.sdk.signer);
    try {
      const withdrawTx = await vaultContract.withdraw(amount);
      await withdrawTx.wait();
      return TransactionStatus.Success;
    } catch (err) {
      console.error(err);
      return TransactionStatus.Failure;
    }
  }

  private getVaultVersion(version: string): VaultVersion {
    switch (version) {
      case VaultVersion.v2:
        return VaultVersion.v2;
      case VaultVersion.v1_5:
        return VaultVersion.v1_5;
      default:
        return VaultVersion.v1;
    }
  }

  private getVaultState(status: number): VaultState {
    switch (status) {
      case 2:
        return VaultState.Open;
      case 1:
        return VaultState.Guarded;
      default:
        return VaultState.Experimental;
    }
  }
}
