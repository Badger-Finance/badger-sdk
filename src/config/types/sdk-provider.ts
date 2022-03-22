import { ethers } from 'ethers';

export type SDKProvider =
  | ethers.providers.Web3Provider
  | ethers.providers.JsonRpcProvider
  | ethers.providers.JsonRpcBatchProvider;
