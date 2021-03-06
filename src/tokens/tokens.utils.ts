import { BigNumberish } from '@ethersproject/bignumber';
import { ethers } from 'ethers';

export function formatBalance(
  amount: BigNumberish,
  decimals: BigNumberish = 18,
): number {
  return Number(ethers.utils.formatUnits(amount, decimals));
}
