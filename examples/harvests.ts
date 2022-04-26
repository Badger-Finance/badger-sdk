import BadgerSDK, { Network, VaultVersion } from '@badger-dao/sdk';

/**
 * Example for how to load all performance related events to a Badger Vault.
 * Currently only vaults version 1 is supported.
 */
async function getVaultPerformance() {
  // construct the sdk for whatever network you want to interact with
  const sdk = new BadgerSDK({
    network: Network.Ethereum,
    provider: 'https://eth-archival.gateway.pokt.network/v1/lb/<APP_ID>',
  });
  await sdk.ready();

  // load all badger productionized vaults - these appear on the app
  const productionVaults = await sdk.registry.getProductionVaults();
  console.log(
    `SDK loaded ${productionVaults.length} vaults on ${sdk.config.network}`,
  );
  const versionOneVaults = productionVaults.filter(
    (v) => v.version === VaultVersion.v1,
  );

  // oh typescript - we have the vaults!
  if (!versionOneVaults) {
    throw new Error("How'd you manage to break the example?");
  }

  const randomVault =
    versionOneVaults[Math.floor(Math.random() * versionOneVaults.length)];
  console.log(`Picked ${randomVault.address} for Harvests example...`);

  // load vault metadata
  const vault = await sdk.vaults.loadVault({ address: randomVault.address });
  console.log(`Loading performance data for ${vault.name}`);

  const allRecentHarvests = await sdk.vaults.listHarvests({
    address: vault.address,
    version: VaultVersion.v1,
  });
  console.log(allRecentHarvests);
}

getVaultPerformance();
