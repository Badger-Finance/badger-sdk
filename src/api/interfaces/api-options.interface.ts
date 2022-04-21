import { Networkish } from '@ethersproject/networks';

export interface APIOptions {
  baseURL?: string;
  citadelBaseURL?: string;
  network: Networkish;
}
