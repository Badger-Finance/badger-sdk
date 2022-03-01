import BadgerSDK, { BadgerAPI, BadgerGraph } from '.';
import { Network } from './config';

const ethAlchemyNodeUrl = 'https://eth-mainnet.alchemyapi.io/v2/-8IubgVIbg-UaXks6VLvgsuYujAravb4';

describe('BadgerSDK',() => {
  let sdk: BadgerSDK;
  let isSdkReady: boolean | void;

  beforeAll(async () => {
    const initializeFunc = jest.spyOn(BadgerSDK.prototype as any, 'initialize');
    initializeFunc.mockImplementation(() => (new Promise((res) => res(true))));

    sdk = new BadgerSDK({
      network: Network.Ethereum,
      provider: ethAlchemyNodeUrl
    });

    isSdkReady = Boolean(await sdk.ready());
  });

  // test('Services are booting properly', async () => {});
  test('Services are booting properly', async () => {
    expect(isSdkReady).toBeTruthy();
  });
  test('Api is a part of SDK, and a standalone app', async () => {
    const badgerApi = new BadgerAPI({ network: Network.Ethereum });

    expect(sdk.api).toBeInstanceOf(BadgerAPI);
    expect(badgerApi).toBeInstanceOf(BadgerAPI);
  });

  test('Graph is a part of SDK, and a standalone app', async () => {
    const badgerGraph = new BadgerGraph();

    expect(sdk.graph).toBeInstanceOf(BadgerGraph);
    expect(badgerGraph).toBeInstanceOf(BadgerGraph);
  });
});
