import { BadgerRegistry } from '../../contracts/RegistryV2';

export const registryV2ProductionVaultsMock: BadgerRegistry.VaultInfoStruct[] =
  [
    {
      vault: '0x96d4dBdc91Bef716eb407e415c9987a9fAfb8906',
      version: 'v1.5',
      status: 3,
      metadata: 'name=bveOXD,protocol=0xDAO,behavior=None',
    },
    {
      vault: '0xa8bD8655A0dCABE76913D821Ab437562276b3B59',
      version: 'v1.5',
      status: 3,
      metadata: 'name=boxSOLID,protocol=0xDAO,behavior=Ecosystem Helper',
    },
    {
      vault: '0xbF2F3a9ba42A00CA5B18842D8eB1954120e4a2A9',
      version: 'v1.5',
      status: 3,
      metadata: 'name=bveOXD/OXD,protocol=0xDAO,behavior=Ecosystem Helper',
    },
    {
      vault: '0xcd1e62b390373fcFeA87Dd06E2497Fdc907935fA',
      version: 'v1.5',
      status: 3,
      metadata: 'name=USDC/DEI,protocol=0xDAO,behavior=Ecosystem',
    },
  ];
