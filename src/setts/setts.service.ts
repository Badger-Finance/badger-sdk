import { ethers } from 'ethers';
import { BadgerSDK } from '..';
import { Sett__factory } from '../contracts';
import { Service } from '../service';
import { formatBalance } from '../tokens/tokens.utils';
import { SettToken } from './interfaces/sett-token.interface';

export class SettsService extends Service {
  private setts: Record<string, SettToken>;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    this.setts = {};
  }

  async loadSett(address: string, update = false): Promise<SettToken> {
    const checksumAddress = ethers.utils.getAddress(address);
    if (!this.setts[checksumAddress] || update) {
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
      this.setts[checksumAddress] = {
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
    return this.setts[checksumAddress];
  }
}
