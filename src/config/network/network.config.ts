import { Network } from "../enums/network.enum";

export abstract class NetworkConfig {
  constructor(
    readonly name: string,
    readonly network: Network,
    readonly id: number,
  ) {}
}
