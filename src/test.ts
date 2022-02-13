import { ethers } from 'ethers';
import BadgerSDK from '.';

const BWBTC = '0x711555f2b421da9a86a18dc163d04699310fe297';

async function testSDK() {
  const sdk = new BadgerSDK(
    1,
    new ethers.providers.JsonRpcBatchProvider(
      'https://eth-mainnet.alchemyapi.io/v2/-8IubgVIbg-UaXks6VLvgsuYujAravb4',
    ),
  );
  await sdk.ready();

  const performance = await sdk.vaults.list({ address: BWBTC });
  console.log(performance);
}

testSDK();
