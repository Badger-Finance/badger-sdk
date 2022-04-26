import { Network } from '../config';
import { getBlockDeployedAt } from './deployed-at.util';

describe('vaultBlockDeployedAt', () => {
  describe('given valid vault addr from eth chain', () => {
    it('should return exact block number', () => {
      const network = Network.Ethereum;
      const vaultAddr = '0xfd05D3C7fe2924020620A8bE4961bBaA747e6305';
      const deployedAt = 13239091;

      expect(getBlockDeployedAt(vaultAddr, network)).toBe(deployedAt);
    });

    it('should return min block number coz of unknown vault', () => {
      const network = Network.Ethereum;
      const vaultAddr = '0xfd05D3111111111111111111111111111111';
      const minDeployedAt = 11380871;

      expect(getBlockDeployedAt(vaultAddr, network)).toBe(minDeployedAt);
    });
  });

  describe('given valid vault, but chain data is empty', () => {
    it('should return 0 as a start block', () => {
      const network = Network.Avalanche;
      const vaultAddr = '0xfd05D3C7fe2924020620A8bE4961bBaA747e6305';

      expect(getBlockDeployedAt(vaultAddr, network)).toBe(0);
    });
  });
});
