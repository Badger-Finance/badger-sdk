import { BigNumber } from 'ethers';

import { keyBy, VaultState } from '..';
import { TimeRangeOptions } from '../common';
import { RangeOptions } from '../common/interfaces/range-options.interface';
import { VaultV15 } from '../contracts';
import {
  HarvestEvent,
  HarvestEventFilter,
  Strategy,
  TreeDistributionEvent,
} from '../contracts/Strategy';
import {
  HarvestedEvent,
  HarvestedEventFilter,
  TreeDistributionEvent as TreeDistributionEventV15,
  TreeDistributionEventFilter,
} from '../contracts/VaultV15';
import { chunkQueryFilter } from '../utils/chunk-query-filter';
import {
  VaultHarvestData,
  VaultPerformanceEvent,
  VaultStatus,
  VaultVersion,
} from '.';
import { vaultToChainEnumStateList } from './vautls.constants';

/**
 * Parse Vault v1 harvest related events.
 * @param harvestEvents Vault Harvest events
 * @param treeDistributionEvents Vault TreeDsitribution events
 * @returns Parsed harvest and distrubtion events with timestamps
 */
export async function parseHarvestEvents(
  token: string,
  harvestEvents: HarvestEvent[],
  treeDistributionEvents: TreeDistributionEvent[],
): Promise<{
  harvests: VaultPerformanceEvent[];
  distributions: VaultPerformanceEvent[];
}> {
  const harvests = await Promise.all(
    harvestEvents.map(async (e) => {
      try {
        const block = await e.getBlock();
        return {
          timestamp: block.timestamp,
          block: e.args[1].toNumber(),
          amount: e.args[0],
          token,
        };
      } catch (err) {
        console.log(err);
        return {
          timestamp: 0,
          block: e.args[1].toNumber(),
          amount: e.args[0],
          token,
        };
      }
    }),
  );
  const distributions = treeDistributionEvents.map((e) => ({
    timestamp: e.args[3].toNumber(),
    block: e.args[2].toNumber(),
    token: e.args[0],
    amount: e.args[1],
  }));
  return {
    harvests,
    distributions,
  };
}

/**

 * Parse Vault v1.5 harvest related events.
 * @param harvestEvents Vault Harvest events
 * @param treeDistributionEvents Vault TreeDsitribution events
 * @returns Parsed harvest and distrubtion events
 */
export async function parseHarvestV15Events(
  harvestEvents: HarvestedEvent[],
  treeDistributionEvents: TreeDistributionEventV15[],
): Promise<{
  harvests: VaultPerformanceEvent[];
  distributions: VaultPerformanceEvent[];
}> {
  const harvests = harvestEvents.map((e) => ({
    timestamp: e.args[3].toNumber(),
    block: e.args[2].toNumber(),
    amount: e.args[1],
    token: e.args[0],
  }));
  const distributions = treeDistributionEvents.map((e) => ({
    timestamp: e.args[3].toNumber(),
    block: e.args[2].toNumber(),
    token: e.args[0],
    amount: e.args[1],
  }));
  return {
    harvests,
    distributions,
  };
}

/**
 * Convert on chain string to vault version enumeration.
 * @param version On chain version
 * @returns Vault version enumeration
 */
export function getVaultVersion(version: string): VaultVersion {
  switch (version) {
    case VaultVersion.v2:
      return VaultVersion.v2;
    case VaultVersion.v1_5:
      return VaultVersion.v1_5;
    default:
      return VaultVersion.v1;
  }
}

/**
 * Convert on chain state to vault state enumeration.
 * @param status On chain state
 * @returns Vault state enumeration
 */
export function getVaultState(status: number): VaultState {
  switch (status) {
    case 2:
      return VaultState.Open;
    case 1:
      return VaultState.Guarded;
    default:
      return VaultState.Experimental;
  }
}

/**
 * Convert on chain state to vault state enumeration for v2 registry
 * @param status On chain state
 * @returns Vault state enumeration
 */
export function getVaultRegv2State(status: number): VaultState {
  return vaultToChainEnumStateList[status] || VaultState.Discontinued;
}

export function apiVaultStatusToChainValue(status: VaultState): BigNumber {
  return BigNumber.from(
    vaultToChainEnumStateList.indexOf(status) || VaultStatus.deprecated,
  );
}

