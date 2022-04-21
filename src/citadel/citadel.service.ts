import {
  CitadelMinter,
  CitadelMinter__factory,
  // StakedCitadelLocker,
  // StakedCitadelLocker__factory,
  SupplySchedule,
  SupplySchedule__factory,
} from '..';
import { Network } from '../config/enums/network.enum';
import { BadgerSDK } from '../sdk';
import { Service } from '../service';

const citadelMinterAddress = '';
// const stakedCitadelLockerAddress = '';

export class CitadelService extends Service {
  private minter?: CitadelMinter;
  // private locker?: StakedCitadelLocker;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    this.init();
  }

  async getSupplySchedule(): Promise<SupplySchedule> {
    if (!this.minter) {
      throw new Error(`Minter not defined for ${this.config.network}`);
    }
    return SupplySchedule__factory.connect(
      await this.minter.supplySchedule(),
      this.provider,
    );
  }

  private init() {
    if (this.config.network !== Network.Ethereum) {
      return;
    }
    this.minter = CitadelMinter__factory.connect(
      citadelMinterAddress,
      this.provider,
    );
    // this.locker = StakedCitadelLocker__factory.connect(
    //   stakedCitadelLockerAddress,
    //   this.provider,
    // );
  }
}
