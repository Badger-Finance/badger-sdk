import { BigNumber } from 'ethers';
import { TokenActionOptions } from '../../tokens/interfaces/token-action-options.interface';

export interface VaultActionOptions extends TokenActionOptions {
  vault: string;
  amount: BigNumber;
}
