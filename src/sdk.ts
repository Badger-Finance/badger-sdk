import { Signer } from '@ethersproject/abstract-signer';
import { Networkish } from '@ethersproject/providers';
import { BadgerAPI } from './api';
import { SUPPORTED_NETWORKS } from './config/constants';
import { NetworkConfig } from './config/network/network.config';
import { DiggService } from './digg/digg.service';
import { ibBTCService } from './ibbtc/ibbtc.service';
import { RegistryService } from './registry/registry.service';
import { RewardsService } from './rewards/rewards.service';
import { SettsService } from './setts/setts.service';
import { TokensService } from './tokens/tokens.service';
import { SdkProvider } from './types/sdk-provider';

export class BadgerSDK {
  public config: NetworkConfig;
  public signer?: Signer;

  readonly api: BadgerAPI;
  readonly registry: RegistryService;
  readonly tokens: TokensService;
  readonly setts: SettsService;
  readonly rewards: RewardsService;
  readonly digg: DiggService;
  readonly ibbtc: ibBTCService;

  constructor(network: Networkish, public provider: SdkProvider) {
    this.initialize();
    this.config = NetworkConfig.getConfig(network);
    this.signer = this.provider.getSigner();

    this.api = new BadgerAPI(this.config.network);
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

  private initialize() {
    for (const config of SUPPORTED_NETWORKS) {
      NetworkConfig.register(config);
    }
  }
}
