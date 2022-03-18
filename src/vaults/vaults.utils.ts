import { VaultHarvestData, VaultPerformanceEvent, VaultVersion } from '.';
import { keyBy, VaultState } from '..';
import { TimeRangeOptions } from '../common';
import { VaultV15 } from '../contracts';
import {
  HarvestEvent,
  Strategy,
  TreeDistributionEvent,
} from '../contracts/Strategy';
import {
  HarvestedEvent,
  TreeDistributionEvent as TreeDistributionEventV15,
} from '../contracts/VaultV15';

/**
 * Parse Vault v1 harvest related events.
 * @param harvestEvents Vault Harvest events
 * @param treeDistributionEvents Vault TreeDsitribution events
 * @returns Timestamp aggregated vault harvest and tree distribution events.
 */
export async function parseHarvestEvents(
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
          block: block.number,
          amount: e.args[0],
          token: '',
        };
      } catch (err) {
        console.log(err);
        return {
          // consider a better idea here
          timestamp: Date.now() / 1000,
          block: e.blockNumber,
          amount: e.args[0],
          token: '',
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

export function timestampInRange(
  options: TimeRangeOptions,
  timestamp: number,
): boolean {
  const { timestamp_gt, timestamp_gte, timestamp_lt, timestamp_lte } = options;

  if (timestamp_gt && timestamp <= timestamp_gt) {
    return false;
  }
  if (timestamp_gte && timestamp < timestamp_gte) {
    return false;
  }
  if (timestamp_lt && timestamp >= timestamp_lt) {
    return false;
  }
  if (timestamp_lte && timestamp > timestamp_lte) {
    return false;
  }

  return true;
}

export async function loadVaultPerformanceEvents<T extends TimeRangeOptions>(
  strategy: Strategy,
  options: T,
): Promise<{ data: VaultHarvestData[] }> {
  const harvestFilter = strategy.filters.Harvest();
  const treeDistributionFilter = strategy.filters.TreeDistribution();

  // Get harvest and tree distributions for given time range filter
  const [allHarvestEvents, allTreeDistributionEvents] = await Promise.all([
    strategy.queryFilter(harvestFilter),
    strategy.queryFilter(treeDistributionFilter),
  ]);

  const { harvests, distributions } = await parseHarvestEvents(
    allHarvestEvents,
    allTreeDistributionEvents,
  );

  return evaluateEvents(harvests, distributions, options);
}

export async function loadVaultV15PerformanceEvents<T extends TimeRangeOptions>(
  vault: VaultV15,
  options: T,
): Promise<{ data: VaultHarvestData[] }> {
  const harvestFilter = vault.filters.Harvested();
  const treeDistributionFilter = vault.filters.TreeDistribution();

  // Get harvest and tree distributions for given time range filter
  const [allHarvestEvents, allTreeDistributionEvents] = await Promise.all([
    vault.queryFilter(harvestFilter),
    vault.queryFilter(treeDistributionFilter),
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
