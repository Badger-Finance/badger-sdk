import { GovernanceProposalsDecodedData } from './governance-proposals-decoded-data.interface';
import { GovernanceProposalsStatus } from './governance-proposals-status.interface';

export interface GovernanceProposalChild {
  index: number;
  value: number;
  callData: string;
  decodedCallData: GovernanceProposalsDecodedData | null;
  targetAddr: string;
  transactionHash: string;
  predecessor: string;
  executed: GovernanceProposalsStatus;
  sender: string;
}
