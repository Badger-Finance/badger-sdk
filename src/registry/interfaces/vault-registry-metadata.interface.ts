export interface VaultRegistryMetadata {
  name: string;
  protocol: string;
  behavior: string;
  client?: string;
  [other: string]: string | undefined;
}
