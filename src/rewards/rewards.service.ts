import { BigNumber, ethers } from 'ethers';

import { TransactionStatus } from '../config';
import { Network } from '../config/enums/network.enum';
import {
  BadgerTree,
  BadgerTree__factory,
  EmisisonControl__factory,
  EmissionControl,
  RewardsLogger,
  RewardsLogger__factory,
} from '../contracts';
import { DiggService } from '../digg';
import { RegistryKey } from '../registry/enums/registry-key.enum';
import { Service } from '../service';
import { formatBalance } from '../tokens/tokens.utils';
import { isUserTxRejectionError } from '../utils/is-tx-rejection-error';
import { ClaimOptions } from './interfaces/claim-options.interface';
import { EmissionSchedule } from './interfaces/emission-schedule.interface';

export class RewardsService extends Service {
  private loading?: Promise<void>;
  private _badgerTree?: BadgerTree;
  private _rewardsLogger?: RewardsLogger;
  private _emissionControl?: EmissionControl;

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

  get emissionControl(): EmissionControl {
    if (!this._emissionControl) {
      throw new Error(
        `Emission Control is not defined for ${this.config.network}`,
      );
    }
    return this._emissionControl;
  }

  hasBadgerTree() {
    return this._badgerTree !== undefined;
  }

  hasRewardsLogger() {
    return this._rewardsLogger !== undefined;
  }

  hasEmissionControl() {
    return this._emissionControl !== undefined;
  }

  async claim({
    tokens,
    cumulativeAmounts,
    index,
    cycle,
    proof,
    claimAmounts,
    overrides,
    onSubmitted,
    onSuccess,
    onError,
    onRejection,
  }: ClaimOptions): Promise<TransactionStatus> {
    let result = TransactionStatus.UserConfirmation;

    try {
      const tx = await this.badgerTree.claim(
        tokens,
        cumulativeAmounts,
        index,
        cycle,
        proof,
        claimAmounts,
        { ...overrides },
      );
      if (onSubmitted) {
        onSubmitted({ transaction: tx });
      }
      result = TransactionStatus.Pending;
      const receipt = await tx.wait();
      if (onSuccess) {
        onSuccess({ receipt });
      }
      result = TransactionStatus.Success;
    } catch (err) {
      if (isUserTxRejectionError(err)) {
        if (onRejection) onRejection();
        result = TransactionStatus.Canceled;
      } else {
        this.error(err);
        if (onError) onError(err);
        result = TransactionStatus.Failure;
      }
    }

    return result;
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
          ethers.utils.getAddress(token) === DiggService.DIGG_ADDRESS
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

  async getBoostWeight(address: string): Promise<BigNumber> {
    if (!this.hasEmissionControl()) {
      return ethers.constants.Zero;
    }
    return this.emissionControl.boostedEmissionRate(address);
  }

  private async init() {
    try {
      await this.sdk.registry.ready();

      if (!this.sdk.registry.hasRegistry()) {
        return;
      }

      const [badgerTreeAddress, rewardsLoggerAddress, _emissionControlAddress] =
        await Promise.all([
          this.sdk.registry.get(RegistryKey.BadgerTree),
          this.sdk.registry.get(RegistryKey.RewardsLogger),
          this.sdk.registry.get(RegistryKey.EmissionControl),
        ]);

      if (badgerTreeAddress) {
        this._badgerTree = BadgerTree__factory.connect(
          badgerTreeAddress,
          this.connector,
        );
      }
      if (rewardsLoggerAddress) {
        this._rewardsLogger = RewardsLogger__factory.connect(
          rewardsLoggerAddress,
          this.connector,
        );
      }
      // TODO: enable once emission control is on the registry
      // if (emissionControlAddress) {
      //   this._emissionControl = EmisisonControl__factory.connect(
      //     emissionControlAddress,
      //     this.connector,
      //   );
      // }
      if (this.config.network === Network.Ethereum) {
        this._emissionControl = EmisisonControl__factory.connect(
          '0x31825c0a6278b89338970e3eb979b05b27faa263',
          this.connector,
        );
      }
      if (this.config.network === Network.Arbitrum) {
        this._emissionControl = EmisisonControl__factory.connect(
          '0x78418681f9ed228d627f785fb9607ed5175518fd',
          this.connector,
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
