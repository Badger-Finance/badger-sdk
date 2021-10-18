import { Signer } from '@ethersproject/abstract-signer';
import { Networkish } from '@ethersproject/providers';
import { Network } from './config/enums/network.enum';
import { RegistryService } from './registry/registry.service';
import { TokensService } from './tokens/tokens.service';
import { SdkProvider } from './types/sdk-provider';

export class BadgerSDK {
  public signer?: Signer;
  public network: Network;
  public registry: RegistryService;
  public tokens: TokensService;

  constructor(network: Networkish, public provider: SdkProvider) {
    this.signer = this.provider.getSigner();
    this.network = this.resolveNetwork(network);
    this.registry = new RegistryService(this);
    this.tokens = new TokensService(this);
  }

  async ready() {
    return Promise.all([this.registry.ready()]);
  }

  private resolveNetwork(network: Networkish): Network {
    return Network.Ethereum;
  }
}
