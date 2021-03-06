import { BaseContract, Event } from 'ethers';

export const RPC_CHUNK_LIMIT = 10_000;

export async function chunkQueryFilter<
  C extends BaseContract,
  F,
  R extends Event,
>(contract: C, filters: F, startBlock: number, endBlock: number): Promise<R[]> {
  let allEvents: R[] = [];

  for (let i = startBlock; i < endBlock; i += RPC_CHUNK_LIMIT) {
    const _startBlock = i;
    const _endBlock = Math.min(endBlock, i + (RPC_CHUNK_LIMIT - 1));

    const events = await contract.queryFilter(filters, _startBlock, _endBlock);

    allEvents = [...(allEvents || []), ...(<R[]>events)];
  }

  if (!allEvents) return [];

  return allEvents;
}
