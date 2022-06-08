import { BigNumber, ethers } from 'ethers';
import { MockProxy } from 'jest-mock-extended';
import { TransactionStatus } from '../config';
import { Erc20 } from '../contracts';
import { BadgerSDK } from '../sdk';
import { TEST_ADDR, TRANSACTION_SUCCESS } from '../tests/tests.constants';
import { mockSDK, mockToken } from '../tests/tests.utils';

describe('tokens.service', () => {
  let sdk: BadgerSDK;
  let token: MockProxy<Erc20>;

  beforeEach(async () => {
    sdk = mockSDK();
    token = mockToken();

    await sdk.ready();
  });

  describe('revoke', () => {
    it('reports failure with no address for the sdk', async () => {
      sdk.address = undefined;
      const result = await sdk.tokens.revoke({
        token: TEST_ADDR,
        spender: TEST_ADDR,
      });
      expect(result).toMatch(TransactionStatus.Failure);
    });

    it('reports success with given a proper signer', async () => {
      jest
        .spyOn(token, 'increaseAllowance')
        .mockImplementation(async (_s, _a, _o) => TRANSACTION_SUCCESS);
      const result = await sdk.tokens.revoke({
        token: TEST_ADDR,
        spender: TEST_ADDR,
      });
      expect(result).toMatch(TransactionStatus.Success);
    });
  });

  describe('verifyOrIncreaseAllowance', () => {
    it('reports failure with no address for the sdk', async () => {
      sdk.address = undefined;
      const result = await sdk.tokens.verifyOrIncreaseAllowance({
        token: TEST_ADDR,
        spender: TEST_ADDR,
        amount: BigNumber.from('15000000000000000000'), // 15
      });
      expect(result).toMatch(TransactionStatus.Failure);
    });

    it('reports success with no action if a spender has proper allowance', async () => {
      jest
        .spyOn(token, 'allowance')
        .mockImplementation(async (_a, _t) =>
          BigNumber.from('15000000000000000000'),
        );
      const result = await sdk.tokens.verifyOrIncreaseAllowance({
        token: TEST_ADDR,
        spender: TEST_ADDR,
        amount: BigNumber.from('15000000000000000000'), // 15
      });
      expect(result).toMatch(TransactionStatus.Success);
    });

    it('reports success with after increasing allowance if a spender does not have proper allowance', async () => {
      let checkedPrompt = false;
      let checkedSigned = false;
      let checkedSuccess = false;
      const onApprovePrompt = () => {
        checkedPrompt = true;
      };
      const onApproveSigned = () => {
        checkedSigned = true;
      };
      const onApproveSuccess = () => {
        checkedSuccess = true;
      };
      jest
        .spyOn(token, 'allowance')
        .mockImplementation(async (_a, _t) => BigNumber.from('0'));
      jest
        .spyOn(token, 'increaseAllowance')
        .mockImplementation(async (_s, _a, _o) => TRANSACTION_SUCCESS);
      const result = await sdk.tokens.verifyOrIncreaseAllowance({
        token: TEST_ADDR,
        spender: TEST_ADDR,
        amount: BigNumber.from('15000000000000000000'), // 15
        onApprovePrompt,
        onApproveSigned,
        onApproveSuccess,
      });
      expect(result).toMatch(TransactionStatus.Success);
      expect(checkedPrompt).toBeTruthy();
      expect(checkedSigned).toBeTruthy();
      expect(checkedSuccess).toBeTruthy();

      // set up a failure if allowance is called - let's call the cache
      jest.spyOn(token, 'allowance').mockImplementation(async (_a, _t) => {
        throw new Error('Test Error: failed caching if thrown');
      });
      const secondResult = await sdk.tokens.verifyOrIncreaseAllowance({
        token: TEST_ADDR,
        spender: TEST_ADDR,
        amount: BigNumber.from('15000000000000000000'), // 15
        onApprovePrompt,
        onApproveSigned,
        onApproveSuccess,
      });
      expect(secondResult).toMatch(TransactionStatus.Success);
    });

    it('reports canceled if user does not sign the transaction', async () => {
      jest
        .spyOn(token, 'allowance')
        .mockImplementation(async (_a, _t) => BigNumber.from('0'));
      jest
        .spyOn(token, 'increaseAllowance')
        .mockImplementation(async (_s, _a, _o) => {
          throw new Error(
            'Expected test error: simulating cancelling transaction',
          );
        });
      const canceledIncrease = await sdk.tokens.verifyOrIncreaseAllowance({
        token: TEST_ADDR,
        spender: TEST_ADDR,
        amount: BigNumber.from('15000000000000000000'), // 15
      });
      expect(canceledIncrease).toMatch(TransactionStatus.Canceled);
    });

    it('reports canceled if user does not sign the transaction', async () => {
      jest
        .spyOn(token, 'allowance')
        .mockImplementation(async (_a, _t) => BigNumber.from('0'));
      jest
        .spyOn(token, 'increaseAllowance')
        .mockImplementation(async (_s, _a, _o) => {
          throw new Error(
            'Expected test error: simulating cancelling transaction',
          );
        });
      let checkedRejected = false;
      const onRejection = () => {
        checkedRejected = true;
      };
      const canceledIncrease = await sdk.tokens.verifyOrIncreaseAllowance({
        token: TEST_ADDR,
        spender: TEST_ADDR,
        amount: BigNumber.from('15000000000000000000'), // 15
        onRejection,
      });
      expect(canceledIncrease).toMatch(TransactionStatus.Canceled);
      expect(checkedRejected).toBeTruthy();
    });

    it('reports failure if increase allowance call reverts or fails', async () => {
      jest
        .spyOn(token, 'allowance')
        .mockImplementation(async (_a, _t) => BigNumber.from('0'));
      jest
        .spyOn(token, 'increaseAllowance')
        .mockImplementation(async (_s, _a, _o) => {
          return {
            chainId: 1,
            gasLimit: BigNumber.from('1000000'),
            nonce: 1,
            data: '',
            value: ethers.constants.Zero,
            hash: TEST_ADDR,
            from: TEST_ADDR,
            confirmations: 0,
            wait: async (): Promise<ethers.ContractReceipt> => {
              throw new Error(
                'Expected test error: simulating cancelling transaction',
              );
            },
          };
        });
      let checkedError = false;
      const onError = () => {
        checkedError = true;
      };
      const canceledIncrease = await sdk.tokens.verifyOrIncreaseAllowance({
        token: TEST_ADDR,
        spender: TEST_ADDR,
        amount: BigNumber.from('15000000000000000000'), // 15
        onError,
      });
      expect(canceledIncrease).toMatch(TransactionStatus.Failure);
      expect(checkedError).toBeTruthy();
    });
  });

  describe('loadToken', () => {
    it('returns requested token information', async () => {
      const loadedToken = await sdk.tokens.loadToken(TEST_ADDR);
      expect(loadedToken).toMatchSnapshot();

      // verify token information caching
      jest.spyOn(token, 'name').mockImplementation(async () => {
        throw new Error('Test Error: failed caching if thrown');
      });
      const duplicateToken = await sdk.tokens.loadToken(TEST_ADDR);
      expect(duplicateToken).toMatchObject(loadedToken);
    });
  });

  describe('loadTokens', () => {
    const testAddressTwo = '0x1622bF67e6e5747b81866fE0b85178a93C7F86e3';
    const testAddressThree = '0xff628b747c4e70825af24e3d59748bac477dcbf6';

    it('returns requested token information', async () => {
      const loadedTokens = await sdk.tokens.loadTokens([
        TEST_ADDR,
        testAddressTwo,
      ]);
      expect(loadedTokens).toMatchSnapshot();

      let calls = 0;
      // verify token information caching
      jest.spyOn(token, 'name').mockImplementation(async () => {
        if (calls === 0) {
          return 'Success Test Name Token';
        }
        calls += 1;
        throw new Error('Test Error: failed caching if thrown');
      });
      const partialFailureTokens = await sdk.tokens.loadTokens([
        TEST_ADDR,
        testAddressTwo,
        testAddressThree,
      ]);
      expect(partialFailureTokens).toMatchSnapshot();
    });
  });
});
