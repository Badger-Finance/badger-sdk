import { JsonRpcProvider, JsonRpcSigner } from '@ethersproject/providers';
import { mock, MockProxy } from 'jest-mock-extended';

import { Network } from '../config';
import {
  Controller,
  Controller__factory,
  Erc20,
  Erc20__factory,
  Strategy,
  Strategy__factory,
  StrategyV15,
  StrategyV15__factory,
  Vault,
  Vault__factory,
  VaultV15,
  VaultV15__factory,
} from '../contracts';
import { RegistryService } from '../registry';
import { RegistryV2Service } from '../registry.v2';
import { RewardsService } from '../rewards';
import { BadgerSDK } from '../sdk';
import { MockVaultSystem } from './interfaces/mock-vault-system.interface';
import { TEST_ADDR } from './tests.constants';

export function mockSDK(): BadgerSDK {
  const mockSigner = mock<JsonRpcSigner>();
  mockSigner.getAddress.calledWith().mockImplementation(async () => TEST_ADDR);
  const mockProvider = mock<JsonRpcProvider>();
  mockProvider.getSigner.calledWith().mockImplementation(() => mockSigner);

  const sdk = new BadgerSDK({
    network: Network.Fantom,
    provider: mockProvider,
  });

  jest.spyOn(RegistryService.prototype, 'ready').mockImplementation();
  jest.spyOn(RegistryV2Service.prototype, 'ready').mockImplementation();
  jest.spyOn(RewardsService.prototype, 'ready').mockImplementation();

  return sdk;
}

export function mockVaults(): MockVaultSystem {
  const controller = mock<Controller>();
  const vault = mock<Vault>();
  const vaultV15 = mock<VaultV15>();
  const strategy = mock<Strategy>();
  const strategyV15 = mock<StrategyV15>();

  jest
    .spyOn(Controller__factory, 'connect')
    .mockImplementation(() => controller);
  jest.spyOn(Vault__factory, 'connect').mockImplementation(() => vault);
  jest.spyOn(VaultV15__factory, 'connect').mockImplementation(() => vaultV15);
  jest.spyOn(Strategy__factory, 'connect').mockImplementation(() => strategy);
  jest
    .spyOn(StrategyV15__factory, 'connect')
    .mockImplementation(() => strategyV15);

  return {
    controller,
    vault,
    vaultV15,
    strategy,
    strategyV15,
  };
}

export function mockToken(): MockProxy<Erc20> {
  const token = mock<Erc20>();

  jest.spyOn(Erc20__factory, 'connect').mockImplementation(() => token);
  jest.spyOn(token, 'name').mockImplementation(async () => 'Test Token');
  jest.spyOn(token, 'symbol').mockImplementation(async () => 'JTT');
  jest.spyOn(token, 'decimals').mockImplementation(async () => 18);

  return token;
}
