import { BadgerSDK } from './sdk';

export * from './api';
export * from './config';
export * from './digg';
export * from './ibbtc';
export * from './tokens';
export * from './vaults';

// TODO: fix namespace resolution issues to expose default contract factories
// export * from './contracts';

export { BadgerSDK };

export default BadgerSDK;
