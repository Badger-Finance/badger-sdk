import { Overrides } from 'ethers';

import { TokenActionCallback } from './token-action-callback-input.interface';

export interface TokenActionOptions {
  // Approval Hooks
  onApprovePrompt?: () => void;
  onApproveSigned?: () => void;
  onApproveSuccess?: () => void;

  // Transfer Hooks
  onTransferPrompt?: TokenActionCallback;
  onTransferSigned?: TokenActionCallback;
  onTransferSuccess?: TokenActionCallback;

  // TODO: Move to a base class for general transaction hooks
  overrides?: Overrides;
  onError?: (err: unknown) => void;
  onRejection?: () => void;
}
