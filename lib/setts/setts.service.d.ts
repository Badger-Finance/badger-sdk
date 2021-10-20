import { BadgerSDK } from '..';
import { Service } from '../service';
import { Sett } from './interfaces/sett.interface';
export declare class SettsService extends Service {
    private setts;
    constructor(sdk: BadgerSDK);
    loadSett(address: string, update?: boolean): Promise<Sett>;
}
