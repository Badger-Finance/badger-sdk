export type PriceSnapshots = {
  [token: string]: {
    [timestamp: number]: number;
  };
};
