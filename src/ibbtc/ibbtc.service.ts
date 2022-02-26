import { Network } from '../config/enums/network.enum';
import { Ibbtc__factory } from '../contracts/factories/Ibbtc__factory';
import { Ibbtc } from '../contracts/Ibbtc';
import { BadgerSDK } from '../sdk';
import { Service } from '../service';
import { formatBalance } from '../tokens/tokens.utils';

export class ibBTCService extends Service {
  private ibBTC?: Ibbtc;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    this.init();
  }

  async getPricePerFullShare(blockTag?: number): Promise<number> {
    if (!this.ibBTC) {
      throw new Error(`ibBTC is not defined on ${this.config.network}`);
    }
    const [pricePerFullShare, token] = await Promise.all([
      this.ibBTC.pricePerShare({ blockTag }),
      this.sdk.tokens.loadToken(this.ibBTC.address),
    ]);
    return formatBalance(pricePerFullShare, token.decimals);
  }

  private init() {
    if (this.config.network !== Network.Ethereum) {
      return;
    }
    this.ibBTC = Ibbtc__factory.connect(
      '0xc4E15973E6fF2A35cC804c2CF9D2a1b817a8b40F',
      this.provider,
    );
  }
}
