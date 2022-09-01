import { YieldSummary } from './yield-summary.interface';

export interface YieldSource {
  name: string;
  yield: YieldSummary;
  boostable: boolean;
}
