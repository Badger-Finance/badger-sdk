import { UserBoostData } from './user-boost-data.interface';

export interface LeaderBoardData {
  data: UserBoostData[];
  page: number;
  size: number;
  count: number;
  maxPage: number;
}
