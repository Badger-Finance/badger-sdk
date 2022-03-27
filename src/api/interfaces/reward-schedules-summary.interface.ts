import { EmissionSchedule } from '../../rewards';

export interface RewardSchedulesSummary {
  [address: string]: EmissionSchedule[];
}
