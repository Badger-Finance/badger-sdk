import {
  JsonRpcBatchProvider,
  JsonRpcProvider,
  Web3Provider,
} from '@ethersproject/providers';

export type SDKProvider = Web3Provider | JsonRpcProvider | JsonRpcBatchProvider;
