import { BigNumber, ethers } from 'ethers';

export const CURRENT_BLOCK = 0;
export const TEST_ADDR = ethers.utils.getAddress(
  '0xe6487033F5C8e2b4726AF54CA1449FEC18Bd1484',
);

export const TRANSACTION_SUCCESS: ethers.ContractTransaction = {
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
      cumulativeGasUsed: BigNumber.from('658000'),
    };
  },
};
