import axios, { AxiosError, AxiosInstance } from 'axios';
import { VERSION } from '../constants';
import { BadgerSDK } from '../sdk';
import { Service } from '../service';
import { Currency } from './enums/currency.enum';
import { PriceSummary } from './interfaces/price-summary.interface';

const DEFAULT_URL = 'https://api.badger.com/v2';

export class ApiService extends Service {
  private readonly client: AxiosInstance;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    this.client = axios.create({
      baseURL: DEFAULT_URL,
      headers: {
        'User-Agent': `@badger-dao/sdk/${VERSION}`,
      },
    });
  }

  async loadPrices(currency = Currency.USD): Promise<PriceSummary> {
    return this.get('prices', {
      chain: this.config.network,
      currency,
    });
  }

  async loadProof(address: string): Promise<string[]> {
    return this.get('proofs', {
      chain: this.config.network,
      address,
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
