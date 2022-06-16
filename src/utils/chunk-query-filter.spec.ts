import { mock, MockProxy } from 'jest-mock-extended';

import { CitadelMinter } from '../contracts';
import { chunkQueryFilter, RPC_CHUNK_LIMIT } from './chunk-query-filter';

describe('chunkQueryFilter', () => {
  let minter: MockProxy<CitadelMinter>;

  beforeEach(async () => {
    minter = mock<CitadelMinter>();

    mock(minter.filters)
      .CitadelDistributionToStaking.calledWith()
      .mockImplementation();
  });

  it('should chunk query properly', async () => {
    let lastQueryBlock!: number;

    const asyncMock = async (
      _: never,
      startBlock: number,
      endBlock: number,
    ) => {
      if (startBlock >= 2 * RPC_CHUNK_LIMIT - 1000) {
        lastQueryBlock = endBlock;
        return [{ n: 2 }, { n: 3 }];
      }
      if (startBlock >= RPC_CHUNK_LIMIT) return [{ n: 1 }];
      if (startBlock >= 0) return [{ n: 0 }];

      return [{ n: Infinity }];
    };
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    minter.queryFilter.calledWith().mockImplementation(asyncMock);

    const endBlock = 3 * RPC_CHUNK_LIMIT - 500;

    const events = await chunkQueryFilter(
      minter,
      minter.filters.CitadelDistributionToStaking(),
      0,
      endBlock,
    );

    expect(events.length).toBe(4);
    expect(lastQueryBlock).toBe(endBlock);
    expect(minter.queryFilter).toHaveBeenCalledTimes(3);
  });

  it('should return empty array when no events', async () => {
    const asyncMock = async () => [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    minter.queryFilter.calledWith().mockImplementation(asyncMock);

    const endBlock = 3 * RPC_CHUNK_LIMIT - 500;

    const events = await chunkQueryFilter(
      minter,
      minter.filters.CitadelDistributionToStaking(),
      0,
      endBlock,
    );

    expect(events.length).toBe(0);
    expect(minter.queryFilter).toHaveBeenCalledTimes(3);
  });

  it('should return empty array when start block > end block', async () => {
    const asyncMock = async () => [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    minter.queryFilter.calledWith().mockImplementation(asyncMock);

    const endBlock = 3 * RPC_CHUNK_LIMIT - 500;

    const events = await chunkQueryFilter(
      minter,
      minter.filters.CitadelDistributionToStaking(),
      endBlock,
      0,
    );

    expect(events.length).toBe(0);
    expect(minter.queryFilter).toHaveBeenCalledTimes(0);
  });
});
