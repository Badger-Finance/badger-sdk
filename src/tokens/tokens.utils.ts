import { BigNumber } from '@ethersproject/bignumber';
import { ethers } from 'ethers';

export function formatBalance(amount: BigNumber, decimals = 18): number {
  return Number(ethers.utils.formatUnits(amount, decimals));
}
