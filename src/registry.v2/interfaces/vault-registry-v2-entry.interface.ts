import { VaultVersion } from '../../vaults';
import { VaultState } from '../../api';
import { VaultRegistryV2Metadata } from './vault-registry-v2-metadata.interface';

export interface VaultRegistryV2Entry {
  address: string;
  version: VaultVersion;
  state: VaultState;
  metadata?: VaultRegistryV2Metadata;
}
