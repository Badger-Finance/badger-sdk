import { BigNumber, BigNumberish, ethers } from 'ethers';

import { Network } from '../config/enums/network.enum';
import { Digg } from '../contracts/Digg';
import { Digg__factory } from '../contracts/factories/Digg__factory';
import { BadgerSDK } from '../sdk';
import { Service } from '../service';
import { formatBalance } from '../tokens/tokens.utils';

export class DiggService extends Service {
  static readonly DIGG_ADDRESS = ethers.utils.getAddress(
    '0x798D1bE841a82a273720CE31c822C61a67a601C3',
  );
  static readonly DIGG_SHARES_PER_FRAGMENT = BigNumber.from(
    '222256308823765331027878635805365830922307440079959220679625904457',
  );
  static readonly DIGG_DECIMALS = BigNumber.from('9');

  private _digg?: Digg;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    if (this.config.network === Network.Ethereum) {
      this._digg = Digg__factory.connect(
        DiggService.DIGG_ADDRESS,
        this.provider,
      );
    }
  }

  get digg(): Digg {
    if (!this._digg) {
      throw new Error(`Digg is not defined for ${this.config.network}`);
    }
    return this._digg;
  }

  convert(shares: BigNumberish): number {
    const fragments = BigNumber.from(shares).div(
      DiggService.DIGG_SHARES_PER_FRAGMENT,
    );
    return formatBalance(fragments, DiggService.DIGG_DECIMALS);
  }
}
