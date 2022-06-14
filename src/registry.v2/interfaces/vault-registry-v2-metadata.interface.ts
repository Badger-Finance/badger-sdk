export interface VaultRegistryV2Metadata {
  name?: string;
  protocol?: string;
  behavior?: string;
  client?: string;
  [other: string]: string | undefined;
}
