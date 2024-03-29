import { providers } from '@0xsequence/multicall';
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
import { GovernanceService } from '../governance/governance.service';
import { ibBTCService } from '../ibbtc';
import { RegistryService } from '../registry';
import { RewardsService } from '../rewards';
import { BadgerSDK } from '../sdk';
import { MockVaultSystem } from './interfaces/mock-vault-system.interface';
import { TestServiceEnum } from './service.enum';
import { TEST_ADDR } from './tests.constants';

export function mockSDK(
  network: Network = Network.Fantom,
  testingService: TestServiceEnum | null = null,
): BadgerSDK {
  const mockSigner = mock<JsonRpcSigner>();
  mockSigner.getAddress.calledWith().mockImplementation(async () => TEST_ADDR);
  const mockProvider = mock<JsonRpcProvider>();
  mockProvider.getSigner.calledWith().mockImplementation(() => mockSigner);

  testingService !== TestServiceEnum.registry &&
    jest.spyOn(RegistryService.prototype, 'ready').mockImplementation();
  testingService !== TestServiceEnum.rewards &&
    jest.spyOn(RewardsService.prototype, 'ready').mockImplementation();
  testingService !== TestServiceEnum.governance &&
    jest.spyOn(GovernanceService.prototype, 'ready').mockImplementation();
  testingService !== TestServiceEnum.ibbtc &&
    jest.spyOn(ibBTCService.prototype, 'ready').mockImplementation();

  const mockMulticall = mock<providers.MulticallProvider>();
  jest
    .spyOn(BadgerSDK.prototype, 'getMulticallProvider')
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    .mockImplementation((_p) => mockMulticall);

  const sdk = new BadgerSDK({
    network,
    provider: mockProvider,
  });

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
