import { Signer } from '@ethersproject/abstract-signer';
import { Networkish } from '@ethersproject/providers';
import { BadgerAPI, DEFAULT_API_URL } from './api';
import { SUPPORTED_NETWORKS } from './config/constants';
import { NetworkConfig } from './config/network/network.config';
import { DiggService } from './digg/digg.service';
import { ibBTCService } from './ibbtc/ibbtc.service';
import { RegistryService } from './registry/registry.service';
import { RewardsService } from './rewards/rewards.service';
import { SettsService } from './setts/setts.service';
import { TokensService } from './tokens/tokens.service';
import { SDKProvider } from './config/types/sdk-provider';

export class BadgerSDK {
  private static initialized = false;
  private loading: Promise<void>;
  public config: NetworkConfig;
  public signer?: Signer;
  public address?: string;

  readonly api: BadgerAPI;
  readonly registry: RegistryService;
  readonly tokens: TokensService;
  readonly setts: SettsService;
  readonly rewards: RewardsService;
  readonly digg: DiggService;
  readonly ibbtc: ibBTCService;

  constructor(
    network: Networkish,
    public provider: SDKProvider,
    baseURL = DEFAULT_API_URL,
  ) {
    if (!BadgerSDK.initialized) {
      for (const config of SUPPORTED_NETWORKS) {
        NetworkConfig.register(config);
      }
      BadgerSDK.initialized = true;
    }
    this.config = NetworkConfig.getConfig(network);
    this.signer = this.provider.getSigner();
    this.loading = this.initialize();

    this.api = new BadgerAPI(this.config.network, baseURL);
    this.registry = new RegistryService(this);
    this.tokens = new TokensService(this);
    this.setts = new SettsService(this);
    this.rewards = new RewardsService(this);
    this.digg = new DiggService(this);
    this.ibbtc = new ibBTCService(this);
  }

  async ready() {
    return Promise.all([this.loading, this.rewards.ready()]);
  }

  private async initialize() {
    try {
      if (this.signer) {
        this.address = await this.signer.getAddress();
      }
    } catch {} // ignore errors from getting address
  }
}
