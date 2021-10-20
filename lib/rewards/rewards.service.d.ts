import { BadgerSDK } from '../sdk';
import { Service } from '../service';
import { EmissionSchedule } from './interfaces/emission-schedule.interface';
import { ClaimOptions } from './interfaces/claim-options.interface';
export declare class RewardsService extends Service {
    private loading;
    private badgerTree?;
    private rewardsLogger?;
    constructor(sdk: BadgerSDK);
    ready(): Promise<void>;
    claim(options: ClaimOptions): Promise<import("ethers").ContractReceipt>;
    loadActiveSchedules(beneficiary: string): Promise<EmissionSchedule[]>;
    loadSchedules(beneficiary: string): Promise<EmissionSchedule[]>;
    private init;
}
