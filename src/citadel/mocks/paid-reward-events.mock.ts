import { BigNumber } from 'ethers';

function getBlock(num: number) {
  return async () => ({ number: num });
}

export const paidRewardEvents = [
  {
    args: [
      '0x3472A5A71965499acd81997a54BBA8D852C6E53d',
      '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      BigNumber.from(100),
    ],
    block: 50,
    getBlock: getBlock(50),
  },
  {
    args: [
      '0x3472A5A71965499acd81997a54BBA8D852C6E53d',
      '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      BigNumber.from(200),
    ],
    block: 50,
    getBlock: getBlock(50),
  },
  {
    args: [
      '0x3472A5A71965499acd81997a54BBA8D852C6E53d',
      '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      BigNumber.from(300),
    ],
    block: 51,
    getBlock: getBlock(51),
  },
];
