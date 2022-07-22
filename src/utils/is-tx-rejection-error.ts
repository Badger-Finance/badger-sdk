export const USER_REJECTED_TX_CODE = 4001;

type WalletError = {
  code: number;
};

export function isUserTxRejectionError(error: unknown): boolean {
  return (error as WalletError).code === USER_REJECTED_TX_CODE;
}
