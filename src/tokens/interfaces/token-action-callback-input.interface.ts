import { BigNumber } from 'ethers';

import { TransactionCallbackInput } from '../../config/interfaces/transaction-callback-input.interface';

export interface TokenActionCallbackInput extends TransactionCallbackInput {
  token: string;
  amount: BigNumber;
}

export type TokenActionCallback = (input: TokenActionCallbackInput) => void;
