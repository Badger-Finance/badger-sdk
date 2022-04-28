import { CitadelMerkleClaim } from './merkle-proof.interface';

export interface CitadelMerkleDistribution {
  merkleRoot: string;
  totalAccounts: number;
  cycle: number;
  claims: Record<string, CitadelMerkleClaim>;
}
