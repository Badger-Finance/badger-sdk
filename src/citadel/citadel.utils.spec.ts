import { CitadelDistributionToStakingEvent } from '../contracts/CitadelMinter';
import { evaluateDistributionEvents, parseTypedEvents } from './citadel.utils';
import { distributionFormattedEvents } from './mocks/distribution-formatted-events.mock';
import { citadelDistributionToStakingEvents } from './mocks/distribution-to-staking-events.mock';

// TypedEvents require to implement all the methods in interface,
// so we ignore mocks for testing purposes

describe('parseTypedEvents', () => {
  it('should give formatted events', async () => {
    expect(
      await parseTypedEvents(
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        citadelDistributionToStakingEvents,
        (e, b) => ({
          block: b.number,
          startTime: e.args[0].toNumber(),
          endTime: e.args[1].toNumber(),
          citadelAmount: e.args[2],
        }),
      ),
    ).toMatchSnapshot();
  });

  it('should return empty list', async () => {
    expect(
      (
        await parseTypedEvents(
          <CitadelDistributionToStakingEvent[]>[],
          (e, b) => ({
            block: b.number,
            startTime: e.args[0].toNumber(),
            endTime: e.args[1].toNumber(),
            citadelAmount: e.args[2],
          }),
        )
      ).length,
    ).toBe(0);
  });
});

describe('evaluateDistributionEvents', () => {
  it('should map events by timestamp', () => {
    expect(
      evaluateDistributionEvents(distributionFormattedEvents, {}),
    ).toMatchSnapshot();
  });

  it('should map events by timestamp, and filter them', () => {
    expect(
      evaluateDistributionEvents(distributionFormattedEvents, {
        timestamp_gte: 1650712126545,
      }),
    ).toMatchSnapshot();
  });

  it('should return empty list', () => {
    expect(Object.keys(evaluateDistributionEvents([], {})).length).toBe(0);
  });
});
