import { parseHarvestEvents } from './vaults.utils';
import { HarvestEvent, TreeDistributionEvent } from '../contracts/Strategy';
import { BigNumber, ethers } from 'ethers';

describe('vaults.utils', () => {
  describe('parseHarvestEvents', () => {
    it('converts vault events to typed usable events', async () => {
      const defaultTimestamp = '1647284957';
      const block = {
        hash: '',
        parentHash: '',
        number: 1_000_000,
        timestamp: Number(defaultTimestamp),
        nonce: '',
        difficulty: 0,
        _difficulty: BigNumber.from('0'),
        gasLimit: ethers.constants.Zero,
        gasUsed: ethers.constants.Zero,
        miner: '',
        extraData: '',
        transactions: [],
      };

      // harvest one
      const harvestedOne = BigNumber.from('1647275665000000');
      const blockNumberOne = BigNumber.from('1647275665');

      // harvest two
      const harvestedTwo = BigNumber.from('1447275665000000');
      const blockNumberTwo = BigNumber.from('1647315665');

      // harvest three
      const harvestedThree = BigNumber.from('1947275665000000');
      const blockNumberThree = BigNumber.from('1647355665');

      // setup harvest events
      const harvests: HarvestEvent[] = [
        {
          args: [harvestedOne, blockNumberOne],
        },
        { args: [harvestedTwo, blockNumberTwo] },
        { args: [harvestedThree, blockNumberThree] },
      ] as HarvestEvent[];
      harvests.forEach((h) => (h.getBlock = async () => block));

      // distibution one
      const distributedOne = BigNumber.from('1675665000000');

      // distibution three (skip two)
      const distributedThree = BigNumber.from('1947275665000000');

      const distributions: TreeDistributionEvent[] = [
        {
          args: [
            '0xBTC',
            distributedOne,
            blockNumberOne,
            BigNumber.from(defaultTimestamp),
          ],
        },
        {
          args: [
            '0xBTC',
            distributedThree,
            blockNumberThree,
            BigNumber.from(defaultTimestamp),
          ],
        },
      ] as TreeDistributionEvent[];

      const result = await parseHarvestEvents(harvests, distributions);
      expect(result).toMatchSnapshot();
    });
  });
});
