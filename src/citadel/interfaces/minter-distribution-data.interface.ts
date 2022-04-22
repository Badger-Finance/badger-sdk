import { MinterDistributionEvent } from './minter-distribution-event.interface';

export interface MinterDistributionData {
  [timestamp: string]: MinterDistributionEvent[];
}
