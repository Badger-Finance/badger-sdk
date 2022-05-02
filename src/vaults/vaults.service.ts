import { BigNumber, ethers } from 'ethers';
import {
  RegistryVault,
  TransactionStatus,
  VaultRegistryEntry,
  VaultVersion,
} from '..';
import {
  Byvwbtc__factory,
  Vault__factory,
  Controller__factory,
  Strategy__factory,
  Vault,
  Erc20__factory,
  VaultV15__factory,
  StrategyV15__factory,
} from '../contracts';
import { Service } from '../service';
import { formatBalance, TokenBalance } from '../tokens';
import {
  GetVaultStrategyOptions,
  ListHarvestOptions,
  LoadVaultOptions,
  VaultHarvestData,
} from './interfaces';
import {
  loadVaultPerformanceEvents,
  loadVaultV15PerformanceEvents,
} from './vaults.utils';
import { RangeOptions } from '../common/interfaces/range-options.interface';
import { getBlockDeployedAt } from '../utils/deployed-at.util';

const wbtcYearnVault = '0x4b92d19c11435614CD49Af1b589001b7c08cD4D5';
const diggStabilizerVault = '0x608b6D82eb121F3e5C0baeeD32d81007B916E83C';

export class VaultsService extends Service {
  private vaults: Record<string, RegistryVault> = {};

  async loadVaults(): Promise<RegistryVault[]> {
    const registry = await this.sdk.registry.getProductionVaults();

    const registryVaultsInfo = registry.filter(
      (v) => v.address !== diggStabilizerVault,
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
      registryVaultsInfo.map((info) => this.#fetchVault(info)),
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
    version = VaultVersion.v1,
    state,
  }: LoadVaultOptions): Promise<RegistryVault> {
    // vaults may be loaded without a registry but require extra information
    if (!requireRegistry && (!state || !version)) {
      throw new Error(
        'State and version fields are required when requireRegistry is false',
      );
    }

    let registration;
    const checksumAddress = ethers.utils.getAddress(address);
    const cachedVault = this.vaults[checksumAddress];
    if (!cachedVault) {
      const vaultsRegistry = await this.sdk.registry.getProductionVaults();
      const vaultMap = Object.fromEntries(
        vaultsRegistry.map((vault) => [vault.address, vault]),
      );

      const vaultRegistration = vaultMap[checksumAddress];
      if (requireRegistry && !vaultRegistration) {
        throw new Error(
          `${checksumAddress} is an unregistered vault, try setting requireRegistry to false`,
        );
      }

      // create a pseudo registration for fetching
      if (!vaultRegistration) {
        // check for typescript
        if (!state || !version) {
          throw new Error('Invalid vault options provided');
        }
        registration = {
          address: checksumAddress,
          state,
          version,
        };
      } else {
        registration = vaultRegistration;
      }
    } else {
      registration = cachedVault;
    }

    if (!cachedVault || update) {
      this.vaults[checksumAddress] = await this.#fetchVault(registration);
    }

    return this.vaults[checksumAddress];
  }

  async listHarvests(
    options: ListHarvestOptions,
  ): Promise<{ data: VaultHarvestData[] }> {
    const {
      address,
      version = VaultVersion.v1,
      startBlock,
      endBlock,
    } = options;

    const vaultDeployedAt = getBlockDeployedAt(address, this.config.network);

    if (!startBlock) options.startBlock = vaultDeployedAt;
    if (!endBlock) options.endBlock = await this.sdk.provider.getBlockNumber();

    if (version === VaultVersion.v1_5) {
      const vault = VaultV15__factory.connect(address, this.sdk.provider);
      return loadVaultV15PerformanceEvents(vault, <RangeOptions>options);
    }
    const strategyAddress = await this.getVaultStrategy({ address, version });
    const strategy = Strategy__factory.connect(
      strategyAddress,
      this.sdk.provider,
    );
    return loadVaultPerformanceEvents(strategy, <RangeOptions>options);
  }

  async getVaultStrategy({
    address,
    version = VaultVersion.v1,
  }: GetVaultStrategyOptions): Promise<string> {
    if (version === VaultVersion.v1_5) {
      const vault = VaultV15__factory.connect(address, this.sdk.provider);
      return vault.strategy();
    }
    const vault = Vault__factory.connect(address, this.sdk.provider);
    const controller = Controller__factory.connect(
      await vault.controller(),
      this.sdk.provider,
    );
    return controller.strategies(await vault.token());
  }

  async getPendingYield(
    address: string,
  ): Promise<{ lastHarvestedAt: number; tokenRewards: TokenBalance[] }> {
    return this.#getPendingAssets(address, false);
  }

  async getPendingHarvest(
    address: string,
  ): Promise<{ lastHarvestedAt: number; tokenRewards: TokenBalance[] }> {
    return this.#getPendingAssets(address, true);
  }

  async deposit(vault: string, amount: BigNumber): Promise<TransactionStatus> {
    if (!this.sdk.address || !this.sdk.signer) {
      this.error(`Failed deposit to ${vault}, requires an active signer`);
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
        this.log(err);
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
      this.error(err);
      return TransactionStatus.Failure;
    }
  }

  async withdraw(vault: string, amount: BigNumber): Promise<TransactionStatus> {
    if (!this.sdk.address || !this.sdk.signer) {
      this.error(`Failed withdraw to ${vault}, requires an active signer`);
      return TransactionStatus.Failure;
    }
    const vaultContract = Vault__factory.connect(vault, this.sdk.signer);
    try {
      const withdrawTx = await vaultContract.withdraw(amount);
      await withdrawTx.wait();
      return TransactionStatus.Success;
    } catch (err) {
      this.error(err);
      return TransactionStatus.Failure;
    }
  }

  async #fetchVault(registryVault: VaultRegistryEntry): Promise<RegistryVault> {
    const { address, state, version } = registryVault;

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
      ...this.#getVaultVariantData(vault),
    ]);

    const tokenInfo = await this.sdk.tokens.loadToken(token);

    return {
      address,
      name,
      symbol,
      decimals,
      version,
      state,
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
  #getVaultVariantData(
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

  async #getPendingAssets(
    address: string,
    harvest: boolean,
  ): Promise<{ lastHarvestedAt: number; tokenRewards: TokenBalance[] }> {
    const checksumAddress = ethers.utils.getAddress(address);
    const vault = VaultV15__factory.connect(checksumAddress, this.sdk.provider);
    const [lastHarvestedAt, strategyAddress] = await Promise.all([
      vault.lastHarvestedAt(),
      vault.strategy(),
    ]);
    const strategy = StrategyV15__factory.connect(
      strategyAddress,
      this.sdk.provider,
    );
    let pendingRewards;
    if (harvest) {
      pendingRewards = await strategy.callStatic.harvest({
        from: await strategy.keeper(),
      });
    } else {
      pendingRewards = await strategy.balanceOfRewards();
    }
    const tokenRewards = await Promise.all(
      pendingRewards.map(async (r) => {
        const pendingTokens = await this.sdk.tokens.loadToken(r.token);
        const pendingAmount = formatBalance(r.amount, pendingTokens.decimals);
        return {
          ...pendingTokens,
          balance: pendingAmount,
        };
      }),
    );
    return {
      lastHarvestedAt: lastHarvestedAt.toNumber(),
      tokenRewards,
    };
  }
}
