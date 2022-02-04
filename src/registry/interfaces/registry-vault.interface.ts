import { Token } from '../../tokens';
import { VaultState } from '../../api';
import { VaultVersion } from '../../vaults/';

export interface RegistryVault extends Token {
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
