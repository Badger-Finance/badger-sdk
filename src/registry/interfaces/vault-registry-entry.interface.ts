import { VaultState } from '../../api';
import { VaultVersion } from '../../vaults';
import { VaultRegistryMetadata } from './vault-registry-metadata.interface';

export interface VaultRegistryEntry {
  address: string;
  version: VaultVersion;
  state: VaultState;
  metadata: VaultRegistryMetadata;
}
