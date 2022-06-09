import { TokenActionOptions } from './token-action-options.interface';

export interface RevokeAllowanceOptions extends TokenActionOptions {
  token: string;
  spender: string;
}
