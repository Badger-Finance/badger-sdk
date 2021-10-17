import { JsonRpcBatchProvider, JsonRpcProvider, JsonRpcSigner, Web3Provider } from "@ethersproject/providers";

export type SdkProvider = Web3Provider | JsonRpcProvider | JsonRpcSigner | JsonRpcBatchProvider;
