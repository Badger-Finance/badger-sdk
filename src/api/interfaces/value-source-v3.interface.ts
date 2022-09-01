import { YieldSummary } from './yield-summary.interface';

export interface ValueSourceV3 {
  name: string;
  apr: YieldSummary;
  boostable: boolean;
}
