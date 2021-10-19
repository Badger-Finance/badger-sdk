import { BigNumber } from '@ethersproject/bignumber';
import { Network } from '../config/enums/network.enum';
import { Digg } from '../contracts/Digg';
import { Digg__factory } from '../contracts/factories/Digg__factory';
import { BadgerSDK } from '../sdk';
import { Service } from '../service';
import { formatBalance } from '../tokens/tokens.utils';

export class DiggService extends Service {
  private digg?: Digg;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    if (this.config.network === Network.Ethereum) {
      this.digg = Digg__factory.connect(this.config.tokens.DIGG, this.provider);
    }
  }

  async convert(shares: BigNumber): Promise<number> {
    if (!this.digg) {
      throw new Error(`Digg is not defined for ${this.config.network}`);
    }
    const [fragments, token] = await Promise.all([
      this.digg.sharesToFragments(shares),
      this.sdk.tokens.loadToken(this.digg.address),
    ]);
    return formatBalance(fragments, token.decimals);
  }
}
