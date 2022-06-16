import { BigNumber } from '@ethersproject/bignumber';
import { ethers } from 'ethers';

import { Network } from '../config/enums/network.enum';
import { Digg } from '../contracts/Digg';
import { Digg__factory } from '../contracts/factories/Digg__factory';
import { BadgerSDK } from '../sdk';
import { Service } from '../service';
import { formatBalance } from '../tokens/tokens.utils';

export const DIGG_ADDRESS = ethers.utils.getAddress(
  '0x798D1bE841a82a273720CE31c822C61a67a601C3',
);

export class DiggService extends Service {
  private _digg?: Digg;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    if (this.config.network === Network.Ethereum) {
      this._digg = Digg__factory.connect(DIGG_ADDRESS, this.provider);
    }
  }

  get digg(): Digg {
    if (!this._digg) {
      throw new Error(`Digg is not defined for ${this.config.network}`);
    }
    return this._digg;
  }

  async convert(shares: BigNumber): Promise<number> {
    const [fragments, token] = await Promise.all([
      this.digg.sharesToFragments(shares),
      this.sdk.tokens.loadToken(this.digg.address),
    ]);
    return formatBalance(fragments, token.decimals);
  }
}
