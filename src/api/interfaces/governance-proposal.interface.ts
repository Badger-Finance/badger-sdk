import { GovernanceProposalChild } from './governance-proposal-child.interface';
import { GovernanceProposalsDispute } from './governance-proposals-dispute.interface';
import { GovernanceProposalsStatus } from './governance-proposals-status.interface';

export interface GovernanceProposal {
  proposalId: string;
  createdAt: string;
  contractAddr: string;
  targetAddr: string;
  value: string;
  callData: string;
  readyTime: string;
  sender: string;
  currentStatus: string;
  creationBlock: string;
  updateBlock: string;
  statuses: GovernanceProposalsStatus[];
  disputes: GovernanceProposalsDispute[];
  children: GovernanceProposalChild[];
}
