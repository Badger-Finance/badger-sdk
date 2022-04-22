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
import { vaultBlockDeployedAt } from '../vaults/vaults.utils';
import {
  evaluateDistributionEvents,
  parseAddedRewardEvents,
  parseDistributionsEvents,
  parsePaidRewardEvents,
} from './citadel.utils';
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

const citadelMinterAddress = '0x594691aEa75080dd9B3e91e648Db6045d4fF6E22';
const stakedCitadelLockerAddress = '0x8b9AAb4BE7b25D7794386F8CC217f2d8a9498ee9';

export class CitadelService extends Service {
  private minter?: CitadelMinter;
  private locker?: StakedCitadelLocker;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    this.#init();
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

  getLastMintTimestamp() {
    if (!this.minter) {
      throw new Error(`Minter not defined for ${this.config.network}`);
    }

    return this.minter.lastMintTimestamp();
  }

  async listDistributions(options: ListDistributionOptions = {}) {
    if (!this.minter) {
      throw new Error(`Minter not defined for ${this.config.network}`);
    }
    const deployedAt = vaultBlockDeployedAt(
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
    >(this.minter, distFilter, <number>startBlock, <number>endBlock);

    const distributions = await parseDistributionsEvents(
      distributionsToStaking,
    );

    return evaluateDistributionEvents(distributions, options);
  }

  isDistributor(token: string, distributor: string) {
    if (!this.locker) {
      throw new Error(`Locker not defined for ${this.config.network}`);
    }

    const tokenAddr = ethers.utils.getAddress(token);
    const distributorAddr = ethers.utils.getAddress(distributor);

    return this.locker.rewardDistributors(tokenAddr, distributorAddr);
  }

  getRewardStats(account: string) {
    if (!this.locker) {
      throw new Error(`Locker not defined for ${this.config.network}`);
    }

    const accAddr = ethers.utils.getAddress(account);

    return this.locker.rewardData(accAddr);
  }

  getRewardTokens() {
    if (!this.locker) {
      throw new Error(`Locker not defined for ${this.config.network}`);
    }

    return this.locker.getRewardTokens();
  }

  async listRewards(options: ListRewardsOptions = {}) {
    if (!this.locker) {
      throw new Error(`Locker not defined for ${this.config.network}`);
    }

    const deployedAt = vaultBlockDeployedAt(
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
        const addedFilter = this.locker.filters.RewardAdded(token);

        const addedRewardEvents = await chunkQueryFilter<
          StakedCitadelLocker,
          RewardAddedEventFilter,
          RewardAddedEvent
        >(this.locker, addedFilter, <number>startBlock, <number>endBlock);

        rewardEvents = await parseAddedRewardEvents(addedRewardEvents);
        break;
      case RewardFilter.PAID:
        const paidFilter = this.locker.filters.RewardPaid(user, token);

        const paidRewardEvents = await chunkQueryFilter<
          StakedCitadelLocker,
          RewardPaidEventFilter,
          RewardPaidEvent
        >(this.locker, paidFilter, <number>startBlock, <number>endBlock);

        rewardEvents = await parsePaidRewardEvents(paidRewardEvents);
        break;
      default:
        throw new Error(`Unknown reward filter ${filter}`);
    }

    return rewardEvents;
  }

  async getClaimableRewards(account: string) {
    if (!this.locker) {
      throw new Error(`Locker not defined for ${this.config.network}`);
    }

    const accAddr = ethers.utils.getAddress(account);

    return this.locker.claimableRewards(accAddr);
  }

  async rewardWeightOf(account: string) {
    if (!this.locker) {
      throw new Error(`Locker not defined for ${this.config.network}`);
    }

    const accAddr = ethers.utils.getAddress(account);

    return this.locker.rewardWeightOf(accAddr);
  }

  lockedBalanceOf(address: string) {
    if (!this.locker) {
      throw new Error(`Locker not defined for ${this.config.network}`);
    }

    const userAddr = ethers.utils.getAddress(address);

    return this.locker.lockedBalanceOf(userAddr);
  }

  balanceOf(address: string) {
    if (!this.locker) {
      throw new Error(`Locker not defined for ${this.config.network}`);
    }

    const userAddr = ethers.utils.getAddress(address);

    return this.locker.balanceOf(userAddr);
  }

  balanceAtEpochOf(epoch: BigNumberish, address: string) {
    if (!this.locker) {
      throw new Error(`Locker not defined for ${this.config.network}`);
    }

    const userAddr = ethers.utils.getAddress(address);

    return this.locker.balanceAtEpochOf(epoch, userAddr);
  }

  getEcochs(index: BigNumberish) {
    if (!this.locker) {
      throw new Error(`Locker not defined for ${this.config.network}`);
    }

    return this.locker.epochs(index);
  }

  getLockedSupply() {
    if (!this.locker) {
      throw new Error(`Locker not defined for ${this.config.network}`);
    }

    return this.locker.lockedSupply();
  }

  getBoostedSupply() {
    if (!this.locker) {
      throw new Error(`Locker not defined for ${this.config.network}`);
    }

    return this.locker.boostedSupply();
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
