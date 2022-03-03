import axios, { AxiosError, AxiosInstance } from 'axios';
import { Network } from '../config/enums/network.enum';
import {
  GasPrices,
  MerkleProof,
  PriceSummary,
  TokenConfiguration,
} from './types';
import {
  Account,
  APIOptions,
  LeaderboardSummary,
  ProtocolMetrics,
  ProtocolSummary,
  Vault,
} from './interfaces';
import { Networkish } from '@ethersproject/networks';
import { NetworkConfig } from '../config/network/network.config';
import { SUPPORTED_NETWORKS } from '../config/constants';
import { Currency } from './enums';

export const DEFAULT_API_URL = 'https://api.badger.com/v2';

export class BadgerAPI {
  private static initialized = false;
  private readonly client: AxiosInstance;
  private network: Network;
  public baseURL: string;

  constructor({
    network = Network.Ethereum,
    baseURL = DEFAULT_API_URL,
  }: APIOptions) {
    if (!BadgerAPI.initialized) {
      for (const config of SUPPORTED_NETWORKS) {
        NetworkConfig.register(config);
      }
      BadgerAPI.initialized = true;
    }

    this.baseURL = baseURL;
    this.client = axios.create({
      baseURL,
    });
    const lookupNetwork = this.isLocal(network) ? Network.Ethereum : network;
    this.network = NetworkConfig.getConfig(lookupNetwork).network;
  }

  async loadPrices(
    currency = Currency.USD,
    network?: Network,
  ): Promise<PriceSummary> {
    return this.get('prices', {
      chain: network ?? this.network,
      currency,
    });
  }

  async loadVaults(
    currency = Currency.USD,
    network?: Network,
  ): Promise<Vault[]> {
    return this.get('vaults', {
      chain: network ?? this.network,
      currency,
    });
  }

  async loadVault(
    address: string,
    currency = Currency.USD,
    network?: Network,
  ): Promise<Vault> {
    return this.get(`vaults/${address}`, {
      chain: network ?? this.network,
      currency,
    });
  }

  async loadSetts(
    currency = Currency.USD,
    network?: Network,
  ): Promise<Vault[]> {
    return this.get('setts', {
      chain: network ?? this.network,
      currency,
    });
  }

  async loadSett(
    address: string,
    currency = Currency.USD,
    network?: Network,
  ): Promise<Vault> {
    return this.get(`setts/${address}`, {
      chain: network ?? this.network,
      currency,
    });
  }

  async loadAccount(address: string, network?: Network): Promise<Account> {
    return this.get(`accounts/${address}`, {
      chain: network ?? this.network,
    });
  }

  async loadTokens(network?: Network): Promise<TokenConfiguration> {
    return this.get('tokens', {
      chain: network ?? this.network,
    });
  }

  async loadProof(address: string, network?: Network): Promise<MerkleProof> {
    return this.get(`proofs/${address}`, {
      chain: network ?? this.network,
    });
  }

  async loadGasPrices(network?: Network): Promise<GasPrices> {
    return this.get('gas', {
      chain: network ?? this.network,
    });
  }

  async loadProtocolMetrics(network?: Network): Promise<ProtocolMetrics> {
    return this.get('metrics', {
      chain: network ?? this.network,
    });
  }

  async loadProtocolSummary(
    currency = Currency.USD,
    network?: Network,
  ): Promise<ProtocolSummary> {
    return this.get('value', {
      chain: network ?? this.network,
      currency,
    });
  }

  async loadLeaderboardSummary(network?: Network): Promise<LeaderboardSummary> {
    return this.get('leaderboards', {
      chain: network ?? this.network,
    });
  }

  private async get<T>(
    path: string,
    params: Record<string, string> = {},
  ): Promise<T> {
    try {
      const { data } = await this.client.get(path, {
        params,
      });
      return data as T;
    } catch (error) {
      const { response } = error as AxiosError;

      if (response) {
        const { status } = response;

        if (status === 404) {
          return {} as T;
        }

        throw new Error(status.toFixed());
      }

      throw error;
    }
  }

  private isLocal(network: Networkish): boolean {
    return network === Network.Local || network === 1337;
  }
}

export * from './enums';
export * from './interfaces';
export * from './types';

export default BadgerAPI;
