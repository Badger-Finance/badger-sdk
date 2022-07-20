import { isUserTxRejectionError } from './is-tx-rejection-error';

describe('isTxRejectionError', () => {
  it('should return true if error is a TxRejectionError', () => {
    expect(isUserTxRejectionError({ code: 4001 })).toBe(true);
  });

  it('should return false if error is not a TxRejectionError', () => {
    const error = new Error('test');
    expect(isUserTxRejectionError(error)).toBe(false);
  });
});
