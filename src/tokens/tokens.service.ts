import { BigNumber, ethers } from 'ethers';
import { Erc20, Erc20__factory } from '../contracts';
import { Service } from '../service';
import { Token } from './interfaces/token.interface';

export class TokensService extends Service {
  private tokens: Record<string, Token> = {};

  async loadTokens(addresses: string[]): Promise<Record<string, Token>> {
    const tokens: Record<string, Token> = {};
    await Promise.all(
      addresses.map(async (addr) => {
        try {
          const token = await this.loadToken(addr);
          tokens[token.address] = token;
        } catch (err) {
          console.error({ message: `Failed to load ${addr}`, err });
        }
      }),
    );
    return tokens;
  }

  async loadToken(address: string): Promise<Token> {
    const checksumAddress = ethers.utils.getAddress(address);
    if (!this.tokens[checksumAddress]) {
      const token = Erc20__factory.connect(checksumAddress, this.sdk.provider);
      const [name, symbol, decimals] = await Promise.all([
        this.tryName(token),
        this.trySymbol(token),
        this.tryDecimals(token),
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

  private async tryName(token: Erc20): Promise<string> {
    try {
      const name = await token.name();
      return name;
    } catch {
      return '';
    }
  }

  private async trySymbol(token: Erc20): Promise<string> {
    try {
      const symbol = await token.symbol();
      return symbol;
    } catch {
      return '';
    }
  }

  private async tryDecimals(token: Erc20): Promise<number> {
    try {
      const decimals = await token.decimals();
      return decimals;
    } catch {
      return 18;
    }
  }
}
