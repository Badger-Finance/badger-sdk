import { BigNumber } from '@ethersproject/bignumber';
import { BadgerSDK } from '../sdk';
import { Service } from '../service';
export declare class DiggService extends Service {
    private digg?;
    constructor(sdk: BadgerSDK);
    convert(shares: BigNumber): Promise<number>;
}
