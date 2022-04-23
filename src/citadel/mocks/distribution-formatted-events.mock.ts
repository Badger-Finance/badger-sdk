import { MinterDistributionEvent } from '../interfaces/minter-distribution-event.interface';
import { BigNumber } from '@ethersproject/bignumber';

export const distributionFormattedEvents: MinterDistributionEvent[] = [
  {
    block: 10,
    startTime: 1650711953853,
    endTime: 1650712062667,
    citadelAmount: BigNumber.from(100),
  },
  {
    block: 10,
    startTime: 1650711953853,
    endTime: 1650712062667,
    citadelAmount: BigNumber.from(50),
  },
  {
    block: 10,
    startTime: 1650711953853,
    endTime: 1650712062667,
    citadelAmount: BigNumber.from(999934),
  },
  {
    block: 11,
    startTime: 1650712126545,
    endTime: 1650712135672,
    citadelAmount: BigNumber.from(999934),
  },
  {
    block: 11,
    startTime: 1650712126545,
    endTime: 1650712135672,
    citadelAmount: BigNumber.from(34345345),
  },
  {
    block: 12,
    startTime: 1650712161976,
    endTime: 1650712167379,
    citadelAmount: BigNumber.from(34345345),
  },
];
