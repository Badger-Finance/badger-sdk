import { BadgerRegistry } from '../contracts/RegistryV2';
import VaultInfoStructOutput = BadgerRegistry.VaultInfoStructOutput;
import { getVaultRegv2State, getVaultVersion } from '../vaults';
import { VaultRegistryV2Entry, VaultRegistryV2Metadata } from './interfaces';

export function chainRegVaultToEntry(
  vaultInfo: VaultInfoStructOutput,
): VaultRegistryV2Entry {
  return {
    address: vaultInfo.vault,
    state: getVaultRegv2State(vaultInfo.status),
    version: getVaultVersion(vaultInfo.version),
    metadata: parseRegVaultMetadata(vaultInfo.metadata),
  };
}

export function parseRegVaultMetadata(
  metadata: VaultInfoStructOutput['metadata'],
): VaultRegistryV2Metadata {
  const parsedMetaData: VaultRegistryV2Metadata = {};

  if (!metadata) return parsedMetaData;

  metadata.split(',').forEach((val) => {
    const [key, value] = val.split('=');
    parsedMetaData[key] = decodeURI(value);
  });

  return parsedMetaData;
}
