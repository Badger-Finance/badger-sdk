import { VaultHarvestEvent, VaultTreeDistributionEvent } from '.';
import { HarvestEvent, TreeDistributionEvent } from '../contracts/Strategy';

/**
 * Parse Vault v1 harvest related events.
 * @param harvestEvents Vault Harvest events
 * @param treeDistributionEvents Vault TreeDsitribution events
 * @returns
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
      const block = await event.getBlock();
      return {
        timestamp: block.timestamp,
        block: block.number,
        harvested: event.args[0],
      };
    }),
  );
  const treeDistributionEventWithTimestamps = treeDistributionEvents.map(
    (e) => ({
      timestamp: Number(e.args[3].toString()),
      block: e.blockNumber,
      token: e.args[0],
      amount: e.args[1],
    }),
  );
  return {
    harvestEventsWithTimestamps,
    treeDistributionEventWithTimestamps,
  };
}
