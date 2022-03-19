import { TokenBalance } from '../../tokens';

export interface TokenValue extends TokenBalance {
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  balance: number;
  value: number;
}
