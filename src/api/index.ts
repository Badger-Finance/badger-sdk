import { Networkish } from '@ethersproject/networks';
import axios, { AxiosError, AxiosInstance } from 'axios';

import { Network } from '../config/enums/network.enum';
import { getNetworkConfig } from '../config/network/network.config';
import { Logger } from '../logger';
import { EmissionSchedule } from '../rewards';
import { ApiError } from './api.error';
import { ChartTimeFrame, Currency, LogLevel } from './enums';
import * as i from './interfaces';
import {
  GasPrices,
  MerkleProof,
  PriceSnapshots,
  PriceSummary,
  TokenConfiguration,
} from './types';

export const DEFAULT_BADGER_API_URL = 'https://api.badger.com/';

export class BadgerAPI {
  private readonly client: AxiosInstance;
  private network: Network;
  public logger: Logger;
  public baseURL: string;

  constructor({
    baseURL = DEFAULT_BADGER_API_URL,
    logLevel = LogLevel.Error,
    network = Network.Ethereum,
  }: i.APIOptions) {
    this.logger = new Logger(logLevel);
    this.baseURL = baseURL;
    this.client = axios.create({
      baseURL,
    });
    const lookupNetwork = this.isLocal(network) ? Network.Ethereum : network;
    this.network = getNetworkConfig(lookupNetwork).network;
  }

  loadPrices(
    currency = Currency.USD,
    network?: Network,
  ): Promise<PriceSummary> {
    return this.get('/v2/prices', {
      chain: network ?? this.network,
      currency,
    });
  }

  loadRewardTree(address: string, network?: Network): Promise<i.RewardTree> {
    return this.get(`/v2/reward/tree/${address}`, {
      chain: network ?? this.network,
    });
  }

  loadVaults(
    currency = Currency.USD,
    network?: Network,
  ): Promise<i.VaultDTOV2[]> {
    return this.get('/v2/vaults', {
      chain: network ?? this.network,
      currency,
    });
  }

  loadVaultsV3(
    currency = Currency.USD,
    network?: Network,
  ): Promise<i.VaultDTOV3[]> {
    return this.get('/v3/vaults/list', {
      chain: network ?? this.network,
      currency,
    });
  }

  loadVault(
    address: string,
    currency = Currency.USD,
    network?: Network,
  ): Promise<i.VaultDTOV2> {
    return this.get(`/v2/vaults/${address}`, {
      chain: network ?? this.network,
      currency,
    });
  }

  loadVaultV3(
    address: string,
    currency = Currency.USD,
    network?: Network,
  ): Promise<i.VaultDTO> {
    return this.get(`/v3/vaults`, {
      address,
      chain: network ?? this.network,
      currency,
    });
  }

  loadVaultsHarvests(
    network?: Network,
  ): Promise<Record<string, i.VaultEarning[]>> {
    return this.get(`/v2/vaults/harvests`, {
      chain: network ?? this.network,
    });
  }

  loadVaultHarvests(
    address: string,
    network?: Network,
  ): Promise<i.VaultEarning[]> {
    return this.get(`/v2/vaults/harvests/${address}`, {
      chain: network ?? this.network,
    });
  }

  loadVaultHarvestsV3(
    address: string,
    network?: Network,
  ): Promise<i.YieldEvent[]> {
    return this.get(`/v3/vaults/harvests`, {
      chain: network ?? this.network,
      address,
    });
  }

  loadAccount(address: string, network?: Network): Promise<i.Account> {
    return this.get(`/v2/accounts/${address}`, {
      chain: network ?? this.network,
    });
  }

  loadTokens(network?: Network): Promise<TokenConfiguration> {
    return this.get('/v2/tokens', {
      chain: network ?? this.network,
    });
  }

  loadProof(address: string, network?: Network): Promise<MerkleProof> {
    return this.get(`/v2/proofs/${address}`, {
      chain: network ?? this.network,
    });
  }

  loadGasPrices(network?: Network): Promise<GasPrices> {
    return this.get('/v2/gas', {
      chain: network ?? this.network,
    });
  }

  loadProtocolMetrics(): Promise<i.ProtocolMetrics> {
    return this.get('/v2/metrics');
  }

  loadProtocolSummary(
    currency = Currency.USD,
    network?: Network,
  ): Promise<i.ProtocolSummary> {
    return this.get('/v2/value', {
      chain: network ?? this.network,
      currency,
    });
  }

  loadLeaderboardSummary(network?: Network): Promise<i.LeaderboardSummary> {
    return this.get('/v2/leaderboards', {
      chain: network ?? this.network,
    });
  }

  loadVaultChart(
    address: string,
    timeframe = ChartTimeFrame.Month,
    network?: Network,
  ): Promise<i.VaultSnapshot[]> {
    return this.get('/v3/charts/vault', {
      address,
      timeframe,
      chain: network ?? this.network,
    });
  }

  loadSchedules(
    active = false,
    network?: Network,
  ): Promise<i.RewardSchedulesSummary> {
    return this.get('/v2/reward/schedules', {
      active: `${active}`,
      chain: network ?? this.network,
    });
  }

  loadSchedule(
    vault: string,
    active = false,
    network?: Network,
  ): Promise<EmissionSchedule[]> {
    return this.get(`/v2/reward/schedules/${vault}`, {
      active: `${active}`,
      chain: network ?? this.network,
    });
  }

  loadVaultSnapshots(
    vault: string,
    timestamps: number[],
    network?: Network,
  ): Promise<i.VaultSnapshot[]> {
    return this.get(`/v3/vaults/snapshots`, {
      vault,
      timestamps: timestamps.join(','),
      chain: network ?? this.network,
    });
  }

  loadPricesSnapshots(
    tokens: string[],
    timestamps: number[],
    network?: Network,
  ): Promise<PriceSnapshots> {
    return this.get(`/v3/prices/snapshots`, {
      tokens: tokens.join(','),
      timestamps: timestamps.join(','),
      chain: network ?? this.network,
    });
  }

  private async get<T>(
    path: string,
    params: Record<string, string | number | void> = {},
    client: AxiosInstance = this.client,
  ): Promise<T> {
    try {
      const { data } = await client.get(path, {
        params,
      });
      return data as T;
    } catch (error) {
      const { response, config } = error as AxiosError;
      this.logger.debug({
        url: config.url,
        method: config.method,
        status: response?.status,
        text: response?.statusText,
        path,
        params,
      });

      if (response) {
        throw new ApiError(response.status.toFixed());
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
