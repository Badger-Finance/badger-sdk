import { TokenValue } from './token-value.interface';

export interface VaultData {
  address: string;
  name: string;
  symbol: string;
  pricePerFullShare: number;
  balance: number;
  value: number;
  earnedBalance: number;
  earnedValue: number;
  depositedBalance: number;
  withdrawnBalance: number;
  tokens: TokenValue[];
  earnedTokens: TokenValue[];
}
