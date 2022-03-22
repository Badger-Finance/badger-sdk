import { BigNumberish } from '@ethersproject/bignumber';
//import { TokenConfiguration } from '../../api/types/token-configuration';
//import { Token } from '../../tokens/interfaces/token.interface';

export interface BalanceSummary {
  tokenAddress: string;
  holderAddress: string;
  balance: BigNumberish;
}
