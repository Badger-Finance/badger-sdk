import { BlocksRangeOptions } from '../../common';
import { GovernanceService } from '../governance.service';

export class GovernanceProxyMock extends GovernanceService {
  async processEventsScanRangePr(
    address: string,
    options: Required<BlocksRangeOptions>,
  ) {
    await this.processEventsScanRange(address, options);
  }
}
