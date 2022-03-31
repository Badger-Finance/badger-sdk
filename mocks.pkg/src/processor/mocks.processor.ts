import {
  ProcessorClsArgs,
  ProcessorNetworksConfigMap,
} from './cls.types.processor';
import { ProcessorError } from './base.error.processor';
import { ServicesConfig } from '../config';
import { relevantNetworks } from '../constants';
import { RelevantNetworks } from '../types';
import { MethodsCache } from '../cache';
import { ServicesMethodsList } from '../config/struct.types.config';
import { SdkServices } from '../enums';
import { Network } from '../../../src';
import { BadgerSDK } from '../../../lib';

export class MocksProcessor {
  static readonly LAUNCH_ACTION = 'launch';
  static readonly GUARD_ACTION = 'guard';

  private readonly action: string;
  private readonly forced: boolean;

  private readonly networks: RelevantNetworks[] = relevantNetworks;

  private methodsCache: MethodsCache;

  private static configs: ProcessorNetworksConfigMap;

  constructor({ action, forced }: ProcessorClsArgs) {
    this.action = action;
    this.forced = forced;

    this.methodsCache = new MethodsCache();

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

  private async loadAndSave(cacheMissMatch: ServicesMethodsList) {
    for (const network of this.networks) {
      const sdk = new BadgerSDK({
        network,
        provider: MocksProcessor.getNodeRpcUrl(network),
      });
      const methodArgsConfig = <ServicesConfig>MocksProcessor.configs[network];

      const relevantServices = this.methodsCache.getRelevantServicesMethods();
      const services = this.forced ? relevantServices : cacheMissMatch;

      for (const service of Object.keys(services)) {
        if (service === 'length') continue;

        const methods = this.forced
          ? relevantServices[<SdkServices>service]
          : cacheMissMatch[<SdkServices>service];

        if (!methods) return;

        for (const methodName of methods) {
          const args =
            methodArgsConfig.servicesArgsMap[<SdkServices>service][methodName];
          // @ts-ignore It`s rly hard to type, and even if we do
          // there be a lot of manual work, need to avoid that
          const response = await sdk[service][methodName](...args);

          // cr8 directories
          // save response to files
        }
      }
    }
  }

  private static getNodeRpcUrl(network: RelevantNetworks): string {
    let networkForEnvVar = network.toUpperCase();

    if (network === Network.BinanceSmartChain) {
      networkForEnvVar = 'BINANCE';
    }

    const envVarName = `${networkForEnvVar}_RPC_NODE`;
    const rpcUrl = process.env[envVarName];

    if (!rpcUrl) throw new ProcessorError(`ENV var ${envVarName} not found`);

    return rpcUrl;
  }

  private async launch() {
    const cacheMissMatch = this.methodsCache.getMissMatch();

    if (cacheMissMatch.length === 0) return;

    await this.loadAndSave(cacheMissMatch);

    this.methodsCache.saveToFile();
  }

  private async guard() {
    // versions in package.jsons should be synced
    // throw detailed error if something missing
  }
}
