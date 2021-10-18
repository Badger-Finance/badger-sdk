import { ethers } from 'ethers';
import { Erc20__factory } from '../contracts';
import { BadgerSDK } from '../sdk';
import { Service } from '../service';
import { Token } from './interfaces/token.interface';

export class TokensService extends Service {
  private tokens: Record<string, Token>;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    this.tokens = {};
  }

  async loadTokens(addresses: string[]): Promise<Record<string, Token>> {
    const tokens = await Promise.all(
      addresses.map(async (addr) => this.loadToken(addr)),
    );
    return Object.fromEntries(tokens.map((token) => [token.address, token]));
  }

  async loadToken(address: string): Promise<Token> {
    const checksumAddress = ethers.utils.getAddress(address);
    if (!this.tokens[checksumAddress]) {
      const token = Erc20__factory.connect(checksumAddress, this.provider);
      const [name, symbol, decimals] = await Promise.all([
        token.name(),
        token.symbol(),
        token.decimals(),
      ]);
      this.tokens[checksumAddress] = {
        address: checksumAddress,
        name,
        symbol,
        decimals,
      };
    }
    return this.tokens[checksumAddress];
  }
}
