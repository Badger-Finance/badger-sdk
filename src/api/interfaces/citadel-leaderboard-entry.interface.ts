import { Protocol } from '../enums';

export interface CitadelLeaderboardEntry {
  rank: number;
  knight: Protocol;
  votes: number;
  voteWeight: number;
  users: number;
  funding: number;
}
