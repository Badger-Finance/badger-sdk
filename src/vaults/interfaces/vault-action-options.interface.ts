export interface VaultActionOptions {
  onApprovePrompt?: () => void;
  onApproveSigned?: () => void;
  onApproveSuccess?: () => void;
  onError?: (err: unknown) => void;
}
