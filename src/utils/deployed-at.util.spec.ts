import axios from 'axios';

import { Network } from '../config';
import {
  formScanApiUrl,
  getBlockDeployedAt,
  getContractDeployedAtBlock,
} from './deployed-at.util';
import * as utils from './deployed-at.util';

describe('getContractDeployedAtBlock', () => {
  it('should return deployed at block for vault', async () => {
    const expectedBlock = 12345678;
    const scanUrl = 'https://etherscan.io';
    const scanApiUrl = 'https://api.etherscan.io/api';

    const formScanApiUrlSpy = jest
      .spyOn(utils, 'formScanApiUrl')
      .mockReturnValue(scanApiUrl);

    jest.spyOn(axios, 'get').mockResolvedValue({
      status: 200,
      data: { result: [{ blockNumber: expectedBlock }] },
    });

    const deployedAtBlock = await getContractDeployedAtBlock(
      '0x19D97D8fA813EE2f51aD4B4e04EA08bAf4DFfC28',
      Network.Ethereum,
    );

    expect(formScanApiUrlSpy).toBeCalledWith(scanUrl);
    expect(deployedAtBlock).toBe(expectedBlock);
  });

  it('should return null if deployed at block is not found', async () => {
    console.warn = jest.fn();

    jest.spyOn(axios, 'get').mockResolvedValue({
      status: 200,
      data: { result: [] },
    });

    const deployedAtBlock = await getContractDeployedAtBlock(
      '0x19D97D8fA813EE2f51aD4B4e04EA08bAf4DFfC28',
      Network.Ethereum,
    );

    expect(deployedAtBlock).toBeNull();
  });

  it('should return null if request failed', async () => {
    console.warn = jest.fn();

    jest.spyOn(axios, 'get').mockResolvedValue({
      status: 500,
      data: {},
    });

    const deployedAtBlock = await getContractDeployedAtBlock(
      '0x19D97D8fA813EE2f51aD4B4e04EA08bAf4DFfC28',
      Network.Ethereum,
    );

    expect(deployedAtBlock).toBeNull();
  });
});

describe('formScanApiUrl', () => {
  it('should return correct api url', () => {
    const apiUrl = formScanApiUrl('https://etherscan.io');

    expect(apiUrl).toBe('https://api.etherscan.io/api');
  });

  it('should throw error if url is invalid', () => {
    expect(() => formScanApiUrl('invalid-url')).toThrow();
  });
});

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
