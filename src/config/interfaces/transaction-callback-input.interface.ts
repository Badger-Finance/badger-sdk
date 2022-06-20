import { ethers } from 'ethers';

export interface TransactionCallbackInput {
  transaction?: ethers.ContractTransaction;
  receipt?: ethers.ContractReceipt;
}

export type ActionCallback = (input: TransactionCallbackInput) => void;
