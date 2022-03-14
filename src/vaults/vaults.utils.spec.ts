import { parseHarvestEvents } from "./vaults.utils";
import { HarvestEvent, TreeDistributionEvent } from '../contracts/Strategy';
import { BigNumber } from "@ethersproject/bignumber";

describe('vaults.utils', () => {
  describe('parseHarvestEvents', () => {
    it('converts vault events to typed usable events', () => {
      const harvests: HarvestEvent[] = [{
        args: {
          [BigNumber.from('1647275665000000'), BigNumber.from('1647275665')],
          harvested: BigNumber.from('1647275665000000'),
          blockNumber: BigNumber.from('1647275665'), 
        },
      }];
      const distributions = [];
      const result = parseHarvestEvents(harvests, distributions);
    });
  });
});