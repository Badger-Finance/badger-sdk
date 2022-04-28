export interface CitadelMerkleClaim {
  account: string;
  protocols: string[];
  proof: string[];
  node: string;
}

export interface CitadelMerkleDistribution {
  merkleRoot: string;
  totalAccounts: number;
  cycle: number;
  claims: Record<string, CitadelMerkleClaim>;
}
