import { GovernanceProposalAction } from './governance-proposal-action.interface';
import { GovernanceProposalsDispute } from './governance-proposals-dispute.interface';
import { GovernanceProposalsStatus } from './governance-proposals-status.interface';

export interface GovernanceProposal {
  proposalId: string;
  createdAt: number;
  contractAddr: string;
  readyTime: number;
  currentStatus: string;
  creationBlock: number;
  updateBlock: number;
  statuses: GovernanceProposalsStatus[];
  disputes: GovernanceProposalsDispute[];
  actions: GovernanceProposalAction[];
}
