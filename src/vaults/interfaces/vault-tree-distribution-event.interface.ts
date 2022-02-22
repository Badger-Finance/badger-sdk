import { BigNumber } from 'ethers';

export interface VaultTreeDistributionEvent {
  timestamp: number;
  block: number;
  token: string;
  amount: BigNumber;
}
