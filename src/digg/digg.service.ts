import { BigNumber } from '@ethersproject/bignumber';
import { ethers } from 'ethers';
import { Network } from '../config/enums/network.enum';
import { Digg } from '../contracts/Digg';
import { Digg__factory } from '../contracts/factories/Digg__factory';
import { BadgerSDK } from '../sdk';
import { Service } from '../service';

export class DiggService extends Service {
  private loading: Promise<void>;
  private digg?: Digg;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    this.loading = this.init();
  }

  async ready() {
    return this.loading;
  }

  async convert(shares: BigNumber): Promise<number> {
    if (!this.digg) {
      throw new Error(`Digg is not defined for ${this.network}`);
    }
    const [fragments, token] = await Promise.all([
      this.digg.sharesToFragments(shares),
      this.sdk.tokens.loadToken(this.digg.address),
    ]);
    return Number(ethers.utils.formatUnits(fragments, token.decimals));
  }

  private async init() {
    if (this.network !== Network.Ethereum) {
      return;
    }
    this.digg = Digg__factory.connect(
      '0x798D1bE841a82a273720CE31c822C61a67a601C3',
      this.provider,
    );
  }
}
