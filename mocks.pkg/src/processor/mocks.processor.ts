import {
  ProcessorClsArgs,
  ProcessorNetworksConfigMap,
} from './cls.types.processor';
import { ProcessorError } from './base.error.processor';
import { ServicesConfig } from '../config';
import { relevantNetworks } from '../constants';
import { RelevantNetworks } from '../types';

export class MocksProcessor {
  static readonly LAUNCH_ACTION = 'launch';
  static readonly GUARD_ACTION = 'guard';

  private readonly action: string;
  private readonly forced: boolean;
  private static configs: ProcessorNetworksConfigMap;

  private readonly networks: RelevantNetworks[] = relevantNetworks;

  constructor({ action, forced }: ProcessorClsArgs) {
    this.action = action;
    this.forced = forced;

    for (const network of this.networks) {
      MocksProcessor.configs[network] = new ServicesConfig(network);
    }
  }

  public async run() {
    switch (this.action) {
      case MocksProcessor.LAUNCH_ACTION:
        await this.launch();
        break;
      case MocksProcessor.GUARD_ACTION:
        await this.guard();
        break;
      default:
        throw new ProcessorError('Unknown action for MockProcessor');
    }
  }

  private async launch() {
    console.log(this.forced);
    // check cache layer for modules methods
    // return diff that should be loaded
    // fetch method in processor
    // static loader which will save files with pattern
    // update cache after loading was success
  }

  private async guard() {
    // versions in package.jsons should be synced
    // throw detailed error if something missing
  }
}
