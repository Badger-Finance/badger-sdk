import { BigNumber } from 'ethers';

export interface VaultPerformanceEvent {
  timestamp: number;
  block: number;
  token: string;
  amount: BigNumber;
}
