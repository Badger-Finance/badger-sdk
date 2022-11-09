import { BlocksRangeOptions } from '../common';
import { Network } from '../config';
import { TimelockController, TimelockController__factory } from '../contracts';
import {
  CallDisputedEvent,
  CallDisputedEventFilter,
  CallDisputedResolvedEvent,
  CallDisputedResolvedEventFilter,
  CallExecutedEvent,
  CallExecutedEventFilter,
  CallScheduledEvent,
  CallScheduledEventFilter,
  CancelledEvent,
  CancelledEventFilter,
} from '../contracts/TimelockController';
import { Service } from '../service';
import { chunkQueryFilter } from '../utils';
import { getBlockDeployedAt } from '../utils/deployed-at.util';

export class GovernanceService extends Service {
  static readonly TIMELOCK_CONTRACT_ADDR_MAP = {
    [`${Network.Arbitrum}`]: '0xC4611233328559Dd1849947bC1e2b3B6b8714fa9',
  };

  private loading?: Promise<void>;
  private _timelockController?: TimelockController;

  async ready() {
    if (!this.loading) {
      this.loading = this.#init();
    }

    return this.loading;
  }

  get timelockAddress() {
    return GovernanceService.TIMELOCK_CONTRACT_ADDR_MAP[
      this.sdk.config.network
    ];
  }

  get timelockController(): TimelockController {
    if (!this._timelockController) {
      throw new Error(
        `Timelock controller is not defined for ${this.config.network}`,
      );
    }
    return this._timelockController;
  }

  async loadScheduledProposals<T extends Required<BlocksRangeOptions>>(
    { startBlock = 0, endBlock = 0 }: T = {
      startBlock: 0,
      endBlock: 0,
    } as T,
  ) {
    const options = { startBlock, endBlock };
    await this.processEventsScanRange(this.timelockAddress, options);

    const scheduledProposalsFilter =
      this.timelockController.filters.CallScheduled();

    return chunkQueryFilter<
      TimelockController,
      CallScheduledEventFilter,
      CallScheduledEvent
    >(
      this.timelockController,
      scheduledProposalsFilter,
      options.startBlock,
      options.endBlock,
    );
  }

  async loadProposalsStatusChange<T extends Required<BlocksRangeOptions>>(
    { startBlock = 0, endBlock = 0 }: T = {
      startBlock: 0,
      endBlock: 0,
    } as T,
  ) {
    const options = { startBlock, endBlock };
    await this.processEventsScanRange(this.timelockAddress, options);

    const executedProposalsFilter =
      this.timelockController.filters.CallExecuted();
    const canceledProposalsFilter = this.timelockController.filters.Cancelled();

    const [executedProposals, canceledProposals] = await Promise.all([
      chunkQueryFilter<
        TimelockController,
        CallExecutedEventFilter,
        CallExecutedEvent
      >(
        this.timelockController,
        executedProposalsFilter,
        options.startBlock,
        options.endBlock,
      ),
      chunkQueryFilter<
        TimelockController,
        CancelledEventFilter,
        CancelledEvent
      >(
        this.timelockController,
        canceledProposalsFilter,
        options.startBlock,
        options.endBlock,
      ),
    ]);

    const proposalsStatusChangeEvents = [
      ...executedProposals,
      ...canceledProposals,
    ];

    return proposalsStatusChangeEvents.sort(
      (a, b) => a.blockNumber - b.blockNumber,
    );
  }

  async loadProposalsDisputes<T extends Required<BlocksRangeOptions>>(
    { startBlock = 0, endBlock = 0 }: T = {
      startBlock: 0,
      endBlock: 0,
    } as T,
  ) {
    const options = { startBlock, endBlock };
    await this.processEventsScanRange(this.timelockAddress, options);

    const disputesOpenedFilter = this.timelockController.filters.CallDisputed();
    const disputesResolvedFilter =
      this.timelockController.filters.CallDisputedResolved();

    const [disputesOpened, disputesResolved] = await Promise.all([
      chunkQueryFilter<
        TimelockController,
        CallDisputedEventFilter,
        CallDisputedEvent
      >(
        this.timelockController,
        disputesOpenedFilter,
        options.startBlock,
        options.endBlock,
      ),
      chunkQueryFilter<
        TimelockController,
        CallDisputedResolvedEventFilter,
        CallDisputedResolvedEvent
      >(
        this.timelockController,
        disputesResolvedFilter,
        options.startBlock,
        options.endBlock,
      ),
    ]);

    const proposalsDisputesEvents = [...disputesOpened, ...disputesResolved];

    return proposalsDisputesEvents.sort(
      (a, b) => a.blockNumber - b.blockNumber,
    );
  }

  protected async processEventsScanRange<
    T extends Required<BlocksRangeOptions>,
  >(contractAdress: string, options: T) {
    const timelockDeployedAt = getBlockDeployedAt(
      contractAdress,
      this.config.network,
    );

    if (!options.startBlock || options.startBlock === 0) {
      options.startBlock = timelockDeployedAt;
    }
    if (!options.endBlock || options.endBlock === 0) {
      options.endBlock = await this.sdk.provider.getBlockNumber();
    }
  }

  async #init() {
    try {
      const deployed = await this.provider.getCode(this.timelockAddress);

      if (deployed === '0x') {
        this.debug(
          `No timelock controllers deployed for ${this.sdk.config.network}, skipping...`,
        );
        return;
      }

      this._timelockController = TimelockController__factory.connect(
        GovernanceService.TIMELOCK_CONTRACT_ADDR_MAP[this.sdk.config.network],
        this.provider,
      );
    } catch (err) {
      this.debug(
        `Failed to initialize registry for ${this.sdk.config.network}`,
        err,
      );
    }
  }
}
