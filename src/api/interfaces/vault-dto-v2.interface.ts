import { ValueSource, VaultDTO, VaultYieldProjectionV2 } from '.';

export interface VaultDTOV2 extends VaultDTO {
  apr: number;
  apy: number;
  maxApr: number;
  maxApy: number;
  minApr: number;
  minApy: number;
  sources: ValueSource[];
  sourcesApy: ValueSource[];
  yieldProjection: VaultYieldProjectionV2;
}
