import BadgerSDK, { Network } from '@badger-dao/sdk';

/**
 * Example for how to load all performance related events to a Badger Vault.
 * Currently only vaults version 1 is supported.
 */
async function getVaultPerformance() {
  // construct the sdk for whatever network you want to interact with
  const sdk = new BadgerSDK({
    network: Network.Fantom,
    provider:
      'https://rpc.ftm.tools',
  });
  await sdk.ready();

  // // load vault metadata
  // const vault = await sdk.vaults.loadVault({ address: '0x96d4dBdc91Bef716eb407e415c9987a9fAfb8906', requireRegistry: false, version: VaultVersion.v1_5, state: VaultState.Guarded });
  // console.log(`Loading performance data for ${vault.name}`);

  // const allRecentHarvests = await sdk.vaults.listHarvests({
  //   address: vault.address,
  //   version: VaultVersion.v1_5,
  // });
  // console.log(allRecentHarvests);
  console.log(await sdk.api.loadSchedule('0xbF2F3a9ba42A00CA5B18842D8eB1954120e4a2A9', true));
}

getVaultPerformance();
