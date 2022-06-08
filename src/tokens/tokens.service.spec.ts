import { BigNumber, ethers } from "ethers";
import { MockProxy } from "jest-mock-extended";
import { TransactionStatus } from "../config";
import { Erc20 } from "../contracts";
import { BadgerSDK } from "../sdk";
import { TEST_ADDR } from "../tests/tests.constants";
import { mockSDK, mockToken } from "../tests/tests.utils";

describe('tokens.service', () => {
  let sdk: BadgerSDK;
  let token: MockProxy<Erc20>;

  beforeEach(async () => {
    sdk = mockSDK();
    token = mockToken();

    await sdk.ready();
  });

  describe('verifyOrIncreaseAllowance', () => {
    it('reports failure with no address for the sdk', async () => {
      sdk.address = undefined;
      const result = await sdk.tokens.verifyOrIncreaseAllowance({ 
        token: TEST_ADDR,
        spender: TEST_ADDR,
        amount: BigNumber.from('15000000000000000000') // 15
      });
      expect(result).toMatch(TransactionStatus.Failure);
    });

    it('reports success with no action if a spender has proper allowance', async () => {
      jest.spyOn(token, 'allowance').mockImplementation(async (_a, _t) => BigNumber.from('15000000000000000000'));
      const result = await sdk.tokens.verifyOrIncreaseAllowance({ 
        token: TEST_ADDR,
        spender: TEST_ADDR,
        amount: BigNumber.from('15000000000000000000') // 15
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
      jest.spyOn(token, 'allowance').mockImplementation(async (_a, _t) => BigNumber.from('0'));
      jest.spyOn(token, 'increaseAllowance').mockImplementation(async (_s, _a, _o) => {
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
            return {
              to: TEST_ADDR,
              from: TEST_ADDR,
              contractAddress: TEST_ADDR,
              confirmations: 3,
              transactionHash: TEST_ADDR,
              transactionIndex: 3,
              gasUsed: BigNumber.from('550000'),
              logsBloom: '',
              blockHash: TEST_ADDR,
              blockNumber: 100,
              byzantium: false,
              logs: [],
              effectiveGasPrice: BigNumber.from('10000000000'),
              type: 1,
              cumulativeGasUsed: BigNumber.from('658000')
            };
          }
        }
      });
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
    });

    it('reports canceled if user does not sign the transaction', async () => {
      jest.spyOn(token, 'allowance').mockImplementation(async (_a, _t) => BigNumber.from('0'));
      jest.spyOn(token, 'increaseAllowance').mockImplementation(async (_s, _a, _o) => {
        throw new Error('Expected test error: simulating cancelling transaction');
      });
      const canceledIncrease = await sdk.tokens.verifyOrIncreaseAllowance({ 
        token: TEST_ADDR,
        spender: TEST_ADDR,
        amount: BigNumber.from('15000000000000000000') // 15
      });
      expect(canceledIncrease).toMatch(TransactionStatus.Canceled);
    });

    it('reports canceled if user does not sign the transaction', async () => {
      jest.spyOn(token, 'allowance').mockImplementation(async (_a, _t) => BigNumber.from('0'));
      jest.spyOn(token, 'increaseAllowance').mockImplementation(async (_s, _a, _o) => {
        throw new Error('Expected test error: simulating cancelling transaction');
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
      jest.spyOn(token, 'allowance').mockImplementation(async (_a, _t) => BigNumber.from('0'));
      jest.spyOn(token, 'increaseAllowance').mockImplementation(async (_s, _a, _o) => {
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
            throw new Error('Expected test error: simulating cancelling transaction');
          }
        }
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
  })
});
