import { ethers } from 'ethers';
import { BadgerSDK } from '..';
import { Sett__factory } from '../contracts';
import { Service } from '../service';
import { formatBalance } from '../tokens/tokens.utils';
import { VaultToken } from './interfaces/vault-token.interface';

export class VaultsService extends Service {
  private vaults: Record<string, VaultToken>;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    this.vaults = {};
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
}
