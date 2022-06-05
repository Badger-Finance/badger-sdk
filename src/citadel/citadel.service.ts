import {
  CitadelMinter,
  CitadelMinter__factory,
  StakedCitadelLocker,
  StakedCitadelLocker__factory,
  SupplySchedule,
  SupplySchedule__factory,
} from '..';
import { BigNumberish, ethers } from 'ethers';
import { Network } from '../config';
import { BadgerSDK } from '../sdk';
import { Service } from '../service';
import { chunkQueryFilter } from '../utils/chunk-query-filter';
import {
  CitadelDistributionToStakingEvent,
  CitadelDistributionToStakingEventFilter,
} from '../contracts/CitadelMinter';
import { evaluateDistributionEvents, parseTypedEvents } from './citadel.utils';
import { ListDistributionOptions } from './interfaces/list-distribution-options.interface';
import { ListRewardsOptions } from './interfaces/list-rewards-options.interface';
import { RewardFilter } from './enums/reward-filter.enum';
import { ListRewardsEvent } from './interfaces/list-rewards-event.interface';
import {
  RewardAddedEvent,
  RewardAddedEventFilter,
  RewardPaidEvent,
  RewardPaidEventFilter,
} from '../contracts/StakedCitadelLocker';
import { CitadelMintDistribution } from './interfaces/citadel-mint-distribution.interface';
import { getBlockDeployedAt } from '../utils/deployed-at.util';
import { RewardEventTypeEnum } from './enums/reward-event-type.enum';
import { CitadelInitError, CitadelValidationError } from './errors';

export const citadelMinterAddress =
  '0x594691aEa75080dd9B3e91e648Db6045d4fF6E22';
export const stakedCitadelLockerAddress =
  '0xb1c38253ad6ab3e2a2d53a094692fcf1321b12d4';

