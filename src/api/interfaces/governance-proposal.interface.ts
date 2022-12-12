import { GovernanceProposalChild } from './governance-proposal-child.interface';
import { GovernanceProposalsDecodedData } from './governance-proposals-decoded-data.interface';
import { GovernanceProposalsDispute } from './governance-proposals-dispute.interface';
import { GovernanceProposalsStatus } from './governance-proposals-status.interface';

export interface GovernanceProposal {
  proposalId: string;
  createdAt: number;
  contractAddr: string;
  targetAddr: string;
  value: number;
  callData: string;
  decodedCallData: GovernanceProposalsDecodedData;
  readyTime: number;
  sender: string;
  currentStatus: string;
  creationBlock: number;
  transactionHash: string;
  updateBlock: number;
  statuses: GovernanceProposalsStatus[];
  disputes: GovernanceProposalsDispute[];
  children: GovernanceProposalChild[];
}
