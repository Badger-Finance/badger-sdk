import { BigNumber, ethers } from 'ethers';
import { Erc20, Erc20__factory } from '../contracts';
import { Service } from '../service';
import { Token } from './interfaces/token.interface';

export class TokensService extends Service {
  private tokens: Record<string, Token> = {};

  async loadTokens(tokens: string[]): Promise<Record<string, Token>> {
    const tokenInfo: Record<string, Token> = {};
    await Promise.all(
      tokens.map(async (addr) => {
        try {
          const token = await this.loadToken(addr);
          tokenInfo[token.address] = token;
        } catch (err) {
          this.error({ message: `Failed to load ${addr}`, err });
        }
      }),
    );
    return tokenInfo;
  }

  async loadToken(token: string): Promise<Token> {
    const checksumAddress = ethers.utils.getAddress(token);
    if (!this.tokens[checksumAddress]) {
      const token = Erc20__factory.connect(checksumAddress, this.sdk.provider);
      const [name, symbol, decimals] = await Promise.all([
        this.#tryName(token),
        this.#trySymbol(token),
        this.#tryDecimals(token),
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

  async loadBalances(
    tokens: string[],
    owner?: string,
  ): Promise<Record<string, BigNumber>> {
    const balanceEntries = await Promise.all(
      tokens.map(async (addr) => {
        const balance = await this.loadBalance(addr, owner);
        return [addr, balance];
      }),
    );
    return Object.fromEntries(balanceEntries);
  }

  async loadBalance(token: string, owner?: string): Promise<BigNumber> {
    if (!this.address && !owner) {
      return BigNumber.from(0);
    }
    const targetAddress = owner ?? this.address;
    if (!targetAddress) {
      // This is not possible, but typescript
      throw new Error('Undefined loadBalance target address');
    }
    try {
      const checksumAddress = ethers.utils.getAddress(token);
      const contract = Erc20__factory.connect(checksumAddress, this.provider);
      return contract.balanceOf(targetAddress);
    } catch (err) {
      this.error(err);
      return BigNumber.from(0);
    }
  }

  async #tryName(token: Erc20): Promise<string> {
    try {
      const name = await token.name();
      return name;
    } catch {
      return '';
    }
  }

  async #trySymbol(token: Erc20): Promise<string> {
    try {
      const symbol = await token.symbol();
      return symbol;
    } catch {
      return '';
    }
  }

  async #tryDecimals(token: Erc20): Promise<number> {
    try {
      const decimals = await token.decimals();
      return decimals;
    } catch {
      return 18;
    }
  }
}
