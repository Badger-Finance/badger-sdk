import { GovernanceProposal } from './governance-proposal.interface';

export interface GovernanceProposalsList {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: GovernanceProposal[];
}
