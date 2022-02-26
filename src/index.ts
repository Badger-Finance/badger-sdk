import { BadgerSDK } from './sdk';

export * from './api';
export * from './config';
// TODO: fix namespace resolution issues to expose default contract factories
// export * from './contracts';
export * from './digg';
export * from './ibbtc';
export * from './registry';
export * from './rewards';
export * from './tokens';
export * from './utils';
export * from './vaults';

export { BadgerSDK };

export default BadgerSDK;
