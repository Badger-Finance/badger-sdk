import { JsonRpcProvider, JsonRpcSigner } from '@ethersproject/providers';
import { BigNumber } from 'ethers';
import { mock, MockProxy } from 'jest-mock-extended';

import { Network } from '../config';
import {
  CitadelMinter,
  CitadelMinter__factory,
  StakedCitadelLocker,
  StakedCitadelLocker__factory,
} from '../contracts';
import { RegistryService } from '../registry';
import { RewardsService } from '../rewards';
import { BadgerSDK } from '../sdk';
import * as deployedUtils from '../utils/deployed-at.util';
import { RewardFilter } from './enums/reward-filter.enum';
import { CitadelInitError, CitadelValidationError } from './errors';
import { addedRewardEvents } from './mocks/added-reward-events.mock';
import { citadelDistributionToStakingEvents } from './mocks/distribution-to-staking-events.mock';
import { paidRewardEvents } from './mocks/paid-reward-events.mock';

describe('citadel.service', function () {
  const TEST_ADDR = '0x96d4dBdc91Bef716eb407e415c9987a9fAfb8906';
  const TEST_TOKEN = '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'; // WBTC
  const TEST_USER = '0x3472A5A71965499acd81997a54BBA8D852C6E53d'; // Badger

  const DEPLOYED_AT = 10;
  const CURRENT_BLOCK = 150;

  let sdk: BadgerSDK;
  let minter: MockProxy<CitadelMinter>;
  let locker: MockProxy<StakedCitadelLocker>;

  beforeEach(async () => {
    // Setup Jest Mocks
    const mockSigner = mock<JsonRpcSigner>();
    mockSigner.getAddress
      .calledWith()
      .mockImplementation(async () => TEST_ADDR);
    const mockProvider = mock<JsonRpcProvider>();
    mockProvider.getSigner.calledWith().mockImplementation(() => mockSigner);
    mockProvider.getBlockNumber
      .calledWith()
      .mockImplementation(async () => CURRENT_BLOCK);

    // Services that will force contracts connection in sdk constructor
    jest.spyOn(RegistryService.prototype, 'ready').mockImplementation();
    jest.spyOn(RewardsService.prototype, 'ready').mockImplementation();

    minter = mock<CitadelMinter>();
    locker = mock<StakedCitadelLocker>();

    mock(minter.filters)
      .CitadelDistributionToStaking.calledWith()
      .mockImplementation();

    mock(locker.filters).RewardAdded.calledWith().mockImplementation();
    mock(locker.filters).RewardPaid.calledWith().mockImplementation();

    jest
      .spyOn(CitadelMinter__factory, 'connect')
      .mockImplementation(() => minter);
    jest
      .spyOn(StakedCitadelLocker__factory, 'connect')
      .mockImplementation(() => locker);

    sdk = new BadgerSDK({
      network: Network.Ethereum,
      provider: mockProvider,
    });

    // Let the SDK Prepare
    await sdk.ready();

    jest
      .spyOn(deployedUtils, 'getBlockDeployedAt')
      .mockImplementation(() => DEPLOYED_AT);
  });

  describe('Work only with Ethereum network', () => {
    it('method should throw error', () => {
      const mockSigner = mock<JsonRpcSigner>();
      mockSigner.getAddress
        .calledWith()
        .mockImplementation(async () => TEST_ADDR);
      const mockProvider = mock<JsonRpcProvider>();
      mockProvider.getSigner.calledWith().mockImplementation(() => mockSigner);

      sdk = new BadgerSDK({
        network: Network.Fantom,
        provider: mockProvider,
      });

      expect(async () => sdk.citadel.balanceOf(TEST_ADDR)).rejects.toThrow(
        CitadelInitError,
      );
    });
  });

  describe('listDistributions', () => {
    it('should return distribution events, mapped by time', async () => {
      const asyncMock = async () => citadelDistributionToStakingEvents;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      minter.queryFilter.calledWith().mockImplementation(asyncMock);

      const distributions = await sdk.citadel.listDistributions();

      expect(Object.keys(distributions).length).toBe(3);
      expect(distributions).toMatchSnapshot();
    });

    it('should respect start block at param', async () => {
      const asyncMock = async (_: never, fromBlock: number) => {
        return citadelDistributionToStakingEvents.filter(
          (e) => e.block >= fromBlock,
        );
      };
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      minter.queryFilter.calledWith().mockImplementation(asyncMock);

      const distributions = await sdk.citadel.listDistributions({
        startBlock: 52,
      });

      expect(Object.keys(distributions).length).toBe(2);
      expect(distributions).toMatchSnapshot();
    });
  });

  describe('listRewards', () => {
    it('should return added rewards', async () => {
      const asyncMock = async () => addedRewardEvents;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      locker.queryFilter.calledWith().mockImplementation(asyncMock);

      const rewards = await sdk.citadel.listRewards({ token: TEST_TOKEN });

      expect(rewards.length).toBe(5);
      expect(rewards).toMatchSnapshot();
    });

    it('should return paid rewards', async () => {
      const asyncMock = async () => paidRewardEvents;
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      locker.queryFilter.calledWith().mockImplementation(asyncMock);

      const rewards = await sdk.citadel.listRewards({
        token: TEST_TOKEN,
        user: TEST_USER,
        filter: RewardFilter.PAID,
      });

      expect(rewards.length).toBe(3);
      expect(rewards).toMatchSnapshot();
    });

    it('should throw validation error for unknown filter', async () => {
      await expect(async () => {
        return sdk.citadel.listRewards({
          token: TEST_TOKEN,
          user: TEST_USER,
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          filter: 'unknown',
        });
      }).rejects.toThrow(CitadelValidationError);
    });
  });

  describe('getCitadelMintDistribution', () => {
    it('should return correct result', async () => {
      minter.fundingBps
        .calledWith()
        .mockImplementation(async () => BigNumber.from(5));
      minter.stakingBps
        .calledWith()
        .mockImplementation(async () => BigNumber.from(10));
      minter.lockingBps
        .calledWith()
        .mockImplementation(async () => BigNumber.from(15));

      const [fundingBps, stakingBps, lockingBps] = await Promise.all([
        minter.fundingBps(),
        minter.stakingBps(),
        minter.lockingBps(),
      ]);

      expect({
        fundingBps: fundingBps.toNumber(),
        stakingBps: stakingBps.toNumber(),
        lockingBps: lockingBps.toNumber(),
      }).toMatchObject({
        fundingBps: 5,
        stakingBps: 10,
        lockingBps: 15,
      });
    });
  });
});
