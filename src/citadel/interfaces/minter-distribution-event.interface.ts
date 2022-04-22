import { BigNumber } from 'ethers';

export interface MinterDistributionEvent {
  block: number;
  startTime: number;
  endTime: number;
  citadelAmount: BigNumber;
}
