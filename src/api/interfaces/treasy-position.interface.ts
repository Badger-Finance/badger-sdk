import { Protocol, TokenValue } from '..';

export interface TreasuryPosition extends TokenValue {
  protocol: Protocol | string;
  apr: number;
}
