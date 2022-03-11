export interface EmissionSchedule {
  beneficiary: string;
  token: string;
  amount: number;
  start: number;
  end: number;
  compPercent: number;
}
