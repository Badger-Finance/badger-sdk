import { BigNumber, ethers } from 'ethers';
import { Erc20__factory } from '../contracts';
import { Service } from '../service';
import { Token } from './interfaces/token.interface';

export class TokensService extends Service {
  private tokens: Record<string, Token> = {};

  async loadTokens(addresses: string[]): Promise<Record<string, Token>> {
    const tokens = await Promise.all(
      addresses.map(async (addr) => this.loadToken(addr)),
    );
    return Object.fromEntries(tokens.map((token) => [token.address, token]));
  }

  async loadToken(address: string): Promise<Token> {
    const checksumAddress = ethers.utils.getAddress(address);
    if (!this.tokens[checksumAddress]) {
      const token = Erc20__factory.connect(checksumAddress, this.sdk.provider);
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

  async loadBalances(addresses: string[]): Promise<Record<string, BigNumber>> {
    const balanceEntries = await Promise.all(
      addresses.map(async (addr) => {
        const balance = await this.loadBalance(addr);
        return [addr, balance];
      }),
    );
    return Object.fromEntries(balanceEntries);
  }

  async loadBalance(address: string): Promise<BigNumber> {
    if (!this.address) {
      return BigNumber.from(0);
    }
    try {
      const checksumAddress = ethers.utils.getAddress(address);
      const token = Erc20__factory.connect(checksumAddress, this.provider);
      return token.balanceOf(this.address);
    } catch (err) {
      console.error(err);
      return BigNumber.from(0);
    }
  }
}
