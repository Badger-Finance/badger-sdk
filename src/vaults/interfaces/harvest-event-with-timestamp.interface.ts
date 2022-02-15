import { BigNumber } from '@ethersproject/bignumber';
import { HarvestEvent } from '../../contracts/Strategy';

export interface HarvestEventWithTimestamp extends HarvestEvent {
  timestamp: BigNumber;
}
