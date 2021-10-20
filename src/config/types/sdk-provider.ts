import {
  JsonRpcBatchProvider,
  JsonRpcProvider,
} from '@ethersproject/providers';

export type SDKProvider = JsonRpcProvider | JsonRpcBatchProvider;
