import { VaultPerformanceEvent } from '.';

export interface VaultHarvestData {
  timestamp: number;
  harvests: VaultPerformanceEvent[];
  treeDistributions: VaultPerformanceEvent[];
}
