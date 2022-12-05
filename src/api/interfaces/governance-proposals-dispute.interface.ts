export interface GovernanceProposalsDispute {
  name: string;
  ruling: boolean | null;
  sender: string;
  status: string;
  data: string | null;
  transactionHash: string;
  blockNumber: number;
  updatedAt: number;
}
