import { BigNumber, ethers } from 'ethers';

import { VaultState } from '..';
import { TimeRangeOptions } from '../common';
import { Strategy__factory, VaultV15__factory } from '../contracts';
import { HarvestEvent, TreeDistributionEvent } from '../contracts/Strategy';
import {
  HarvestedEvent,
  TreeDistributionEvent as TreeDistributionEventV15,
} from '../contracts/VaultV15';
import { VaultVersion } from '.';
import {
  getVaultState,
  getVaultVersion,
  loadVaultPerformanceEvents,
  loadVaultV15PerformanceEvents,
  parseHarvestEvents,
  parseHarvestV15Events,
  timestampInRange,
} from './vaults.utils';

describe('vaults.utils', () => {
  const defaultTimestamp = BigNumber.from('1647284957');
  const block = {
    hash: '',
    parentHash: '',
    number: 1_000_000,
    timestamp: defaultTimestamp.toNumber(),
    nonce: '',
    difficulty: 0,
    _difficulty: BigNumber.from('0'),
    gasLimit: ethers.constants.Zero,
    gasUsed: ethers.constants.Zero,
    miner: '',
    extraData: '',
    transactions: [],
  };

  // harvest one
  const harvestedOne = BigNumber.from('1647275665000000');
  const blockNumberOne = BigNumber.from('1647275665');

  // harvest two
  const harvestedTwo = BigNumber.from('1447275665000000');
  const blockNumberTwo = BigNumber.from('1647315665');

  // harvest three
  const harvestedThree = BigNumber.from('1947275665000000');
  const blockNumberThree = BigNumber.from('1647355665');

  // setup harvest events
  const harvests: HarvestEvent[] = [
    { args: [harvestedOne, blockNumberOne] },
    { args: [harvestedTwo, blockNumberTwo] },
    { args: [harvestedThree, blockNumberThree] },
  ] as HarvestEvent[];
  harvests.forEach((h, i) => {
    h.getBlock = async () => ({
      ...block,
      timestamp: block.timestamp + 1250 * i,
    });
    h.transactionHash = `0x6422091f26311d0442aa546f3f1444bcc111e361cbd506659f38082b1edab172${i}`;
  });

  const harvestsV15: HarvestedEvent[] = [
    {
      args: ['0xTEST', harvestedOne, blockNumberOne, defaultTimestamp],
      transactionHash:
        '0x6422091f26311d0442aa546f3f1444bcc111e361cbd506659f38082b1edab172',
    },
    {
      args: [
        '0xTEST',
        harvestedTwo,
        blockNumberTwo,
        defaultTimestamp.add(1250),
      ],
      transactionHash:
        '0x6422091f26311d0442aa546f3f1444bcc111e361cbd506659f38082b1edab172',
    },
    {
      args: [
        '0xTEST',
        harvestedThree,
        blockNumberThree,
        defaultTimestamp.add(2500),
      ],
      transactionHash:
        '0x30bc2ab3a59f7923ea20f7b99331dbc974130dc8b7152bb897d393fc2c506214',
    },
  ] as HarvestedEvent[];

  // distibution one
  const distributedOne = BigNumber.from('1675665000000');

  // distibution three (skip two)
  const distributedThree = BigNumber.from('1947275665000000');

  const distributions: TreeDistributionEvent[] = [
    {
      args: ['0xBTC', distributedOne, blockNumberOne, defaultTimestamp],
      transactionHash:
        '0x79ac9d3c0acfb293b07d539df3714cd873fc839e572894e346fea91c59b20afb',
    },
    {
      args: [
        '0xBTC',
        distributedThree,
        blockNumberThree,
        defaultTimestamp.add(1250),
      ],
      transactionHash:
        '0x79ac9d3c0acfb293b07d539df3714cd873fc839e572894e346fea91c59b20afb',
    },
  ] as TreeDistributionEvent[];

  const distributionsV15: TreeDistributionEventV15[] = [
    {
      args: ['0xBTC', distributedOne, blockNumberOne, defaultTimestamp],
      transactionHash:
        '0x93286e1f1405cdc8441fe0102dd8663e0d13eea88e032743e287c365cfe290e5',
    },
    {
      args: [
        '0xBTC',
        distributedThree,
        blockNumberThree,
        defaultTimestamp.add(1750),
      ],
      transactionHash:
        '0x93286e1f1405cdc8441fe0102dd8663e0d13eea88e032743e287c365cfe290e5',
    },
  ] as TreeDistributionEventV15[];

  describe('parseHarvestEvents', () => {
    it('converts vault events to typed usable events', async () => {
      const result = await parseHarvestEvents(
        '0x1ccca1ce62c62f7be95d4a67722a8fdbed6eecb4',
        harvests,
        distributions,
      );
      expect(result).toMatchSnapshot();
    });

    it('returns zero for timestamp on getBlock error', async () => {
      harvests.forEach(
        (h, i) =>
          (h.getBlock = async () => {
            if (i % 2 === 1) {
              throw new Error('Expected test error: getBlock');
            }
            return {
              ...block,
              timestamp: block.timestamp + 1250 * i,
            };
          }),
      );
      const result = await parseHarvestEvents(
        '0x1ccca1ce62c62f7be95d4a67722a8fdbed6eecb4',
        harvests,
        distributions,
      );
      expect(result).toMatchSnapshot();
    });
  });

  describe('parseHarvestV15Events', () => {
    it('converts vault events to typed usable events', async () => {
      const result = await parseHarvestV15Events(harvestsV15, distributionsV15);
      expect(result).toMatchSnapshot();
    });
  });

  describe('getVaultVersion', () => {
    it.each([
      ['v1', VaultVersion.v1],
      ['v1.5', VaultVersion.v1_5],
      ['v2', VaultVersion.v2],
      ['v.bad.rc2', VaultVersion.v1],
    ])(
      'evaluates %s as vault version %s',
      (input: string, version: VaultVersion) => {
        expect(getVaultVersion(input)).toEqual(version);
      },
    );
  });

  describe('getVaultState', () => {
    it.each([
      [0, VaultState.Experimental],
      [1, VaultState.Guarded],
      [2, VaultState.Open],
      [-1, VaultState.Experimental],
      [3, VaultState.Experimental],
    ])(
      'evaluates %s as vault state %s',
      (input: number, version: VaultState) => {
        expect(getVaultState(input)).toEqual(version);
      },
    );
  });

  describe('timestampInRange', () => {
    const defaultTimestamp = Date.now();

    it.each([
      [{}, defaultTimestamp, true],
      [{ timestamp_gte: defaultTimestamp }, defaultTimestamp, true],
      [{ timestamp_gte: defaultTimestamp + 1 }, defaultTimestamp, false],
      [{ timestamp_gt: defaultTimestamp - 1 }, defaultTimestamp, true],
      [{ timestamp_gt: defaultTimestamp }, defaultTimestamp, false],
      [{ timestamp_lte: defaultTimestamp }, defaultTimestamp, true],
      [{ timestamp_lte: defaultTimestamp - 1 }, defaultTimestamp, false],
      [{ timestamp_lt: defaultTimestamp + 1 }, defaultTimestamp, true],
      [{ timestamp_lt: defaultTimestamp }, defaultTimestamp, false],
      [
        { timestamp_lte: defaultTimestamp, timestamp_gte: defaultTimestamp },
        defaultTimestamp,
        true,
      ],
      [
        {
          timestamp_lt: defaultTimestamp + 1,
          timestamp_gt: defaultTimestamp - 1,
        },
        defaultTimestamp,
        true,
      ],
      [
        { timestamp_lt: defaultTimestamp + 3, timestamp_gt: defaultTimestamp },
        defaultTimestamp,
        false,
      ],
      [
        { timestamp_lt: defaultTimestamp, timestamp_gt: defaultTimestamp - 3 },
        defaultTimestamp,
        false,
      ],
    ])(
      'evaluates %p options with %d timestamp as %s',
      (options: TimeRangeOptions, timestamp: number, expected: boolean) => {
        expect(timestampInRange(options, timestamp)).toEqual(expected);
      },
    );

    it('throws an error on an invalid time range', () => {
      const upper = defaultTimestamp + 1;
      expect(() => {
        timestampInRange(
          {
            timestamp_gte: upper,
            timestamp_lte: defaultTimestamp,
          },
          defaultTimestamp,
        );
      }).toThrow(
        `Invalid time range check requested (${upper} - ${defaultTimestamp})`,
      );
    });
  });

  describe('loadVaultPerformanceEvents', () => {
    it('loads recent vault harvests and tree distributions', async () => {
      const testStrategy = Strategy__factory.connect(
        '0x1ccca1ce62c62f7be95d4a67722a8fdbed6eecb4',
        new ethers.providers.JsonRpcProvider(''),
      );
      jest
        .spyOn(testStrategy, 'queryFilter')
        .mockImplementation(async (filter) => {
          if (!filter.topics || typeof filter.topics === 'string') {
            return [];
          }
          const topic = filter.topics[0];
          if (
            topic ===
            '0x6c8433a8e155f0af04dba058d4e4695f7da554578963d876bdf4a6d8d6399d9c'
          ) {
            return harvests;
          }
          return distributions;
        });
      const result = await loadVaultPerformanceEvents(
        '0x1ccca1ce62c62f7be95d4a67722a8fdbed6eecb4',
        testStrategy,
        {
          startBlock: 0,
          endBlock: 100,
        },
      );
      expect(result).toMatchSnapshot();
    });

    it('loads no events if not available', async () => {
      const testStrategy = Strategy__factory.connect(
        '0x1ccca1ce62c62f7be95d4a67722a8fdbed6eecb4',
        new ethers.providers.JsonRpcProvider(''),
      );
      jest
        .spyOn(testStrategy, 'queryFilter')
        .mockImplementation(async () => []);
      const result = await loadVaultPerformanceEvents(
        '0x1ccca1ce62c62f7be95d4a67722a8fdbed6eecb4',
        testStrategy,
        {
          startBlock: 0,
          endBlock: 100,
        },
      );
      expect(result).toMatchSnapshot();
    });
  });

  describe('loadVaultV15PerformanceEvents', () => {
    it('loads recent vault harvests and tree distributions', async () => {
      const testVault = VaultV15__factory.connect(
        '0x1ccca1ce62c62f7be95d4a67722a8fdbed6eecb4',
        new ethers.providers.JsonRpcProvider(''),
      );
      jest
        .spyOn(testVault, 'queryFilter')
        .mockImplementation(async (filter) => {
          if (!filter.topics || typeof filter.topics === 'string') {
            return [];
          }
          const topic = filter.topics[0];
          if (
            topic ===
            '0xe48bba143e2a0b557fa6f3234bd6ffc704518cc98c7de6a2385549fae27d1b75'
          ) {
            return harvestsV15;
          }
          return distributionsV15;
        });
      const result = await loadVaultV15PerformanceEvents(testVault, {
        startBlock: 0,
        endBlock: 100,
      });
      expect(result).toMatchSnapshot();
    });

    it('loads no events if not available', async () => {
      const testVault = VaultV15__factory.connect(
        '0x1ccca1ce62c62f7be95d4a67722a8fdbed6eecb4',
        new ethers.providers.JsonRpcProvider(''),
      );
      jest.spyOn(testVault, 'queryFilter').mockImplementation(async () => []);
      const result = await loadVaultV15PerformanceEvents(testVault, {
        startBlock: 0,
        endBlock: 100,
      });
      expect(result).toMatchSnapshot();
    });
  });
});
