import { Networkish } from '@ethersproject/networks';

export interface APIOptions {
  baseURL?: string;
  network: Networkish;
}
