import { ethers } from 'ethers';
import { providers } from '@0xsequence/multicall';

import { Signer } from '@ethersproject/abstract-signer';
import { Networkish } from '@ethersproject/providers';

import { APIOptions, BadgerAPI } from './api';
import { BadgerGraph } from './graphql';

import { NetworkConfig } from './config/network/network.config';

import { DiggService } from './digg/digg.service';
import { ibBTCService } from './ibbtc/ibbtc.service';
import { RegistryService } from './registry/registry.service';
import { RewardsService } from './rewards/rewards.service';
import { VaultsService } from './vaults/vaults.service';
import { TokensService } from './tokens/tokens.service';
import { TreasuryService } from './treasury/treasury.service';

import { SDKProvider } from './config/types/sdk-provider';

import { SUPPORTED_NETWORKS } from './config/constants';

export interface SDKOptions extends APIOptions {
  provider: SDKProvider | string;
}

export class BadgerSDK {
  private static initialized = false;
  private loading: Promise<void>;

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
  readonly treasury: TreasuryService;

  constructor({ network, provider, baseURL }: SDKOptions) {
    if (!BadgerSDK.initialized) {
      for (const config of SUPPORTED_NETWORKS) {
        NetworkConfig.register(config);
      }
      BadgerSDK.initialized = true;
    }

    let sdkProvider: SDKProvider;
    if (typeof provider === 'string') {
      sdkProvider = new ethers.providers.JsonRpcProvider(provider);
    } else {
      sdkProvider = provider;
    }
    this.provider = new providers.MulticallProvider(sdkProvider);
    this.signer = sdkProvider.getSigner();
    this.loading = this.initialize();
    this.config = NetworkConfig.getConfig(network);
    this.api = new BadgerAPI({
      network: this.config.network,
      baseURL,
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
    this.treasury = new TreasuryService(this);
  }

  ready() {
    return Promise.all([
      this.loading,
      this.registry.ready(),
      this.rewards.ready(),
      this.vaults.ready(),
    ]);
  }

  update(network: Networkish, provider: SDKProvider) {
    this.updateNetwork(network);
    this.updateProvider(provider);
  }

  updateNetwork(network: Networkish) {
    this.config = NetworkConfig.getConfig(network);
    this.api = new BadgerAPI({
      network: this.config.network,
      baseURL: this.api.baseURL,
    });
  }

  updateProvider(provider: SDKProvider) {
    this.provider = new providers.MulticallProvider(provider);
    this.signer = provider.getSigner();
  }

  private async initialize() {
    try {
      if (this.signer) {
        this.address = await this.signer.getAddress();
      }
    } catch {} // ignore errors from getting address
  }
}
