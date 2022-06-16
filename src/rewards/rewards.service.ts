import { ethers } from 'ethers';

import { Network } from '../config/enums/network.enum';
import {
  BadgerTree,
  BadgerTree__factory,
  RewardsLogger,
  RewardsLogger__factory,
} from '../contracts';
import { DIGG_ADDRESS } from '../digg/digg.service';
import { RegistryKey } from '../registry/enums/registry-key.enum';
import { Service } from '../service';
import { formatBalance } from '../tokens/tokens.utils';
import { ClaimOptions } from './interfaces/claim-options.interface';
import { EmissionSchedule } from './interfaces/emission-schedule.interface';

export class RewardsService extends Service {
  private loading?: Promise<void>;
  private _badgerTree?: BadgerTree;
  private _rewardsLogger?: RewardsLogger;

  async ready() {
    if (!this.loading) {
      this.loading = this.init();
    }
    return this.loading;
  }

  get badgerTree(): BadgerTree {
    if (!this._badgerTree) {
      throw new Error(`Badger Tree is not defined for ${this.config.network}`);
    }
    return this._badgerTree;
  }

  get rewardsLogger(): RewardsLogger {
    if (!this._rewardsLogger) {
      throw new Error(
        `Rewards Logger is not defined for ${this.config.network}`,
      );
    }
    return this._rewardsLogger;
  }

  hasBadgerTree() {
    return this._badgerTree !== undefined;
  }

  hasRewardsLogger() {
    return this._rewardsLogger !== undefined;
  }

  async claim({
    tokens,
    cumulativeAmounts,
    index,
    cycle,
    proof,
    claimAmounts,
  }: ClaimOptions) {
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
    const { network } = this.config;
    if (!this.rewardsLogger) {
      return [];
    }
    const schedules = await this.rewardsLogger.getAllUnlockSchedulesFor(
      beneficiary,
    );
    return Promise.all(
      schedules.map(async (schedule) => {
        const { token, totalAmount, start, end, duration } = schedule;
        const tokenInfo = await this.sdk.tokens.loadToken(token);
        let amount = formatBalance(totalAmount, tokenInfo.decimals);
        if (
          network === Network.Ethereum &&
          ethers.utils.getAddress(token) === DIGG_ADDRESS
        ) {
          amount = await this.sdk.digg.convert(totalAmount);
        }

        const startNum = start.toNumber();
        const endNum = end.toNumber();
        const durationNum = duration.toNumber();

        const currentTimestamp = Date.now() / 1000;

        let completionPercent = 100;
        if (currentTimestamp < endNum) {
          completionPercent = Math.round(
            (currentTimestamp - startNum) / (durationNum / 100),
          );
        }

        return {
          beneficiary,
          token,
          amount,
          start: startNum,
          end: endNum,
          compPercent: completionPercent,
        };
      }),
    );
  }

  private async init() {
    try {
      await this.sdk.registry.ready();
      await this.sdk.registryV2.ready();

      // todo, here isnt convinient to propagate RegistryV2 usage, so
      // just replace in post-migration process
      const [badgerTreeAddress, rewardsLoggerAddress] = await Promise.all([
        this.sdk.registry.get(RegistryKey.BadgerTree),
        this.sdk.registry.get(RegistryKey.RewardsLogger),
      ]);
      if (badgerTreeAddress) {
        this._badgerTree = BadgerTree__factory.connect(
          badgerTreeAddress,
          this.provider,
        );
      }
      if (rewardsLoggerAddress) {
        this._rewardsLogger = RewardsLogger__factory.connect(
          rewardsLoggerAddress,
          this.provider,
        );
      }
    } catch (err) {
      this.warn(
        `Failed to initialize rewards for ${this.sdk.config.network}`,
        err,
      );
    }
  }
}
