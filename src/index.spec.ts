import { ethers } from 'ethers';
import BadgerSDK, { BadgerAPI, BadgerGraph } from '.';

const ethAlchemyNodeUrl = 'https://eth-mainnet.alchemyapi.io/v2/-8IubgVIbg-UaXks6VLvgsuYujAravb4'

describe('BadgerSDK', async () => {
  let sdk: BadgerSDK;

  beforeAll(async () => {
    sdk = new BadgerSDK(
      1,
      new ethers.providers.JsonRpcBatchProvider(ethAlchemyNodeUrl),
    );
  });

  // test('Services are booting properly', async () => {});
  test('Services are booting properly', async () => {
    const isReady = await sdk.ready();

    expect(isReady).toBeTruthy();
  });
  test('Api is a part of SDK, and a standalone app', async () => {
    const badgerApi = new BadgerAPI();

    expect(sdk.api).toBeInstanceOf(BadgerAPI);
    expect(badgerApi).toBeInstanceOf(BadgerAPI);
  });

  test('Graph is a part of SDK, and a standalone app', async () => {
    const badgerGraph = new BadgerGraph();

    expect(sdk.graph).toBeInstanceOf(badgerGraph);
    expect(badgerGraph).toBeInstanceOf(BadgerGraph);
  });
});
