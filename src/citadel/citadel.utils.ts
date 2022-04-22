import { CitadelDistributionToStakingEvent } from '../contracts/CitadelMinter';
import { MinterDistributionEvent } from './interfaces/minter-distribution-event.interface';
import { TimeRangeOptions } from '../common';
import { MinterDistributionData } from './interfaces/minter-distribution-data.interface';
import { timestampInRange } from '../vaults/vaults.utils';
import { keyBy } from '../utils';
import { ListRewardsEvent } from './interfaces/list-rewards-event.interface';
import {
  RewardAddedEvent,
  RewardPaidEvent,
} from '../contracts/StakedCitadelLocker';

export function parseDistributionsEvents(
  events: CitadelDistributionToStakingEvent[],
): Promise<MinterDistributionEvent[]> {
  return Promise.all(
    events.map(async (e) => {
      const block = await e.getBlock();

      return {
        block: block.number,
        startTime: e.args[0].toNumber(),
        endTime: e.args[1].toNumber(),
        citadelAmount: e.args[2],
      };
    }),
  );
}

export function evaluateDistributionEvents<T extends TimeRangeOptions>(
  events: MinterDistributionEvent[],
  options: T,
): MinterDistributionData {
  const filteredEvents = events.filter((h) =>
    timestampInRange(options, h.startTime),
  );

  const distTimeMap = keyBy(filteredEvents, (event) => event.startTime);

  const timestamps = Array.from(new Set([...distTimeMap.keys()])).sort();

  const distTimeOrderedMap: MinterDistributionData = {};

  for (const time of timestamps) {
    distTimeOrderedMap[`${time}`] = distTimeMap.get(time) ?? [];
  }

  return distTimeOrderedMap;
}

export function parseAddedRewardEvents(
  events: RewardAddedEvent[],
): Promise<ListRewardsEvent[]> {
  return Promise.all(
    events.map(async (e) => {
      const block = await e.getBlock();

      return {
        block: block.number,
        token: e.args[0],
        reward: e.args[1],
      };
    }),
  );
}

export function parsePaidRewardEvents(
  events: RewardPaidEvent[],
): Promise<ListRewardsEvent[]> {
  return Promise.all(
    events.map(async (e) => {
      const block = await e.getBlock();

      return {
        block: block.number,
        user: e.args[0],
        token: e.args[1],
        reward: e.args[2],
      };
    }),
  );
}
