import { BadgerSDK } from '../sdk';
import { Service } from '../service';

export class DiggService extends Service {
  private loading: Promise<void>;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    this.loading = this.init();
  }

  async ready() {
    return this.loading;
  }

  private async init() {}
}
