import { YieldType } from '../enums/yield-type.enum';

export interface YieldEvent {
  amount: number;
  apr: number;
  balance: number;
  block: number;
  earned: number;
  duration: number;
  grossApr: number;
  timestamp: number;
  token: string;
  type: YieldType;
  value: number;
  tx: string;
}
