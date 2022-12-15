import { GovernanceProposalsDecodedData } from './governance-proposals-decoded-data.interface';

export interface GovernanceProposalAction {
  index: number;
  value: number;
  callData: string;
  decodedCallData: GovernanceProposalsDecodedData | null;
  targetAddr: string;
  transactionHash: string;
  predecessor: string;
  executed: string;
  sender: string;
}
