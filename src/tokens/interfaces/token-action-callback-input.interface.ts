import { BigNumber, ethers } from 'ethers';

export interface TokenActionCallbackInput {
  token: string;
  amount: BigNumber;
  transaction?: ethers.ContractTransaction;
  receipt?: ethers.ContractReceipt;
}

export type TokenActionCallback = (input: TokenActionCallbackInput) => void;
