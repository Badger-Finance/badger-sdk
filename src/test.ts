import { ethers } from 'ethers';
import BadgerSDK from '.';

const BCVXCRV = '0x2B5455aac8d64C14786c3a29858E43b5945819C0';

async function testSDK() {
  const sdk = new BadgerSDK(
    1,
    new ethers.providers.JsonRpcBatchProvider(
      'https://eth-mainnet.alchemyapi.io/v2/-8IubgVIbg-UaXks6VLvgsuYujAravb4',
    ),
  );
  await sdk.ready();

  const performance = await sdk.vaults.list({ address: BCVXCRV });
  console.log(performance);
}

testSDK();
