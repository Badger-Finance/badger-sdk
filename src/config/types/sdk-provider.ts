import {
  JsonRpcBatchProvider,
  JsonRpcProvider,
} from '@ethersproject/providers';

export type SdkProvider = JsonRpcProvider | JsonRpcBatchProvider;