export class CitadelService extends Service {
  private _minter?: CitadelMinter;
  private _locker?: StakedCitadelLocker;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    this.#init();
  }

  get minter(): CitadelMinter {
    if (!this._minter) {
      throw new CitadelInitError(
        `Minter is not defined for ${this.config.network}`,
      );
    }
    return this._minter;
  }

  get locker(): StakedCitadelLocker {
    if (!this._locker) {
      throw new CitadelInitError(
        `Locker is not defined for ${this.config.network}`,
      );
    }
    return this._locker;
  }

  async getSupplySchedule(): Promise<SupplySchedule> {
    return SupplySchedule__factory.connect(
      await this.minter.supplySchedule(),
      this.provider,
    );
  }

  getLastMintTimestamp() {
    return this.minter.lastMintTimestamp();
  }

  async listDistributions(options: ListDistributionOptions = {}) {
    const deployedAt = getBlockDeployedAt(
      citadelMinterAddress,
      this.config.network,
    );

    const { startBlock, endBlock } = options;

    if (!startBlock) options.startBlock = deployedAt;
    if (!endBlock) options.endBlock = await this.sdk.provider.getBlockNumber();

    const distFilter = this.minter.filters.CitadelDistributionToStaking();

    const distributionsToStaking = await chunkQueryFilter<
      CitadelMinter,
      CitadelDistributionToStakingEventFilter,
      CitadelDistributionToStakingEvent
    >(
      this.minter,
      distFilter,
      <number>options.startBlock,
      <number>options.endBlock,
    );

    const distributions = await parseTypedEvents(
      distributionsToStaking,
      (e, b) => ({
        block: b.number,
        startTime: e.args[0].toNumber(),
        endTime: e.args[1].toNumber(),
        citadelAmount: e.args[2],
      }),
    );

    return evaluateDistributionEvents(distributions, options);
  }

  isDistributor(token: string, distributor: string) {
    const tokenAddr = ethers.utils.getAddress(token);
    const distributorAddr = ethers.utils.getAddress(distributor);

    return this.locker.rewardDistributors(tokenAddr, distributorAddr);
  }

  getRewardStats(account: string) {
    const accAddr = ethers.utils.getAddress(account);

    return this.locker.rewardData(accAddr);
  }

  getRewardTokens() {
    return this.locker.getRewardTokens();
  }

  async listRewards(options: ListRewardsOptions = {}) {
    const deployedAt = getBlockDeployedAt(
      stakedCitadelLockerAddress,
      this.config.network,
    );

    const {
      startBlock,
      endBlock,
      user,
      token,
      filter = RewardFilter.ADDED,
    } = options;

    if (!startBlock) options.startBlock = deployedAt;
    if (!endBlock) options.endBlock = await this.sdk.provider.getBlockNumber();

    let rewardEvents: ListRewardsEvent[] = [];

    switch (filter) {
      case RewardFilter.ADDED:
        const addedFilter = this.locker.filters.RewardAdded(null, token);

        const addedRewardEvents = await chunkQueryFilter<
          StakedCitadelLocker,
          RewardAddedEventFilter,
          RewardAddedEvent
        >(
          this.locker,
          addedFilter,
          <number>options.startBlock,
          <number>options.endBlock,
        );

        rewardEvents = await parseTypedEvents(addedRewardEvents, (e, b) => ({
          block: b.number,
          account: e.args[0],
          token: e.args[1],
          reward: e.args[2],
          dataTypeHash: e.args[3],
          timestamp: e.args[4].toNumber(),
          type: RewardEventTypeEnum.ADDED,
        }));
        break;
      case RewardFilter.PAID:
        const paidFilter = this.locker.filters.RewardPaid(user, token);

        const paidRewardEvents = await chunkQueryFilter<
          StakedCitadelLocker,
          RewardPaidEventFilter,
          RewardPaidEvent
        >(
          this.locker,
          paidFilter,
          <number>options.startBlock,
          <number>options.endBlock,
        );

        rewardEvents = await parseTypedEvents(paidRewardEvents, (e, b) => ({
          block: b.number,
          user: e.args[0],
          token: e.args[1],
          reward: e.args[2],
          type: RewardEventTypeEnum.PAID,
        }));
        break;
      default:
        throw new CitadelValidationError(`Unknown reward filter ${filter}`);
    }

    return rewardEvents;
  }

  async getClaimableRewards(account: string) {
    const accAddr = ethers.utils.getAddress(account);
    return this.locker.claimableRewards(accAddr);
  }

  async rewardWeightOf(account: string) {
    const accAddr = ethers.utils.getAddress(account);
    return this.locker.rewardWeightOf(accAddr);
  }

  lockedBalanceOf(address: string) {
    const userAddr = ethers.utils.getAddress(address);
    return this.locker.lockedBalanceOf(userAddr);
  }

  balanceOf(address: string) {
    const userAddr = ethers.utils.getAddress(address);
    return this.locker.balanceOf(userAddr);
  }

  balanceAtEpochOf(epoch: BigNumberish, address: string) {
    const userAddr = ethers.utils.getAddress(address);
    return this.locker.balanceAtEpochOf(epoch, userAddr);
  }

  getEpochs(index: BigNumberish) {
    return this.locker.epochs(index);
  }

  getEpochByTimestamp(time: number) {
    return this.locker.findEpochId(time);
  }

  getLastEpochIx() {
    return this.locker.epochCount();
  }

  getLockedSupply() {
    return this.locker.lockedSupply();
  }

  getBoostedSupply() {
    return this.locker.boostedSupply();
  }

  async getCumulativeClaimedRewards(userAddress: string, rewardsToken: string) {
    return this.locker.getCumulativeClaimedRewards(
      ethers.utils.getAddress(userAddress),
      ethers.utils.getAddress(rewardsToken),
    );
  }

  async getCitadelMintDistribution(): Promise<CitadelMintDistribution> {
    const [fundingBps, stakingBps, lockingBps] = await Promise.all([
      this.minter.fundingBps(),
      this.minter.stakingBps(),
      this.minter.lockingBps(),
    ]);

    return {
      fundingBps: fundingBps.toNumber(),
      stakingBps: stakingBps.toNumber(),
      lockingBps: lockingBps.toNumber(),
    };
  }

  #init() {
    if (this.config.network !== Network.Ethereum) {
      return;
    }
    this._minter = CitadelMinter__factory.connect(
      citadelMinterAddress,
      this.provider,
    );
    this._locker = StakedCitadelLocker__factory.connect(
      stakedCitadelLockerAddress,
      this.provider,
    );
  }
}
