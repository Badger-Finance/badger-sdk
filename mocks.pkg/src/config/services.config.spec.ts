import { Network } from '../../../src';
import { ethArgsConfig } from './eth.config';
import { ServicesConfig } from './services.config';

describe('ServicesConfig', () => {
  it('should create an instance and return valid args config', () => {
    const config = new ServicesConfig(Network.Ethereum);
    expect(config.servicesArgsMap).toEqual(ethArgsConfig);
  });
});
