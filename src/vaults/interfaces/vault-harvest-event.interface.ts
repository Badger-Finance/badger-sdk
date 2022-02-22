import { BigNumber } from 'ethers';

export interface VaultHarvestEvent {
  timestamp: number;
  block: number;
  harvested: BigNumber;
}
