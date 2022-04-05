import { Network } from '../../src';

export type cliArgs = Array<string>;

export type RelevantNetworks = Exclude<Network, Network.Local | Network.xDai>;
