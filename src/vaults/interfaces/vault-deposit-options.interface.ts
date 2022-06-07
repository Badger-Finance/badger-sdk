import { BigNumber } from 'ethers';
import { VaultActionOptions } from './vault-action-options.interface';

export interface VaultDepositOptions extends VaultActionOptions {
  vault: string;
  amount: BigNumber;
  onDepositPrompt?: (vault: string, amount: BigNumber) => void;
  onDepositSigned?: (vault: string, amount: BigNumber) => void;
  onDepositSuccess?: (vault: string, amount: BigNumber) => void;
}
