import { TokenValue } from './token-value.interface';

export interface TokenRate extends TokenValue {
  apr: number;
}
