import { BigNumberish } from '@ethersproject/bignumber';

import { TransactionOptions } from '../../config';

export interface ClaimOptions extends TransactionOptions {
  index: string;
  cycle: string;
  tokens: string[];
  cumulativeAmounts: string[];
  proof: string[];
  claimAmounts: BigNumberish[];
}
