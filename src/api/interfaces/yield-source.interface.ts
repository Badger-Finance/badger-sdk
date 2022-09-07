import { YieldSummary } from './yield-summary.interface';

export interface YieldSource {
  name: string;
  performance: YieldSummary;
  boostable: boolean;
}
