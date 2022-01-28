import { ethers } from 'ethers';
import BadgerSDK from '.';

const BWBTC = '0x711555f2b421da9a86a18dc163d04699310fe297';

async function testSDK() {
  const sdk = new BadgerSDK(
    43114,
    new ethers.providers.JsonRpcBatchProvider(
      'https://api.avax.network/ext/bc/C/rpc',
    ),
  );
  await sdk.ready();

  const performance = await sdk.vaults.loadVaultPerformance(BWBTC);
  console.log(performance);
}

testSDK();
