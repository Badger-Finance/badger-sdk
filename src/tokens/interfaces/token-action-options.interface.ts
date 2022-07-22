import { TransactionOptions } from '../../config';
import { TransactionCallbackInput } from '../../config/interfaces/transaction-callback-input.interface';
import { TokenActionCallback } from './token-action-callback-input.interface';

export interface TokenActionOptions extends TransactionOptions {
  // Approval Hooks
  onApprovePrompt?: () => void;
  onApproveSigned?: (input: TransactionCallbackInput) => void;
  onApproveSuccess?: (input: TransactionCallbackInput) => void;

  // Transfer Hooks
  onTransferPrompt?: TokenActionCallback;
  onTransferSigned?: TokenActionCallback;
  onTransferSuccess?: TokenActionCallback;
}
