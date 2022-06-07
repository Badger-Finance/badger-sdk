import { BigNumber, Overrides } from 'ethers';

export interface TokenActionOptions {
  // Approval Hooks
  onApprovePrompt?: () => void;
  onApproveSigned?: () => void;
  onApproveSuccess?: () => void;

  // Transfer Hooks
  onTransferPrompt?: (token: string, amount: BigNumber) => void;
  onTransferSigned?: (token: string, amount: BigNumber) => void;
  onTransferSuccess?: (token: string, amount: BigNumber) => void;

  // TODO: Move to a base class for general transaction hooks
  overrides?: Overrides;
  onError?: (err: unknown) => void;
  onRejection?: () => void;
}
