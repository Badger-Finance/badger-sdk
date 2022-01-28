import { BigNumber, ethers } from 'ethers';
import { BadgerSDK, TokenBalance, VaultState } from '..';
import {
  Sett__factory,
  StrategyV15__factory,
  VaultV15__factory,
} from '../contracts';
import { VaultInfo } from '../registry/interfaces/vault-info.interface';
import { Service } from '../service';
import { formatBalance } from '../tokens/tokens.utils';
import { VaultVersion } from './enums/vault-version.enum';
import { VaultPerformance, VaultRegistration, VaultToken } from './interfaces';
import { RegistryVault } from './vault';
import { ONE_YEAR_MS } from '../config/constants';

export class VaultsService extends Service {
  private loading: Promise<void>;
  private vaultsInfo: Record<string, VaultRegistration>;
  private vaults: Record<string, VaultToken>;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    this.vaultsInfo = {};
    this.vaults = {};
    this.loading = this.init();
  }

  async ready() {
    return this.loading;
  }

  async loadVaults() {
    const vaultInfo = await this.sdk.registry.getProductionVaults();
    return vaultInfo.flatMap((info) => {
      const vaultState = this.getVaultState(info);
      const vaultVersion = this.getVaultVersion(info);
      return info.list.map(
        (vault) => new RegistryVault(vault, vaultState, vaultVersion),
      );
    });
  }

  async loadVault(address: string, update = false): Promise<VaultToken> {
    const checksumAddress = ethers.utils.getAddress(address);
    if (!this.vaults[checksumAddress] || update) {
      const sett = Sett__factory.connect(checksumAddress, this.provider);
      const [
        name,
        symbol,
        decimals,
        token,
        available,
        balance,
        totalSupply,
        pricePerFullShare,
      ] = await Promise.all([
        sett.name(),
        sett.symbol(),
        sett.decimals(),
        sett.token(),
        sett.available(),
        sett.balance(),
        sett.totalSupply(),
        sett.getPricePerFullShare(),
      ]);
      this.vaults[checksumAddress] = {
        address: checksumAddress,
        name,
        symbol,
        decimals,
        token,
        available: formatBalance(available, decimals),
        totalSupply: formatBalance(totalSupply, decimals),
        balance: formatBalance(balance, decimals),
        pricePerFullShare: formatBalance(pricePerFullShare, decimals),
      };
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
    const vaultToken = await this.loadVault(vault.address);
    const token = await this.sdk.tokens.loadToken(vaultToken.token);
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

  private getVaultVersion(vault: VaultInfo): VaultVersion {
    switch (vault.version) {
      case VaultVersion.v2:
        return VaultVersion.v2;
      case VaultVersion.v1_5:
        return VaultVersion.v1_5;
      default:
        return VaultVersion.v1;
    }
  }

  private getVaultState(vault: VaultInfo): VaultState {
    switch (vault.status) {
      case 2:
        return VaultState.Open;
      case 1:
        return VaultState.Guarded;
      default:
        return VaultState.Experimental;
    }
  }
}
