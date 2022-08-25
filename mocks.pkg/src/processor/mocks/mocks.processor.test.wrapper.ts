import { RelevantNetworks } from '../../types';
import { MocksProcessor } from '../mocks.processor';

export class MocksProcessorTestWrapper extends MocksProcessor {
  static getNodeRpcUrlPub(network: RelevantNetworks) {
    return MocksProcessorTestWrapper.getNodeRpcUrl(network);
  }

  public launch() {
    return super.launch();
  }

  public guard() {
    return super.guard();
  }
}
