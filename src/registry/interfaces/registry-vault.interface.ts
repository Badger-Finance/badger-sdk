import { VaultState } from '../../api';
import { Token } from '../../tokens';
import { VaultVersion } from '../../vaults/';
import { VaultRegistryEntry } from './vault-registry-entry.interface';

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
  metadata?: VaultRegistryEntry['metadata'];
}
