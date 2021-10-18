import { ethers } from 'ethers';
import { BadgerSDK } from '..';
import {
  BadgerTree,
  BadgerTree__factory,
  RewardsLogger,
  RewardsLogger__factory,
} from '../contracts';
import { RegistryKey } from '../registry/enums/registry-key.enum';
import { Service } from '../service';
import { EmissionSchedule } from './interfaces/emission-schedule.interface';

export class RewardsService extends Service {
  private loading: Promise<void>;
  private badgerTree?: BadgerTree;
  private rewardsLogger?: RewardsLogger;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    this.loading = this.init();
  }

  async ready() {
    return this.loading;
  }

  async loadActiveSchedules(beneficiary: string): Promise<EmissionSchedule[]> {
    const schedules = await this.loadSchedules(beneficiary);
    const now = Number((Date.now() / 1000).toFixed());
    return schedules.filter(
      (schedule) => schedule.start < now && schedule.end > now,
    );
  }

  async loadSchedules(beneficiary: string): Promise<EmissionSchedule[]> {
    if (!this.rewardsLogger) {
      throw new Error(`Rewards Logger is not defined for ${this.network}`);
    }
    const schedules = await this.rewardsLogger.getAllUnlockSchedulesFor(
      beneficiary,
    );
    return Promise.all(
      schedules.map(async (schedule) => {
        const { token, totalAmount } = schedule;
        const tokenInfo = await this.sdk.tokens.loadToken(token);
        const amount = Number(
          ethers.utils.formatUnits(totalAmount, tokenInfo.decimals),
        );
        return {
          beneficiary,
          token,
          amount,
          start: schedule.start.toNumber(),
          end: schedule.end.toNumber(),
        };
      }),
    );
  }

  private async init() {
    await this.sdk.registry.ready();
    const [badgerTreeAddress, rewardsLoggerAddress] = await Promise.all([
      this.sdk.registry.get(RegistryKey.BadgerTree),
      this.sdk.registry.get(RegistryKey.RewardsLogger),
    ]);
    if (badgerTreeAddress) {
      this.badgerTree = BadgerTree__factory.connect(
        badgerTreeAddress,
        this.provider,
      );
    }
    if (rewardsLoggerAddress) {
      this.rewardsLogger = RewardsLogger__factory.connect(
        rewardsLoggerAddress,
        this.provider,
      );
    }
  }
}
