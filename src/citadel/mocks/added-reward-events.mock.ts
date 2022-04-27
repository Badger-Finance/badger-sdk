import { BigNumber } from 'ethers';

function getBlock(num: number) {
  return async () => ({ number: num });
}

export const addedRewardEvents = [
  {
    args: [
      '0xA967Ba66Fb284EC18bbe59f65bcf42dD11BA8128',
      '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      BigNumber.from(100),
      '0x60b54c1986b43275418006baba637cb29964609f76738f9d0c47dbd9c076bf11',
      BigNumber.from(1651088758542),
    ],
    block: 50,
    getBlock: getBlock(50),
  },
  {
    args: [
      '0xA967Ba66Fb284EC18bbe59f65bcf42dD11BA8128',
      '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      BigNumber.from(200),
      '0x60b54c1986b43275418006baba637cb29964609f76738f9d0c47dbd9c076bf11',
      BigNumber.from(1651088758542),
    ],
    block: 50,
    getBlock: getBlock(50),
  },
  {
    args: [
      '0xA967Ba66Fb284EC18bbe59f65bcf42dD11BA8128',
      '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      BigNumber.from(300),
      '0x60b54c1986b43275418006baba637cb29964609f76738f9d0c47dbd9c076bf11',
      BigNumber.from(1651088758542),
    ],
    block: 51,
    getBlock: getBlock(51),
  },
  {
    args: [
      '0xA967Ba66Fb284EC18bbe59f65bcf42dD11BA8128',
      '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      BigNumber.from(400),
      '0x60b54c1986b43275418006baba637cb29964609f76738f9d0c47dbd9c076bf11',
      BigNumber.from(1651088758542),
    ],
    block: 52,
    getBlock: getBlock(52),
  },
  {
    args: [
      '0xA967Ba66Fb284EC18bbe59f65bcf42dD11BA8128',
      '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
      BigNumber.from(500),
      '0x60b54c1986b43275418006baba637cb29964609f76738f9d0c47dbd9c076bf11',
      BigNumber.from(1651088758542),
    ],
    block: 52,
    getBlock: getBlock(52),
  },
];
