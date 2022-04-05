import axios, { AxiosError, AxiosInstance } from 'axios';
import { Network } from '../config/enums/network.enum';
import {
  GasPrices,
  MerkleProof,
  PriceSummary,
  TokenConfiguration,
} from './types';
import * as i from './interfaces';
import { Networkish } from '@ethersproject/networks';
import { NetworkConfig } from '../config/network/network.config';
import { SUPPORTED_NETWORKS } from '../config/constants';
import { Currency } from './enums';
import { ApiError } from './api.error';
import { EmissionSchedule } from '../rewards';

export const DEFAULT_API_URL = 'https://api.badger.com/v2';

export class BadgerAPI {
  private static initialized = false;
  private readonly client: AxiosInstance;
  private network: Network;
  public baseURL: string;

  constructor({
    network = Network.Ethereum,
    baseURL = DEFAULT_API_URL,
  }: i.APIOptions) {
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

  loadPrices(
    currency = Currency.USD,
    network?: Network,
  ): Promise<PriceSummary> {
    return this.get('prices', {
      chain: network ?? this.network,
      currency,
    });
  }

  loadRewardTree(address: string, network?: Network): Promise<i.RewardTree> {
    return this.get(`reward/tree/${address}`, {
      chain: network ?? this.network,
    });
  }

  loadVaults(
    currency = Currency.USD,
    network?: Network,
  ): Promise<i.VaultDTO[]> {
    return this.get('vaults', {
      chain: network ?? this.network,
      currency,
    });
  }

  loadVault(
    address: string,
    currency = Currency.USD,
    network?: Network,
  ): Promise<i.VaultDTO> {
    return this.get(`vaults/${address}`, {
      chain: network ?? this.network,
      currency,
    });
  }

  loadSetts(currency = Currency.USD, network?: Network): Promise<i.VaultDTO[]> {
    return this.get('setts', {
      chain: network ?? this.network,
      currency,
    });
  }

  loadSett(
    address: string,
    currency = Currency.USD,
    network?: Network,
  ): Promise<i.VaultDTO> {
    return this.get(`setts/${address}`, {
      chain: network ?? this.network,
      currency,
    });
  }

  loadAccount(address: string, network?: Network): Promise<i.Account> {
    return this.get(`accounts/${address}`, {
      chain: network ?? this.network,
    });
  }

  loadTokens(network?: Network): Promise<TokenConfiguration> {
    return this.get('tokens', {
      chain: network ?? this.network,
    });
  }

  loadProof(address: string, network?: Network): Promise<MerkleProof> {
    return this.get(`proofs/${address}`, {
      chain: network ?? this.network,
    });
  }

  loadGasPrices(network?: Network): Promise<GasPrices> {
    return this.get('gas', {
      chain: network ?? this.network,
    });
  }

  loadProtocolMetrics(): Promise<i.ProtocolMetrics> {
    return this.get('metrics');
  }

  loadProtocolSummary(
    currency = Currency.USD,
    network?: Network,
  ): Promise<i.ProtocolSummary> {
    return this.get('value', {
      chain: network ?? this.network,
      currency,
    });
  }

  loadLeaderboardSummary(network?: Network): Promise<i.LeaderboardSummary> {
    return this.get('leaderboards', {
      chain: network ?? this.network,
    });
  }

  loadCharts(
    { vault, start, end, period, granularity }: i.LoadChartsOptions,
    network?: Network,
  ): Promise<i.VaultSnapshot[]> {
    return this.get('/charts', {
      id: vault,
      chain: network ?? this.network,
      start,
      end,
      period,
      granularity,
    });
  }

  loadSchedules(
    active = false,
    network?: Network,
  ): Promise<i.RewardSchedulesSummary> {
    return this.get('/reward/schedules', {
      active: `${active}`,
      chain: network ?? this.network,
    });
  }

  loadSchedule(
    vault: string,
    active = false,
    network?: Network,
  ): Promise<EmissionSchedule[]> {
    return this.get(`/reward/schedules/${vault}`, {
      active: `${active}`,
      chain: network ?? this.network,
    });
  }

  private async get<T>(
    path: string,
    params: Record<string, string | number | void> = {},
  ): Promise<T> {
    try {
      const { data } = await this.client.get(path, {
        params,
      });
      return data as T;
    } catch (error) {
      const { response, config } = error as AxiosError;
      console.error({
        url: config.url,
        method: config.method,
        status: response?.status,
        text: response?.statusText,
        path,
        params,
      });

      if (response) {
        const { status } = response;

        if (status === 404) {
          return {} as T;
        }

        throw new ApiError(status.toFixed());
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
