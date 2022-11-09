import { mock, MockProxy } from 'jest-mock-extended';

import { Network } from '../config';
import { TimelockController, TimelockController__factory } from '../contracts';
import { BadgerSDK } from '../sdk';
import { mockSDK } from '../tests';
import { TestServiceEnum } from '../tests/service.enum';
import * as deployedAtUtils from '../utils/deployed-at.util';
import { GovernanceService } from './governance.service';
import { GovernanceProxyMock } from './mocks/governance.proxy.mock';
import { PROPOSALS_CANCELLED_EVENTS } from './mocks/proposal.cancelled.event';
import { PROPOSALS_EXECUTED_EVENTS } from './mocks/proposal.executed.event';
import { PROPOSALS_DISPUTED_EVENTS } from './mocks/proposals.disputed.event';
import { PROPOSALS_RESOLVED_EVENTS } from './mocks/proposals.resolved.event';
import { PROPOSALS_SCHEDULED_EVENTS } from './mocks/proposals.scheduled.event';

describe('governance.service', () => {
  let sdk: BadgerSDK;
  let timeLockControllerMock: MockProxy<TimelockController>;

  beforeEach(async function () {
    sdk = mockSDK(Network.Arbitrum, TestServiceEnum.governance);

    const timelockController = mock<TimelockController>();

    jest
      .spyOn(TimelockController__factory, 'connect')
      .mockImplementation(() => timelockController);

    timeLockControllerMock = timelockController;

    await sdk.ready();
  });

  describe('timelock controller address getter', () => {
    it('should return the timeLock address', async function () {
      expect(
        Object.keys(GovernanceService.TIMELOCK_CONTRACT_ADDR_MAP).length,
      ).toBeGreaterThan(0);
      expect(
        Object.values(GovernanceService.TIMELOCK_CONTRACT_ADDR_MAP).length,
      ).toBeGreaterThan(0);
      expect(sdk.governance.timelockAddress).toMatchSnapshot();
    });

    it('should be undefined if the network is not supported', async function () {
      const tempTimelockAddressMap = {
        ...GovernanceService.TIMELOCK_CONTRACT_ADDR_MAP,
      };

      Object.defineProperty(GovernanceService, 'TIMELOCK_CONTRACT_ADDR_MAP', {
        value: {},
      });

      expect(sdk.governance.timelockAddress).toBeUndefined();

      Object.defineProperty(GovernanceService, 'TIMELOCK_CONTRACT_ADDR_MAP', {
        value: tempTimelockAddressMap,
      });
    });
  });

  describe('timelock contract getter', () => {
    it('should return the timelock contract', async () => {
      expect(sdk.governance.timelockController).toBe(timeLockControllerMock);
    });

    it('should throw an error if it not deployed on the network', () => {
      const tempTimelockAddressMap = {
        ...GovernanceService.TIMELOCK_CONTRACT_ADDR_MAP,
      };
      sdk = mockSDK(Network.Fantom, TestServiceEnum.governance);

      Object.defineProperty(GovernanceService, 'TIMELOCK_CONTRACT_ADDR_MAP', {
        value: {},
      });

      expect(() => sdk.governance.timelockController).toThrowError();

      Object.defineProperty(GovernanceService, 'TIMELOCK_CONTRACT_ADDR_MAP', {
        value: tempTimelockAddressMap,
      });
    });
  });

  describe('processEventsScanRange', () => {
    let governance: GovernanceProxyMock;

    beforeEach(() => {
      governance = new GovernanceProxyMock(sdk);
    });

    it('should return options values if they are defined', async () => {
      const options = {
        startBlock: 1,
        endBlock: 2,
      };

      await governance.processEventsScanRangePr(
        governance.timelockAddress,
        options,
      );

      expect(options.startBlock).toBe(1);
      expect(options.endBlock).toBe(2);
    });

    it('should assign the block range if they are not defined', async () => {
      const startBlock = 1000;
      const endBlock = 999999;

      jest
        .spyOn(deployedAtUtils, 'getBlockDeployedAt')
        .mockReturnValue(startBlock);
      jest.spyOn(sdk.provider, 'getBlockNumber').mockResolvedValue(endBlock);

      const options = {
        startBlock: 0,
        endBlock: 0,
      };

      await governance.processEventsScanRangePr(
        governance.timelockAddress,
        options,
      );

      expect(options.startBlock).toBe(startBlock);
      expect(options.endBlock).toBe(endBlock);
    });
  });

  describe('loadScheduledProposals', () => {
    beforeEach(() => {
      timeLockControllerMock.queryFilter.mockImplementation(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        async (_, startBlock, endBlock) => {
          return PROPOSALS_SCHEDULED_EVENTS.filter(
            (event) =>
              event.blockNumber >= Number(startBlock) &&
              event.blockNumber <= Number(endBlock),
          );
        },
      );
      timeLockControllerMock.filters.CallScheduled = jest.fn();
    });

    it('should return scheduled proposals', async () => {
      const proposals = await sdk.governance.loadScheduledProposals({
        startBlock: 34_941_486,
        endBlock: 34_941_490,
      });

      expect(proposals).toMatchSnapshot();
    });

    it('should return empty array if there are no scheduled proposals within blocks range', async () => {
      const proposals = await sdk.governance.loadScheduledProposals({
        startBlock: 10,
        endBlock: 100,
      });

      expect(proposals).toEqual([]);
    });
  });

  describe('loadProposalsStatusChanges', () => {
    const defaultRangeOpts = {
      startBlock: 34_941_480,
      endBlock: 34_941_490,
    };

    const eventCallExecuted = 'CallExecuted';
    const eventCallCanceled = 'Canceled';

    beforeEach(() => {
      timeLockControllerMock.queryFilter.mockImplementation(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        async (ef, startBlock, endBlock) => {
          const filterFunc = <T extends Record<string, number>>(event: T) =>
            event.blockNumber >= Number(startBlock) &&
            event.blockNumber <= Number(endBlock);

          if (ef.topics?.includes(eventCallExecuted)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return PROPOSALS_EXECUTED_EVENTS.filter(filterFunc);
          } else if (ef.topics?.includes(eventCallCanceled)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return PROPOSALS_CANCELLED_EVENTS.filter(filterFunc);
          }

          return [];
        },
      );
      timeLockControllerMock.filters.CallExecuted = jest.fn().mockReturnValue({
        topics: [eventCallExecuted],
      });
      timeLockControllerMock.filters.Cancelled = jest.fn().mockReturnValue({
        topics: [eventCallCanceled],
      });
    });

    it('should return events with status changes for proposals in sorted way', async () => {
      const events = await sdk.governance.loadProposalsStatusChange(
        defaultRangeOpts,
      );

      expect(events).toMatchSnapshot();
    });

    it('should return empty array if there are no scheduled proposals within blocks range', async () => {
      const events = await sdk.governance.loadProposalsStatusChange({
        startBlock: 10,
        endBlock: 100,
      });

      expect(events).toEqual([]);
    });
  });

  describe('loadProposalsDisputes', () => {
    const defaultRangeOpts = {
      startBlock: 34_941_480,
      endBlock: 34_941_490,
    };

    const eventCallDisputed = 'CallDisputed';
    const eventDisputedResolved = 'CallDisputedResolved';

    beforeEach(() => {
      timeLockControllerMock.queryFilter.mockImplementation(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        async (ef, startBlock, endBlock) => {
          const filterFunc = <T extends Record<string, number>>(event: T) =>
            event.blockNumber >= Number(startBlock) &&
            event.blockNumber <= Number(endBlock);

          if (ef.topics?.includes(eventCallDisputed)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return PROPOSALS_DISPUTED_EVENTS.filter(filterFunc);
          } else if (ef.topics?.includes(eventDisputedResolved)) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return PROPOSALS_RESOLVED_EVENTS.filter(filterFunc);
          }

          return [];
        },
      );
      timeLockControllerMock.filters.CallDisputed = jest.fn().mockReturnValue({
        topics: [eventCallDisputed],
      });
      timeLockControllerMock.filters.CallDisputedResolved = jest
        .fn()
        .mockReturnValue({
          topics: [eventDisputedResolved],
        });
    });

    it('should return events with status changes for proposals in sorted way', async () => {
      const events = await sdk.governance.loadProposalsDisputes(
        defaultRangeOpts,
      );

      expect(events).toMatchSnapshot();
    });

    it('should return empty array if there are no scheduled proposals within blocks range', async () => {
      const events = await sdk.governance.loadProposalsDisputes({
        startBlock: 10,
        endBlock: 100,
      });

      expect(events).toEqual([]);
    });
  });
});
