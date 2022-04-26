import { ListRewardsEvent } from '../../citadel/interfaces';

export interface CitadelRewardEvent extends Omit<ListRewardsEvent, 'reward'> {
  amount: number;
}
