import { VaultYieldProjection, YieldSource } from '.';

export interface VaultYieldProjectionV3 extends VaultYieldProjection {
  nonHarvestSources: YieldSource[];
  nonHarvestSourcesApy: YieldSource[];
}
