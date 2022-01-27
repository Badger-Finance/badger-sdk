import { ethers } from 'ethers';
import { BadgerSDK } from '..';
import {
  Sett__factory,
  StrategyV15__factory,
  VaultV15__factory,
} from '../contracts';
import { Service } from '../service';
import { formatBalance } from '../tokens/tokens.utils';
import { VaultVersion } from './enums/vault-version.enum';
import { VaultPerformance, VaultSummary, VaultToken } from './interfaces';

export class VaultsService extends Service {
  private loading: Promise<void>;
  private vaultsInfo: Record<string, VaultSummary>;
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
      throw new Error(
        `Cannot load performance for ${vaultSummary.version} vault`,
      );
    }

    const vault = VaultV15__factory.connect(checksumAddress, this.sdk.provider);
    const vaultState = await this.loadVault(vault.address);
    const token = await this.sdk.tokens.loadToken(vaultState.token);
    const strategyAddress = await vault.strategy();
    const strategy = StrategyV15__factory.connect(
      strategyAddress,
      this.sdk.provider,
    );
    const tokens = await strategy.getProtectedTokens();

    const [
      lastHarvestedAt,
      lastHarvestedAmount,
      assetsAtLastHarvest,
      lifeTimeEarned,
    ] = await Promise.all([
      vault.lastHarvestedAt(),
      vault.lastHarvestAmount(),
      vault.assetsAtLastHarvest(),
      vault.lifeTimeEarned(),
    ]);

    const lastAdditionalTokenAmount = Object.fromEntries(
      await Promise.all(
        tokens.map(async (token) => [
          token,
          vault.lastAdditionalTokenAmount(token),
        ]),
      ),
    );
    const [balanceOfRewards, autoCompoundRatio, maxBps] = await Promise.all([
      strategy.balanceOfRewards(),
      strategy.autoCompoundRatio(),
      strategy.MAX_BPS(),
    ]);
    const evaluatedBalanceOfRewards = Object.fromEntries(
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

    return {
      harvestTimeDelta: Date.now() / 1000 - lastHarvestedAt.toNumber(),
      harvestAmount: formatBalance(lastHarvestedAmount, token.decimals),
      assetsAtLastHarvest: formatBalance(assetsAtLastHarvest, token.decimals),
      lifeTimeEarned: formatBalance(lifeTimeEarned, token.decimals),
      lastAdditionalTokenAmount,
      balanceOfRewards: evaluatedBalanceOfRewards,
      autoCompoundRatio: autoCompoundRatio.toNumber() / maxBps.toNumber(),
    };
  }

  private async init() {
    try {
      await this.sdk.registry.ready();
      const vaultsInfo = await this.sdk.registry.getProductionVaults();
      this.vaultsInfo = Object.fromEntries(
        vaultsInfo.flatMap((info) =>
          info.list.map((vault): [string, VaultSummary] => [
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
}
