import { Networkish } from '@ethersproject/networks';

export interface GraphOptions {
  baseURL?: string;
  network: Networkish;
}
