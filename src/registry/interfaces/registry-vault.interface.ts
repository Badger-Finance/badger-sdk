import { VaultState } from '../../api';
import { VaultRegistryV2Entry } from '../../registry.v2';
import { Token } from '../../tokens';
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
  metadata?: VaultRegistryV2Entry['metadata'];
}
