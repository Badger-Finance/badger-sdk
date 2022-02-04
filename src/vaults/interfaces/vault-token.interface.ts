import { Token } from '../../tokens';
import { VaultState } from '../../api';
import { VaultVersion } from '../enums';

export interface VaultToken extends Token {
  address: string;
  name: string;
  available: number;
  balance: number;
  totalSupply: number;
  pricePerFullShare: number;
  token: Token;
  state: VaultState;
  version: VaultVersion;
}
