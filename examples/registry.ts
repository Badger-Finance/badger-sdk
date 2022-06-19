import { BadgerAPI, Network, VaultState } from '@badger-dao/sdk';

function getVaultStatus(state: VaultState) {
  switch (state) {
    case VaultState.Experimental:
      return 1;
    case VaultState.Guarded:
      return 2;
    case VaultState.Featured:
    case VaultState.Open:
      return 3;
    default:
      return 0
  }
}

async function generateRegistryCalldata() {
  const api = new BadgerAPI({ network: Network.Fantom });

  const vaults = await api.loadVaults();
  
  const callData = vaults.map((v) => {
    const metadta = `name=${encodeURI(v.name)},protocol=${v.protocol},behavior=${v.behavior}`;
    return [v.vaultToken, v.version, metadta, getVaultStatus(v.state)];
  });

  console.log(callData);
}

generateRegistryCalldata();
