import { ethers } from 'ethers';
import BadgerSDK from '.';

async function testSDK() {
  const sdk = new BadgerSDK(
    1,
    new ethers.providers.JsonRpcBatchProvider(
      'https://mainnet.infura.io/v3/4c06e2847e1d456ea30506468ad0be5c',
    ),
  );
  await sdk.ready();

  console.time('loadVaults - first run');
  await sdk.vaults.loadVaults();
  console.timeEnd('loadVaults - first run');

  console.time('loadVaults - second run');
  await sdk.vaults.loadVaults();
  console.timeEnd('loadVaults - second run');
}

testSDK();
