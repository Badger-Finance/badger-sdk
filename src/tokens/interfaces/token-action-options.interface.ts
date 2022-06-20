import { TransactionOptions } from '../../config';
import { TokenActionCallback } from './token-action-callback-input.interface';

export interface TokenActionOptions extends TransactionOptions {
  // Approval Hooks
  onApprovePrompt?: () => void;
  onApproveSigned?: () => void;
  onApproveSuccess?: () => void;

  // Transfer Hooks
  onTransferPrompt?: TokenActionCallback;
  onTransferSigned?: TokenActionCallback;
  onTransferSuccess?: TokenActionCallback;
}
