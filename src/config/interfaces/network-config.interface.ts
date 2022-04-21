import { Network } from '..';

export interface NetworkConfig {
  chainId: number;
  currencySymbol: string;
  explorerUrl: string;
  name: string;
  network: Network;
}
