import { Protocol } from '../enums';

export interface CitadelLeaderboardEntry {
  funding: number;
  knight: Protocol;
  rank: number;
  users: number;
  voteAmount: number;
  voteWeight: number;
}
