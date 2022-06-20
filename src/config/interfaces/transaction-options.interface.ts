import { Overrides } from 'ethers';

import { ActionCallback } from './transaction-callback-input.interface';

export interface TransactionOptions {
  overrides?: Overrides;

  onSubmitted?: ActionCallback;
  onSuccess?: ActionCallback;
  onError?: (err: unknown) => void;
  onRejection?: () => void;
}
