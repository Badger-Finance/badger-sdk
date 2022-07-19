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
export const DIGG_SHARES_PER_FRAGMENT = BigNumber.from("222256308823765331027878635805365830922307440079959220679625904457");
export const DIGG_DECIMALS = BigNumber.from("9");

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

  convert(shares: BigNumber): number {
    const fragments = BigNumber.from(shares).div(DIGG_SHARES_PER_FRAGMENT);
    return formatBalance(fragments, DIGG_DECIMALS);
  }
}
