import { VaultState, VaultVersion } from '../..';

export interface VaultRegistryEntry {
  address: string;
  version: VaultVersion;
  state: VaultState;
}
