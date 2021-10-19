import { Signer } from '@ethersproject/abstract-signer';
import { Networkish } from '@ethersproject/providers';
import { ApiService } from './api/api.service';
import { NetworkConfig } from './config/network/network.config';
import { DiggService } from './digg/digg.service';
import { ibBTCService } from './ibbtc/ibbtc.service';
import { RegistryService } from './registry/registry.service';
import { RewardsService } from './rewards/rewards.service';
import { SettsService } from './setts/setts.service';
import { TokensService } from './tokens/tokens.service';
import { SdkProvider } from './types/sdk-provider';

export class BadgerSDK {
  public network: NetworkConfig;
  public signer?: Signer;

  readonly api = new ApiService(this);
  readonly registry = new RegistryService(this);
  readonly tokens = new TokensService(this);
  readonly setts = new SettsService(this);
  readonly rewards = new RewardsService(this);
  readonly digg = new DiggService(this);
  readonly ibbtc = new ibBTCService(this);

  constructor(network: Networkish, public provider: SdkProvider) {
    this.network = NetworkConfig.getConfig(network);
    this.signer = this.provider.getSigner();
  }

  async ready() {
    return Promise.all([this.registry.ready()]);
  }
}
