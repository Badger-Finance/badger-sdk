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

export const citadelMinterAddress =
  '0x594691aEa75080dd9B3e91e648Db6045d4fF6E22';
export const stakedCitadelLockerAddress =
  '0xB1c38253aD6Ab3e2A2D53A094692fcf1321b12d4';

export class CitadelService extends Service {
  private minter?: CitadelMinter;
  private locker?: StakedCitadelLocker;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    this.#init();
  }

  get citadelMinter(): CitadelMinter {
    if (!this.minter) {
      throw new Error(`Minter is not defined for ${this.config.network}`);
    }
    return this.minter;
  }

  get citadelLocker(): StakedCitadelLocker {
    if (!this.locker) {
      throw new Error(`Locker is not defined for ${this.config.network}`);
    }
    return this.locker;
  }

  async getSupplySchedule(): Promise<SupplySchedule> {
    return SupplySchedule__factory.connect(
      await this.citadelMinter.supplySchedule(),
      this.provider,
    );
  }

  getLastMintTimestamp() {
    return this.citadelMinter.lastMintTimestamp();
  }

  async listDistributions(options: ListDistributionOptions = {}) {
    const deployedAt = getBlockDeployedAt(
      citadelMinterAddress,
      this.config.network,
    );

    const { startBlock, endBlock } = options;

    if (!startBlock) options.startBlock = deployedAt;
    if (!endBlock) options.endBlock = await this.sdk.provider.getBlockNumber();

    const distFilter =
      this.citadelMinter.filters.CitadelDistributionToStaking();

    const distributionsToStaking = await chunkQueryFilter<
      CitadelMinter,
      CitadelDistributionToStakingEventFilter,
      CitadelDistributionToStakingEvent
    >(
      this.citadelMinter,
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
    if (!this.citadelLocker) {
      throw new Error(`Locker not defined for ${this.config.network}`);
    }

    const tokenAddr = ethers.utils.getAddress(token);
    const distributorAddr = ethers.utils.getAddress(distributor);

    return this.citadelLocker.rewardDistributors(tokenAddr, distributorAddr);
  }

  getRewardStats(account: string) {
    const accAddr = ethers.utils.getAddress(account);

    return this.citadelLocker.rewardData(accAddr);
  }

  getRewardTokens() {
    return this.citadelLocker.getRewardTokens();
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
        const addedFilter = this.citadelLocker.filters.RewardAdded(null, token);

        const addedRewardEvents = await chunkQueryFilter<
          StakedCitadelLocker,
          RewardAddedEventFilter,
          RewardAddedEvent
        >(
          this.citadelLocker,
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
        const paidFilter = this.citadelLocker.filters.RewardPaid(user, token);

        const paidRewardEvents = await chunkQueryFilter<
          StakedCitadelLocker,
          RewardPaidEventFilter,
          RewardPaidEvent
        >(
          this.citadelLocker,
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
        throw new Error(`Unknown reward filter ${filter}`);
    }

    return rewardEvents;
  }

  async getClaimableRewards(account: string) {
    const accAddr = ethers.utils.getAddress(account);
    return this.citadelLocker.claimableRewards(accAddr);
  }

  async rewardWeightOf(account: string) {
    const accAddr = ethers.utils.getAddress(account);
    return this.citadelLocker.rewardWeightOf(accAddr);
  }

  lockedBalanceOf(address: string) {
    const userAddr = ethers.utils.getAddress(address);
    return this.citadelLocker.lockedBalanceOf(userAddr);
  }

  balanceOf(address: string) {
    const userAddr = ethers.utils.getAddress(address);
    return this.citadelLocker.balanceOf(userAddr);
  }

  balanceAtEpochOf(epoch: BigNumberish, address: string) {
    const userAddr = ethers.utils.getAddress(address);
    return this.citadelLocker.balanceAtEpochOf(epoch, userAddr);
  }

  getEcochs(index: BigNumberish) {
    return this.citadelLocker.epochs(index);
  }

  getLockedSupply() {
    return this.citadelLocker.lockedSupply();
  }

  getBoostedSupply() {
    return this.citadelLocker.boostedSupply();
  }

  async getCitadelMintDistribution(): Promise<CitadelMintDistribution> {
    const [fundingBps, stakingBps, lockingBps] = await Promise.all([
      this.citadelMinter.fundingBps(),
      this.citadelMinter.stakingBps(),
      this.citadelMinter.lockingBps(),
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
    this.minter = CitadelMinter__factory.connect(
      citadelMinterAddress,
      this.provider,
    );
    this.locker = StakedCitadelLocker__factory.connect(
      stakedCitadelLockerAddress,
      this.provider,
    );
  }
}
