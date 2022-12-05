import { GovernanceProposalsStatus } from './governance-proposals-status.interface';

export interface GovernanceProposalChild {
  index: number;
  value: number;
  callData: string;
  decodedCallData: string | null;
  targetAddr: string;
  transactionHash: string;
  predecessor: string;
  executed: GovernanceProposalsStatus[];
  sender: string;
}
