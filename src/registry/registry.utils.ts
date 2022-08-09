import { BadgerRegistry } from '../contracts/RegistryV2';
import VaultInfoStructOutput = BadgerRegistry.VaultInfoStructOutput;
import { getVaultRegv2State, getVaultVersion } from '../vaults';
import { VaultRegistryEntry, VaultRegistryMetadata } from './interfaces';

export function chainRegVaultToEntry(
  vaultInfo: VaultInfoStructOutput,
): VaultRegistryEntry {
  return {
    address: vaultInfo.vault,
    state: getVaultRegv2State(vaultInfo.status),
    version: getVaultVersion(vaultInfo.version),
    metadata: parseRegVaultMetadata(vaultInfo.metadata),
  };
}

export function parseRegVaultMetadata(
  metadata: VaultInfoStructOutput['metadata'],
): VaultRegistryMetadata {
  const parsedMetaData: VaultRegistryMetadata = {};

  if (!metadata) return parsedMetaData;

  metadata.split(',').forEach((val) => {
    const [key, value] = val.split('=');
    parsedMetaData[key] = decodeURI(value);
  });

  return parsedMetaData;
}
