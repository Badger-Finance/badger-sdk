import { VaultHarvestEvent, VaultTreeDistributionEvent } from '.';
import { HarvestEvent, TreeDistributionEvent } from '../contracts/Strategy';

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
  harvestEventsWithTimestamps: VaultHarvestEvent[];
  treeDistributionEventWithTimestamps: VaultTreeDistributionEvent[];
}> {
  const harvestEventsWithTimestamps = await Promise.all(
    harvestEvents.map(async (event) => {
      try {
        const block = await event.getBlock();
        return {
          timestamp: block.timestamp,
          block: block.number,
          harvested: event.args[0],
        };
      } catch (err) {
        console.log(err);
        return {
          // consider a better idea here
          timestamp: Date.now() / 1000,
          block: event.blockNumber,
          harvested: event.args[0],
        };
      }
    }),
  );
  const treeDistributionEventWithTimestamps = treeDistributionEvents.map(
    (e) => ({
      timestamp: Number(e.args[3].toString()),
      block: e.args[2].toNumber(),
      token: e.args[0],
      amount: e.args[1],
    }),
  );
  return {
    harvestEventsWithTimestamps,
    treeDistributionEventWithTimestamps,
  };
}
