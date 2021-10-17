import { Web3Provider, Networkish } from '@ethersproject/providers';
import { Network } from './config/enums/network.enum';
import { TokensService } from './tokens/tokens.service';

export class BadgerSDK {
  public tokens: TokensService;

  constructor(network: Networkish, provider: Web3Provider) {
    const sdkNetwork = this.resolveNetwork(network);
    this.tokens = new TokensService(sdkNetwork, provider);
  }

  private resolveNetwork(network: Networkish): Network {
    return Network.Ethereum;
  }
}
