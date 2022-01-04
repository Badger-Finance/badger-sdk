import { BadgerSDK } from '../sdk';
import {
  BadgerTree,
  BadgerTree__factory,
  RewardsLogger,
  RewardsLogger__factory,
} from '../contracts';
import { RegistryKey } from '../registry/enums/registry-key.enum';
import { Service } from '../service';
import { EmissionSchedule } from './interfaces/emission-schedule.interface';
import { Network } from '../config/enums/network.enum';
import { formatBalance } from '../tokens/tokens.utils';
import { ClaimOptions } from './interfaces/claim-options.interface';

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

  async claim(options: ClaimOptions) {
    const { network } = this.config;
    if (!this.badgerTree) {
      throw new Error(`Badger Tree is not defined for ${network}`);
    }
    const { tokens, cumulativeAmounts, index, cycle, proof, claimAmounts } =
      options;
    const tx = await this.badgerTree.claim(
      tokens,
      cumulativeAmounts,
      index,
      cycle,
      proof,
      claimAmounts,
    );
    return tx.wait();
  }

  async loadActiveSchedules(beneficiary: string): Promise<EmissionSchedule[]> {
    const schedules = await this.loadSchedules(beneficiary);
    const now = Number((Date.now() / 1000).toFixed());
    return schedules.filter(
      (schedule) => schedule.start < now && schedule.end > now,
    );
  }

  async loadSchedules(beneficiary: string): Promise<EmissionSchedule[]> {
    const { network, tokens } = this.config;
    if (!this.rewardsLogger) {
      throw new Error(`Rewards Logger is not defined for ${network}`);
    }
    const schedules = await this.rewardsLogger.getAllUnlockSchedulesFor(
      beneficiary,
    );
    return Promise.all(
      schedules.map(async (schedule) => {
        const { token, totalAmount } = schedule;
        const tokenInfo = await this.sdk.tokens.loadToken(token);
        let amount = formatBalance(totalAmount, tokenInfo.decimals);
        if (network === Network.Ethereum && token === tokens.DIGG) {
          amount = await this.sdk.digg.convert(totalAmount);
        }
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
    try {
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
    } catch (err) {
      console.log(
        `Failed to initialize rewards for ${this.sdk.config.network}`,
        err,
      );
    }
  }
}
