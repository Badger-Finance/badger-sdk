import { Networkish } from '@ethersproject/networks';
import { NETWORK_CONFIGS } from '.';
import { Network } from '..';
import { getNetworkConfig } from './network.config';

describe('network.config', () => {
  describe('getNetworkConfig', () => {
    it('Throws an error on bad network request', () => {
      expect(() => getNetworkConfig('bad')).toThrow(
        'No network configuration defined for bad',
      );
    });

    it.each(Object.entries(Network))(
      'Providing %s returns %s',
      (networkish: Networkish, network: Network) => {
        expect(getNetworkConfig(networkish).network).toEqual(network);
      },
    );

    it.each(
      Object.values(NETWORK_CONFIGS).map((c): [number, Network] => [
        c.chainId,
        c.network,
      ]),
    )('Providing %s returns %s', (networkish: Networkish, network: Network) => {
      expect(getNetworkConfig(networkish).network).toEqual(network);
    });

    it.each(
      Object.values(NETWORK_CONFIGS).map((c): [string, Network] => [
        c.currencySymbol,
        c.network,
      ]),
    )('Providing %s returns %s', (networkish: Networkish, network: Network) => {
      expect(getNetworkConfig(networkish).network).toEqual(network);
    });
  });
});
