import { YieldSource } from './yield-source.interface';
import { YieldSummary } from './yield-summary.interface';

export interface VaultYieldSummary extends YieldSummary {
  sources: YieldSource[];
}
