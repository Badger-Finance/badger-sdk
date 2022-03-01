import { Networkish } from '@ethersproject/networks';

export interface APIOptions {
  network: Networkish;
  baseURL?: string;
}
