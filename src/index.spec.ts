import BadgerSDK, { BadgerAPI, BadgerGraph } from '.';
import { Network } from './config';
import { mockSDK } from './tests/tests.utils';

describe('BadgerSDK', () => {
  let sdk: BadgerSDK;

  beforeEach(async () => {
    sdk = mockSDK();
    await sdk.ready();
  });

  test('API is a part of SDK, and a standalone app', async () => {
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
