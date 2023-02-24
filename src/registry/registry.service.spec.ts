/* eslint-disable @typescript-eslint/ban-ts-comment */

import { JsonRpcProvider, JsonRpcSigner } from '@ethersproject/providers';
import { BigNumber } from 'ethers';
import { mock, MockProxy } from 'jest-mock-extended';

import { VaultState } from '../api';
import { Network } from '../config';
import { RegistryV2, RegistryV2__factory } from '../contracts';
import { GovernanceService } from '../governance/governance.service';
import { RewardsService } from '../rewards';
import { BadgerSDK } from '../sdk';
import { TEST_ADDR } from '../tests/tests.constants';
import { VaultVersion } from '../vaults';
import { registryAllProductionVaultsMock } from './mocks/registry-all-production-vaults.mock';
import { registryProductionVaultsMock } from './mocks/registry-production-vaults.mock';

describe('RegistryService', () => {
  function prepareSdkMocks(currBlock = 39039987): {
    mockProvider: MockProxy<JsonRpcProvider>;
    registryV2: MockProxy<RegistryV2>;
  } {
    const mockSigner = mock<JsonRpcSigner>();
    mockSigner.getAddress
      .calledWith()
      .mockImplementation(async () => TEST_ADDR);
    const mockProvider = mock<JsonRpcProvider>();
    mockProvider.getSigner.calledWith().mockImplementation(() => mockSigner);
    mockProvider.getBlockNumber
      .calledWith()
      .mockImplementation(async () => currBlock);

    jest.spyOn(RewardsService.prototype, 'ready').mockImplementation();

    const registryV2 = mock<RegistryV2>();

    jest
      .spyOn(RegistryV2__factory, 'connect')
      .mockImplementation(() => registryV2);

    return {
      mockProvider,
      registryV2,
    };
  }

  describe('init and regv2 property a part of sdk', () => {
    let mockProvider: MockProxy<JsonRpcProvider>;
    let registryV2: MockProxy<RegistryV2>;

    beforeEach(async () => {
      const sdkMocks = prepareSdkMocks();

      mockProvider = sdkMocks.mockProvider;
      registryV2 = sdkMocks.registryV2;
    });

    it('should init regestryV2', async () => {
      const sdk = new BadgerSDK({
        network: Network.Ethereum,
        provider: mockProvider,
      });

      await sdk.ready();

      expect(sdk.registry.registry).toBe(registryV2);
    });

    it('should throw an error, if registry not deployed', async () => {
      console.error = jest.fn();

      mockProvider.getCode.mockImplementation(async () => '0x');

      const sdk = new BadgerSDK({
        network: Network.Ethereum,
        provider: mockProvider,
      });

      await sdk.ready();

      expect(sdk.registry.hasRegistry()).toBeFalsy();
      expect(() => sdk.registry.registry).toThrowError();
    });
  });

  describe('methods', () => {
    let sdk: BadgerSDK;
    let registryV2: MockProxy<RegistryV2>;

    beforeEach(async () => {
      const sdkMocks = prepareSdkMocks();

      registryV2 = sdkMocks.registryV2;

      sdk = new BadgerSDK({
        network: Network.Ethereum,
        provider: sdkMocks.mockProvider,
      });

      jest.spyOn(GovernanceService.prototype, 'ready').mockImplementation();

      await sdk.ready();
    });

    describe('get', () => {
      it('should return key value and cache it', async () => {
        const treasuryVaultAddr = '0x45b798384c236ef0d78311D98AcAEc222f8c6F54';

        registryV2.get.mockImplementation(
          async () => '0x45b798384c236ef0d78311D98AcAEc222f8c6F54',
        );

        const keyValue = await sdk.registry.get('treasuryVault');

        expect(keyValue).toBe(treasuryVaultAddr);
        expect(registryV2.get.mock.calls.length).toBe(1);
      });
    });

    describe('keysCount', () => {
      it('should return key value and cache it', async () => {
        const keysCnt = 50;
        registryV2.keysCount.mockImplementation(async () =>
          BigNumber.from(keysCnt),
        );

        const sdkKeyCnt = await sdk.registry.keysCount();

        expect(sdkKeyCnt).toBe(keysCnt);
      });
    });

    describe('getVaults', () => {
      it('should return mapped vaults', async () => {
        registryV2.getVaults.mockImplementation(
          // @ts-ignore
          async () => registryProductionVaultsMock,
        );

        expect(
          await sdk.registry.getVaults(
            VaultVersion.v1_5,
            '0x781E82D5D49042baB750efac91858cB65C6b0582',
          ),
        ).toMatchSnapshot();
      });
    });

    describe('getFilteredProductionVaults', () => {
      it('should return mapped vaults', async () => {
        registryV2.getFilteredProductionVaults.mockImplementation(
          // @ts-ignore
          async () => registryProductionVaultsMock,
        );

        expect(
          await sdk.registry.getFilteredProductionVaults(
            VaultVersion.v1_5,
            VaultState.Open,
          ),
        ).toMatchSnapshot();
      });
    });

    describe('getProductionVaults', () => {
      it('should return mapped vaults and parsed metadata', async () => {
        registryV2.getProductionVaults.mockImplementation(
          // @ts-ignore
          async () => registryAllProductionVaultsMock,
        );

        expect(await sdk.registry.getProductionVaults()).toMatchSnapshot();
      });
    });
  });
});
