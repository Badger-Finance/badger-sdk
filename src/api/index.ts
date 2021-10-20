import axios, { AxiosError, AxiosInstance } from 'axios';
import { Currency } from './enums/currency.enum';
import { PriceSummary } from './interfaces/price-summary.interface';
import { Network } from '../config/enums/network.enum';
import { GasPrices } from './interfaces/gas-prices.interface';
import { VERSION } from '../config/constants';

const DEFAULT_URL = 'https://staging-api.badger.com/v2';

export class BadgerAPI {
  private readonly client: AxiosInstance;
  private network: Network;

  constructor(network: Network) {
    this.client = axios.create({
      baseURL: DEFAULT_URL,
      headers: {
        'User-Agent': `@badger-dao/sdk/${VERSION}`,
      },
    });
    this.network = network;
  }

  async loadPrices(currency = Currency.USD): Promise<PriceSummary> {
    return this.get('prices', {
      chain: this.network,
      currency,
    });
  }

  async loadProof(address: string): Promise<string[]> {
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
}
