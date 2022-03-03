import BadgerSDK, { BadgerAPI, BadgerGraph } from '.';
import { Network } from './config';

const ethAlchemyNodeUrl = 'https://cloudflare-eth.com';

describe('BadgerSDK', () => {
  let sdk: BadgerSDK;

  beforeAll(async () => {
    // eslint-disable-next-line
    const initializeFunc = jest.spyOn(BadgerSDK.prototype as any, 'initialize');
    initializeFunc.mockImplementation(() => new Promise((res) => res(true)));

    sdk = new BadgerSDK({
      network: Network.Ethereum,
      provider: ethAlchemyNodeUrl,
    });
  });

  test('Api is a part of SDK, and a standalone app', async () => {
    const badgerApi = new BadgerAPI({ network: Network.Ethereum });

    expect(sdk.api).toBeInstanceOf(BadgerAPI);
    expect(badgerApi).toBeInstanceOf(BadgerAPI);
  });

  test('Graph is a part of SDK, and a standalone app', async () => {
    const badgerGraph = new BadgerGraph({ network: Network.Ethereum });

    expect(sdk.graph).toBeInstanceOf(BadgerGraph);
    expect(badgerGraph).toBeInstanceOf(BadgerGraph);
  });
});
