import { YieldSummary } from './yield-summary.interface';

export interface ValueSource {
  name: string;
  apr: YieldSummary;
  boostable: boolean;
}
