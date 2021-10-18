import { Signer } from '@ethersproject/abstract-signer';
import { Networkish } from '@ethersproject/providers';
import { Network } from './config/enums/network.enum';
import { DiggService } from './digg/digg.service';
import { ibBTCService } from './ibbtc/ibbtc.service';
import { RegistryService } from './registry/registry.service';
import { RewardsService } from './rewards/rewards.service';
import { SettsService } from './setts/setts.service';
import { TokensService } from './tokens/tokens.service';
import { SdkProvider } from './types/sdk-provider';

export class BadgerSDK {
  public signer?: Signer;
  public network: Network;
  public registry: RegistryService;
  public tokens: TokensService;
  public setts: SettsService;
  public rewards: RewardsService;
  public digg: DiggService;
  public ibbtc: ibBTCService;

  constructor(network: Networkish, public provider: SdkProvider) {
    this.signer = this.provider.getSigner();
    this.network = this.resolveNetwork(network);
    this.registry = new RegistryService(this);
    this.tokens = new TokensService(this);
    this.setts = new SettsService(this);
    this.rewards = new RewardsService(this);
    this.digg = new DiggService(this);
    this.ibbtc = new ibBTCService(this);
  }

  async ready() {
    return Promise.all([this.registry.ready()]);
  }

  private resolveNetwork(network: Networkish): Network {
    return Network.Ethereum;
  }
}
