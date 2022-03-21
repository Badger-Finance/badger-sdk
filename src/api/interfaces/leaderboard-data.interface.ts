import { UserBoostData } from './user-boost-data.interface';

export interface LeaderBoardData {
  count: number;
  data: UserBoostData[];
  maxPage: number;
  page: number;
  size: number;
}
