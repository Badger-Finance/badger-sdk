import { providers } from '@0xsequence/multicall';
import { Signer } from '@ethersproject/abstract-signer';
import { ethers } from 'ethers';

import { APIOptions, BadgerAPI, LogLevel } from './api';
import { getNetworkConfig, NetworkConfig, SDKProvider } from './config';
import { DiggService } from './digg/digg.service';
import { BadgerGraph } from './graphql';
import { ibBTCService } from './ibbtc/ibbtc.service';
import { RegistryService } from './registry/registry.service';
import { RewardsService } from './rewards/rewards.service';
import { TokensService } from './tokens/tokens.service';
import { VaultsService } from './vaults/vaults.service';

export interface SDKOptions extends APIOptions {
  provider: SDKProvider | string;
}

export class BadgerSDK {
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

  constructor({
    network,
    provider,
    baseURL,
    logLevel = LogLevel.Error,
  }: SDKOptions) {
    this.logLevel = logLevel;
    const sdkProvider = this.#getSdkProvider(provider);
    this.provider = this.getMulticallProvider(sdkProvider);
    this.signer = sdkProvider.getSigner();
    this.config = getNetworkConfig(network);
    this.api = new BadgerAPI({
      baseURL,
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
  }

  async ready() {
    // initialize must be called first to correctly pass signer to the connectors
    await this.#initialize();
    return Promise.all([
      this.registry.ready(),
      this.rewards.ready(),
      this.ibbtc.ready(),
    ]);
  }

  getMulticallProvider(provider: SDKProvider): providers.MulticallProvider {
    return new providers.MulticallProvider(provider);
  }

  #getSdkProvider(provider: SDKProvider | string): SDKProvider {
    let sdkProvider: SDKProvider;

    if (typeof provider === 'string') {
      sdkProvider = new ethers.providers.JsonRpcBatchProvider(provider);
    } else {
      sdkProvider = provider;
    }

    return sdkProvider;
  }

  async #initialize() {
    try {
      if (this.signer) {
        this.address = await this.signer.getAddress();
      }
    } catch {} // ignore errors from getting address
  }
}
