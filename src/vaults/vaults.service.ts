import { BigNumber, ethers } from 'ethers';

import {
  RegistryVault,
  TransactionStatus,
  VaultRegistryEntry,
  VaultState,
  VaultVersion,
} from '..';
import { RangeOptions } from '../common/interfaces/range-options.interface';
import {
  Byvwbtc__factory,
  Controller__factory,
  Strategy__factory,
  StrategyV15__factory,
  Vault,
  Vault__factory,
  VaultV15__factory,
} from '../contracts';
import { VaultRegistryV2Entry } from '../registry.v2/interfaces';
import { Service } from '../service';
import { formatBalance, TokenBalance } from '../tokens';
import { getBlockDeployedAt } from '../utils/deployed-at.util';
import {
  GetVaultStrategyOptions,
  ListHarvestOptions,
  LoadVaultOptions,
  VaultHarvestData,
} from './interfaces';
import { VaultActionOptions } from './interfaces/vault-action-options.interface';
import {
  loadVaultPerformanceEvents,
  loadVaultV15PerformanceEvents,
} from './vaults.utils';

const wbtcYearnVault = '0x4b92d19c11435614CD49Af1b589001b7c08cD4D5';
const diggStabilizerVault = '0x608b6D82eb121F3e5C0baeeD32d81007B916E83C';

export class VaultsService extends Service {
  private vaults: Record<string, RegistryVault> = {};

  async loadVaults(useV2Reg = false): Promise<RegistryVault[]> {
    const registry = await (useV2Reg
      ? this.sdk.registryV2.getProductionVaults()
      : this.sdk.registry.getProductionVaults());

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
      registryVaults.map((registryVault) => {
        registryVault.metadata = {};

        const regV2Vault = registry.find(
          (entry) => entry.address === registryVault.address,
        );

        // rm with regV1
        if (regV2Vault && (<VaultRegistryV2Entry>regV2Vault).metadata) {
          registryVault.metadata = (<VaultRegistryV2Entry>regV2Vault).metadata;
        }

        return [registryVault.address, registryVault];
      }),
    );

    return registryVaults;
  }

  async loadVault({
    address,
    update,
    requireRegistry = true,
    version = VaultVersion.v1_5,
    state = VaultState.Guarded,
    useV2Reg = false,
  }: LoadVaultOptions): Promise<RegistryVault> {
    // vaults may be loaded without a registry but require extra information
    if (!requireRegistry && !useV2Reg && (!state || !version)) {
      throw new Error(
        'State and version fields are required when requireRegistry is false',
      );
    }

    let registration;
    const checksumAddress = ethers.utils.getAddress(address);
    const cachedVault = this.vaults[checksumAddress];
    if (!cachedVault) {
      const vaultsRegistry = await (useV2Reg
        ? this.sdk.registryV2.getProductionVaults()
        : this.sdk.registry.getProductionVaults());

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

    this.vaults[checksumAddress].metadata = {};

    // rm with regV1
    if ((<VaultRegistryV2Entry>registration).metadata) {
      this.vaults[checksumAddress].metadata = (<VaultRegistryV2Entry>(
        registration
      )).metadata;
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

  async deposit(options: VaultActionOptions): Promise<TransactionStatus> {
    const {
      vault,
      amount,
      overrides,
      onError,
      onRejection,
      onTransferPrompt,
      onTransferSigned,
      onTransferSuccess,
    } = options;
    if (!this.address || !this.signer) {
      const message = `Failed deposit to ${vault}, requires an active signer`;
      this.error(message);
      if (onError) {
        onError(message);
      }
      return TransactionStatus.Failure;
    }

    const vaultContract = Vault__factory.connect(vault, this.signer);
    const { name: token, token: depositToken } =
      await this.sdk.vaults.loadVault({
        address: vault,
        useV2Reg: true,
        requireRegistry: false,
      });
    const vaultBalance = await this.sdk.tokens.loadBalance(
      depositToken.address,
    );

    if (vaultBalance.lt(amount)) {
      this.error(
        `Failed deposit to ${vault}, amount requested is greater than user balance`,
      );
      if (onError) {
        onError(`Deposit amount requested is greater than balance!`);
      }
      return TransactionStatus.Failure;
    }

    let result = TransactionStatus.UserConfirmation;

    try {
      const allowanceTransactionStatus =
        await this.sdk.tokens.verifyOrIncreaseAllowance({
          ...options,
          token: depositToken.address,
          amount,
          spender: vault,
        });

      if (allowanceTransactionStatus != TransactionStatus.Success) {
        return allowanceTransactionStatus;
      }

      let proof: string[] = [];
      try {
        proof = await this.api.loadProof(this.address);
      } catch {} // ignore no proofs
      const tokenName = await vaultContract.name();
      if (onTransferPrompt) {
        onTransferPrompt({ token, amount });
      }
      const depositTx = await vaultContract['deposit(uint256,bytes32[])'](
        amount,
        proof,
        { ...overrides },
      );
      result = TransactionStatus.Pending;
      if (onTransferSigned) {
        onTransferSigned({ token: tokenName, amount, transaction: depositTx });
      }
      const receipt = await depositTx.wait();
      result = TransactionStatus.Success;
      if (onTransferSuccess) {
        onTransferSuccess({ token: tokenName, amount, receipt });
      }
    } catch (err) {
      this.warn(err);
      if (result !== TransactionStatus.UserConfirmation) {
        if (onError) {
          onError(err);
        }
        return TransactionStatus.Failure;
      }
      if (onRejection) {
        onRejection();
      }
      result = TransactionStatus.Canceled;
    }

    return result;
  }

  async withdraw({
    vault,
    amount,
    overrides,
    onError,
    onRejection,
    onTransferPrompt,
    onTransferSigned,
    onTransferSuccess,
  }: VaultActionOptions): Promise<TransactionStatus> {
    if (!this.address || !this.sdk.signer) {
      this.error(`Failed withdraw to ${vault}, requires an active signer`);
      return TransactionStatus.Failure;
    }

    const vaultContract = Vault__factory.connect(vault, this.sdk.signer);
    const token = await vaultContract.name();
    const vaultBalance = await this.sdk.tokens.loadBalance(vault);
    if (vaultBalance.lt(amount)) {
      this.error(
        `Failed withdraw to ${vault}, amount requested is greater than user balance`,
      );
      if (onError) {
        onError(`Withdraw amount requested is greater than balance!`);
      }
      return TransactionStatus.Failure;
    }

    let result = TransactionStatus.UserConfirmation;

    try {
      if (onTransferPrompt) {
        onTransferPrompt({ token, amount });
      }
      const withdrawTx = await vaultContract.withdraw(amount, { ...overrides });
      if (onTransferSigned) {
        onTransferSigned({ token, amount, transaction: withdrawTx });
      }
      result = TransactionStatus.Pending;
      const receipt = await withdrawTx.wait();
      if (onTransferSuccess) {
        onTransferSuccess({ token, amount, receipt });
      }
      result = TransactionStatus.Success;
    } catch (err) {
      // TODO: refactor this common function pattern to a harness
      if (result !== TransactionStatus.UserConfirmation) {
        this.error(err);
        if (onError) {
          onError(err);
        }
        return TransactionStatus.Failure;
      } else {
        this.debug(err);
      }
      if (onRejection) {
        onRejection();
      }
      result = TransactionStatus.Canceled;
    }

    return result;
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
