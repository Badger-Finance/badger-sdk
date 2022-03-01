import BadgerSDK from '.';

const BCVXCRV = '0x27E98fC7d05f54E544d16F58C194C2D7ba71e3B5';

async function testSDK() {
  const sdk = new BadgerSDK({
    network: 1,
    provider:
      'https://eth-mainnet.alchemyapi.io/v2/-8IubgVIbg-UaXks6VLvgsuYujAravb4',
  });
  await sdk.ready();

  const { data } = await sdk.vaults.listHarvests({ address: BCVXCRV });
  console.log(data[0]);
}

testSDK();
