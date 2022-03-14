import { VaultHarvestEvent, VaultTreeDistributionEvent } from '.';

export interface VaultHarvestData {
  timestamp: number;
  harvests: VaultHarvestEvent[];
  treeDistributions: VaultTreeDistributionEvent[];
}
