import { BigNumber } from 'ethers';
import { TokenActionOptions } from '../../tokens/';

export interface VaultActionOptions extends TokenActionOptions {
  vault: string;
  amount: BigNumber;
}
