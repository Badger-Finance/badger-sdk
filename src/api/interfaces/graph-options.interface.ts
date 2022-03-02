import { Networkish } from '@ethersproject/networks';

export interface GraphOptions {
  network: Networkish;
  baseURL?: string;
}
