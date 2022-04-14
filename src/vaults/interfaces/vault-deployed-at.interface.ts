export interface VaultDeployedAtMap {
  [chain: string]: {
    [address: string]: number;
  };
}
