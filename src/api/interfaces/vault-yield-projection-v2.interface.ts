import { ValueSource, VaultYieldProjection } from '.';

export interface VaultYieldProjectionV2 extends VaultYieldProjection {
  nonHarvestSources: ValueSource[];
  nonHarvestSourcesApy: ValueSource[];
}
