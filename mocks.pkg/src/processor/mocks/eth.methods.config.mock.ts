import { Network } from '../../../../src';
import { SdkServices } from '../../enums';

export const ethMethodsConfigMock = {
  [Network.Ethereum]: {
    servicesArgsMap: {
      [SdkServices.Vaults]: {
        method1: {
          args: ['firstArg', null],
          ignore: false,
        },
        method2: {
          args: [null, 'secondArg'],
          ignore: false,
        },
      },
    },
  },
};
