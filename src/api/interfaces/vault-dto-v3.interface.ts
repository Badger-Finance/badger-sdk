import { VaultDTO, VaultYieldProjectionV3 } from '.';
import { VaultYieldSummary } from './vault-yield-summary.interface';

export interface VaultDTOV3 extends VaultDTO {
  address: string;
  apr: VaultYieldSummary;
  apy: VaultYieldSummary;
  yieldProjection: VaultYieldProjectionV3;
}
