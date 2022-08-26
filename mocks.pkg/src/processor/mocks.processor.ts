import sdkPkgJSON from '../../../package.json';
import { BadgerSDK, Network } from '../../../src';
import mocksPkgJSON from '../../package.json';
import { MethodsCache } from '../cache';
import { ServicesConfig } from '../config';
import { ServicesMethodsList } from '../config/struct.types.config';
import { relevantNetworks } from '../constants';
import { SdkServices } from '../enums';
import { BaseFsIo } from '../fs.io/base.fs.io';
import { RelevantNetworks } from '../types';
import { ProcessorError } from './base.error.processor';
import { ProcessorClsArgs, ProcessorNetworksConfigMap } from './cls.types.processor';
import { ROOT_DIR } from './constants.processor';

export class MocksProcessor {
  static readonly LAUNCH_ACTION = 'launch';
  static readonly GUARD_ACTION = 'guard';

  protected readonly rootDir = ROOT_DIR;

  protected readonly action: string;
  protected readonly forced: boolean;

  protected readonly networks: RelevantNetworks[] = relevantNetworks;

  protected methodsCache: MethodsCache;
  protected fsIo: BaseFsIo;

  protected configs: ProcessorNetworksConfigMap = {};

  constructor({ action, forced }: ProcessorClsArgs) {
    this.action = action;
    this.forced = forced;

    this.methodsCache = new MethodsCache();
    this.fsIo = new BaseFsIo(this.rootDir);

    for (const network of this.networks) {
      this.configs[network] = new ServicesConfig(network);
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

  protected async loadAndSave(cacheMissMatch: ServicesMethodsList) {
    console.log('Responses loading and saving to .json files');

    for (const network of this.networks) {
      const sdk = new BadgerSDK({
        network,
        provider: MocksProcessor.getNodeRpcUrl(network),
        baseURL: 'https://staging-api.badger.com/',
      });

      await sdk.ready();

      const methodArgsConfig = <ServicesConfig>this.configs[network];

      const services = this.forced ? this.methodsCache.getRelevantServicesMethods() : cacheMissMatch;

      for (const service of Object.keys(services)) {
        if (service === 'length') continue;

        const methods = this.forced ? services[<SdkServices>service] : cacheMissMatch[<SdkServices>service];

        if (!methods) return;

        for (const methodName of <SdkServices[]>methods) {
          try {
            const { args, ignore } = methodArgsConfig.servicesArgsMap[<SdkServices>service][methodName];

            if (ignore) continue;

            console.log(
              `Loading and writing chain:[${network}] service:[${service}] method:[${methodName}] \n`,
              `With args: ${JSON.stringify(args, null, 2)}`,
            );
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore It`s rly hard to type this, and even if we do
            // there be a lot of manual work, need to avoid that
            const response = await sdk[service][methodName](...args);

            this.fsIo.write(methodName, response, `${network}/${service}`);
          } catch (err) {
            console.error(`Failed to save response for ${methodName}`);
            throw err;
          }
        }
      }
    }
  }

  protected static getNodeRpcUrl(network: RelevantNetworks): string {
    let networkForEnvVar = network.toUpperCase();

    if (network === Network.BinanceSmartChain) {
      networkForEnvVar = 'BINANCE';
    }

    const envVarName = `${networkForEnvVar}_RPC_NODE`;
    const rpcUrl = process.env[envVarName];

    if (!rpcUrl) throw new ProcessorError(`ENV var ${envVarName} not found`);

    return rpcUrl;
  }

  protected async launch() {
    console.log('Mock generator launch action started');

    const cacheMissMatch = this.methodsCache.getMissMatch();

    if (cacheMissMatch.length === 0 && !this.forced) {
      console.log('Everything is up to date. Finishing');
      return;
    }

    await this.loadAndSave(cacheMissMatch);

    this.methodsCache.saveToFile();

    console.log('Mock generator launch action finished');
  }

  protected async guard() {
    console.log('Mock generator guard action started');

    if (mocksPkgJSON.version !== sdkPkgJSON.version) {
      throw new ProcessorError(`
        Versions of mocks.pkg and main should be equal:
        mocksPkgJSON.version - ${mocksPkgJSON.version} !=
        sdkPkgJSON.version - ${sdkPkgJSON.version}
      `);
    }

    const notImplementedServ: string[] = [];
    const notImplementedMethods: string[] = [];

    for (const network of this.networks) {
      const relevantServices = this.methodsCache.getRelevantServicesMethods();
      const methodArgsConfig = (<ServicesConfig>this.configs[network]).servicesArgsMap;

      for (const service of Object.keys(relevantServices)) {
        if (!(service in methodArgsConfig)) {
          notImplementedServ.push(`${network}.${service}`);
          continue;
        }

        const relevantMethods = relevantServices[<SdkServices>service];
        const cfgMethods = methodArgsConfig[<SdkServices>service];

        if (!relevantMethods) continue;

        for (const method of relevantMethods) {
          if (!(method in cfgMethods)) notImplementedMethods.push(`${network}.${service}.${method}`);
        }
      }
    }

    if (notImplementedServ.length > 0)
      throw new ProcessorError(`
      Found not implemented services in cfg ${JSON.stringify(notImplementedServ, null, 2)}
    `);

    if (notImplementedMethods.length > 0)
      throw new ProcessorError(`
      Found not implemented methods in cfg ${JSON.stringify(notImplementedMethods, null, 2)}
    `);

    console.log('Mock generator guard action finished');
  }
}
