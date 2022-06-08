import { BigNumber } from 'ethers';
import { TokenActionOptions } from './token-action-options.interface';

export interface IncreaseAllowanceOptions extends TokenActionOptions {
  token: string;
  spender: string;
  amount: BigNumber;
}
