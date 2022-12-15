import { BigNumber } from 'ethers';
import { RawAbiDefinition } from 'typechain';

export type decodedParams =
  | BigNumber
  | number
  | string
  | boolean
  | never
  | decodedParams[];

export interface GovernanceProposalsDecodedData {
  name: string;
  signatureHash: string;
  inputTypes: RawAbiDefinition['inputs'];
  decodedParams: decodedParams[];
}
