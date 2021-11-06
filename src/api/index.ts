import axios, { AxiosError, AxiosInstance } from 'axios';
import { Currency } from './enums/currency.enum';
import { Network } from '../config/enums/network.enum';
import { GasPrices } from './types/gas-prices';
import { MerkleProof } from './types/merkle-proof';
import { Account } from './interfaces/account.interface';
import { Sett } from './interfaces/sett.interface';
import { PriceSummary, TokenConfiguration } from './types';
import { ProtocolMetrics, ProtocolSummary } from './interfaces';
import { Networkish } from '@ethersproject/networks';
import { NetworkConfig } from '../config/network/network.config';
import { SUPPORTED_NETWORKS } from '../config/constants';
import { UserBoostData } from './interfaces/user-boost-data.interface';

export const DEFAULT_API_URL = 'https://staging-api.badger.com/v2';

export class BadgerAPI {
  private readonly client: AxiosInstance;
  private network: Network;

  constructor(network: Networkish, baseURL = DEFAULT_API_URL) {
    this.initialize();
    this.client = axios.create({
      baseURL,
    });
    this.network = NetworkConfig.getConfig(network).network;
  }

  async loadPrices(currency = Currency.USD): Promise<PriceSummary> {
    return this.get('prices', {
      chain: this.network,
      currency,
    });
  }

  async loadSetts(currency = Currency.USD): Promise<Sett[]> {
    return this.get('setts', {
      chain: this.network,
      currency,
    });
  }

  async loadSett(address: string, currency = Currency.USD): Promise<Sett> {
    return this.get(`setts/${address}`, {
      chain: this.network,
      currency,
    });
  }

  async loadAccount(address: string): Promise<Account> {
    return this.get(`accounts/${address}`, {
      chain: this.network,
    });
  }

  async loadTokens(): Promise<TokenConfiguration> {
    return this.get('tokens', {
      chain: this.network,
    });
  }

  async loadProof(address: string): Promise<MerkleProof> {
    return this.get('proofs', {
      chain: this.network,
      address,
    });
  }

  async loadGasPrices(): Promise<GasPrices> {
    return this.get('gas', {
      chain: this.network,
    });
  }

  async loadProtocolMetrics(): Promise<ProtocolMetrics> {
    return this.get('metrics', {
      chain: this.network,
    });
  }

  async loadProtocolSummary(currency = Currency.USD): Promise<ProtocolSummary> {
    return this.get('value', {
      chain: this.network,
      currency,
    });
  }

  async loadLeaderboard(): Promise<UserBoostData[]> {
    return this.get('leaderboards/complete', {
      chain: this.network,
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

        throw new Error(status.toFixed());
      }

      throw error;
    }
  }

  private initialize() {
    for (const config of SUPPORTED_NETWORKS) {
      NetworkConfig.register(config);
    }
  }
}

export * from './enums';
export * from './interfaces';
export * from './types';

export default BadgerAPI;
