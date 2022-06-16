import { Block } from '@ethersproject/abstract-provider';

import { TimeRangeOptions } from '../common';
import { TypedEvent } from '../contracts/common';
import { keyBy } from '../utils';
import { timestampInRange } from '../vaults/vaults.utils';
import { MinterDistributionData } from './interfaces/minter-distribution-data.interface';
import { MinterDistributionEvent } from './interfaces/minter-distribution-event.interface';

export function parseTypedEvents<T extends TypedEvent, R>(
  events: T[],
  formatter: (event: T, block: Block) => R,
): Promise<R[]> {
  return Promise.all(
    events.map(async (e) => {
      const block = await e.getBlock();

      return formatter(e, block);
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
