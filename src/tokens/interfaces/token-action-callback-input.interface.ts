import { BigNumber, ethers } from 'ethers';

export interface TokenActionCallbackInput {
  token: string;
  amount: BigNumber;
  receipt?: ethers.ContractReceipt;
}

export type TokenActionCallback = (input: TokenActionCallbackInput) => void;
