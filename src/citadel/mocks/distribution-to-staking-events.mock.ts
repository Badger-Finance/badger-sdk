import { BigNumber } from 'ethers';

function getBlock(num: number) {
  return async () => ({ number: num });
}

export const citadelDistributionToStakingEvents = [
  {
    args: [
      BigNumber.from(1650726066923),
      BigNumber.from(1650726976504),
      BigNumber.from(5000),
    ],
    block: 50,
    getBlock: getBlock(50),
  },
  {
    args: [
      BigNumber.from(1650726066923),
      BigNumber.from(1650726976509),
      BigNumber.from(345),
    ],
    block: 50,
    getBlock: getBlock(50),
  },
  {
    args: [
      BigNumber.from(1650727090814),
      BigNumber.from(1650727116602),
      BigNumber.from(555554),
    ],
    block: 52,
    getBlock: getBlock(52),
  },
  {
    args: [
      BigNumber.from(1650727090814),
      BigNumber.from(1650727116699),
      BigNumber.from(12),
    ],
    block: 52,
    getBlock: getBlock(52),
  },
  {
    args: [
      BigNumber.from(1650727090999),
      BigNumber.from(1650727116699),
      BigNumber.from(12),
    ],
    block: 55,
    getBlock: getBlock(55),
  },
];
