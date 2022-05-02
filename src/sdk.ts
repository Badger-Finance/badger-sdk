import { ethers } from 'ethers';
import { providers } from '@0xsequence/multicall';

import { Signer } from '@ethersproject/abstract-signer';
import { Networkish } from '@ethersproject/providers';

import { APIOptions, BadgerAPI, LogLevel } from './api';
import { BadgerGraph } from './graphql';

import { DiggService } from './digg/digg.service';
import { ibBTCService } from './ibbtc/ibbtc.service';
import { RegistryService } from './registry/registry.service';
import { RewardsService } from './rewards/rewards.service';
import { VaultsService } from './vaults/vaults.service';
import { TokensService } from './tokens/tokens.service';
import { CitadelService } from './citadel';

import { getNetworkConfig, NetworkConfig, SDKProvider } from './config';

export interface SDKOptions extends APIOptions {
  provider: SDKProvider | string;
}

export class BadgerSDK {
  private loading: Promise<void>;

  public logLevel: LogLevel;

  public address?: string;
  public api: BadgerAPI;
  public graph: BadgerGraph;
  public config: NetworkConfig;
  public provider: providers.MulticallProvider;
  public signer?: Signer;

  readonly registry: RegistryService;
  readonly digg: DiggService;
  readonly ibbtc: ibBTCService;
  readonly rewards: RewardsService;
  readonly tokens: TokensService;
  readonly vaults: VaultsService;
  readonly citadel: CitadelService;

  constructor({
    network,
    provider,
    baseURL,
    citadelBaseURL,
    logLevel = LogLevel.Error,
  }: SDKOptions) {
    this.logLevel = logLevel;
    const sdkProvider = BadgerSDK.getSdkProvider(provider);
    this.provider = new providers.MulticallProvider(sdkProvider);
    this.signer = sdkProvider.getSigner();
    this.loading = this.initialize();
    this.config = getNetworkConfig(network);
    this.api = new BadgerAPI({
      baseURL,
      citadelBaseURL,
      logLevel,
      network: this.config.network,
    });
    this.graph = new BadgerGraph({
      network: this.config.network,
    });
    this.digg = new DiggService(this);
    this.ibbtc = new ibBTCService(this);
    this.registry = new RegistryService(this);
    this.rewards = new RewardsService(this);
    this.tokens = new TokensService(this);
    this.vaults = new VaultsService(this);
    this.citadel = new CitadelService(this);
  }

  ready() {
    return Promise.all([
      this.loading,
      this.registry.ready(),
      this.rewards.ready(),
    ]);
  }

  update(network: Networkish, provider: SDKProvider) {
    this.updateNetwork(network);
    this.updateProvider(provider);
  }

  updateNetwork(network: Networkish) {
    this.config = getNetworkConfig(network);
    this.api = new BadgerAPI({
      network: this.config.network,
      baseURL: this.api.baseURL,
      citadelBaseURL: this.api.citadelBaseURL,
      logLevel: this.api.logger.level,
    });
    this.graph = new BadgerGraph({
      network: this.config.network,
    });
  }

  updateProvider(provider: SDKProvider) {
    const sdkProvider = BadgerSDK.getSdkProvider(provider);

    this.provider = new providers.MulticallProvider(sdkProvider);
    this.signer = sdkProvider.getSigner();
    this.loading = this.initialize();
  }

  private static getSdkProvider(provider: SDKProvider | string): SDKProvider {
    let sdkProvider: SDKProvider;

    if (typeof provider === 'string') {
      sdkProvider = new ethers.providers.JsonRpcBatchProvider(provider);
    } else {
      sdkProvider = provider;
    }

    return sdkProvider;
  }

  private async initialize() {
    try {
      if (this.signer) {
        this.address = await this.signer.getAddress();
      }
    } catch {} // ignore errors from getting address
  }
}