export function timestampInRange(
  options: TimeRangeOptions,
  timestamp: number,
): boolean {
  const { timestamp_gt, timestamp_gte, timestamp_lt, timestamp_lte } = options;

  let lowerBound = 0;
  let upperBound = Number.MAX_SAFE_INTEGER;
  if (timestamp_gt) {
    lowerBound = timestamp_gt + 1;
  }
  if (timestamp_gte) {
    lowerBound = timestamp_gte;
  }
  if (timestamp_lt) {
    upperBound = timestamp_lt - 1;
  }
  if (timestamp_lte) {
    upperBound = timestamp_lte;
  }

  if (lowerBound > upperBound) {
    throw new Error(
      `Invalid time range check requested (${lowerBound} - ${upperBound})`,
    );
  }

  return timestamp >= lowerBound && timestamp <= upperBound;
}

export async function loadVaultPerformanceEvents<T extends RangeOptions>(
  token: string,
  strategy: Strategy,
  options: T,
): Promise<{ data: VaultHarvestData[] }> {
  const harvestFilter = strategy.filters.Harvest();
  const treeDistributionFilter = strategy.filters.TreeDistribution();

  // Get harvest and tree distributions for given time range filter
  const [allHarvestEvents, allTreeDistributionEvents] = await Promise.all([
    chunkQueryFilter<Strategy, HarvestEventFilter, HarvestEvent>(
      strategy,
      harvestFilter,
      options.startBlock,
      options.endBlock,
    ),
    chunkQueryFilter<
      Strategy,
      TreeDistributionEventFilter,
      TreeDistributionEvent
    >(strategy, treeDistributionFilter, options.startBlock, options.endBlock),
  ]);

  const { harvests, distributions } = await parseHarvestEvents(
    token,
    allHarvestEvents,
    allTreeDistributionEvents,
  );

  return evaluateEvents(harvests, distributions, options);
}

export async function loadVaultV15PerformanceEvents<T extends RangeOptions>(
  vault: VaultV15,
  options: T,
): Promise<{ data: VaultHarvestData[] }> {
  const harvestFilter = vault.filters.Harvested();
  const treeDistributionFilter = vault.filters.TreeDistribution();

  // Get harvest and tree distributions for given time range filter
  const [allHarvestEvents, allTreeDistributionEvents] = await Promise.all([
    chunkQueryFilter<VaultV15, HarvestedEventFilter, HarvestedEvent>(
      vault,
      harvestFilter,
      options.startBlock,
      options.endBlock,
    ),
    chunkQueryFilter<
      VaultV15,
      TreeDistributionEventFilter,
      TreeDistributionEventV15
    >(vault, treeDistributionFilter, options.startBlock, options.endBlock),
  ]);

  const { harvests, distributions } = await parseHarvestV15Events(
    allHarvestEvents,
    allTreeDistributionEvents,
  );

  return evaluateEvents(harvests, distributions, options);
}

export function evaluateEvents<T extends TimeRangeOptions>(
  vaultHarvests: VaultPerformanceEvent[],
  vaultDistributions: VaultPerformanceEvent[],
  options: T,
): { data: VaultHarvestData[] } {
  const harvestEvents = vaultHarvests.filter((h) =>
    timestampInRange(options, h.timestamp),
  );
  const treeDistributionEvents = vaultDistributions.filter((d) =>
    timestampInRange(options, d.timestamp),
  );

  const harvestEventsByTimestamps = keyBy(
    harvestEvents,
    (harvestEvent) => harvestEvent.timestamp,
  );
  const treeDistributionEventsByTimestamps = keyBy(
    treeDistributionEvents,
    (treeDistributionEvent) => treeDistributionEvent.timestamp,
  );

  // Create timestamps for events
  const harvestEventsTimestamps = Array.from(harvestEventsByTimestamps.keys());
  const treeDistributionEventsTimestamps = Array.from(
    treeDistributionEventsByTimestamps.keys(),
  );
  const timestamps = Array.from(
    new Set([...harvestEventsTimestamps, ...treeDistributionEventsTimestamps]),
  ).sort();

  const data = [];
  // Map timestamps to events
  for (const timestamp of timestamps) {
    const harvests = harvestEventsByTimestamps.get(timestamp) ?? [];
    const treeDistributions =
      treeDistributionEventsByTimestamps.get(timestamp) ?? [];
    data.push({
      timestamp,
      harvests,
      treeDistributions,
    });
  }

  return {
    data,
  };
}
