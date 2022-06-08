import { BigNumber, ethers } from 'ethers';
import { TransactionStatus } from '../config';
import { Erc20, Erc20__factory } from '../contracts';
import { Service } from '../service';
import { IncreaseAllowanceOptions } from './interfaces/increase-allowance-options.interface';
import { Token } from './interfaces/token.interface';

export class TokensService extends Service {
  private tokens: Record<string, Token> = {};

  async revoke(token: string, spender: string): Promise<TransactionStatus> {
    let result = TransactionStatus.UserConfirmation;
    try {
      const tokenContract = Erc20__factory.connect(token, this.sdk.provider);
      const tx = await tokenContract.approve(spender, 0);
      result = TransactionStatus.Pending;
      await tx.wait();
      result = TransactionStatus.Success;
    } catch (err) {
      if (result !== TransactionStatus.UserConfirmation) {
        this.error(err);
      }
      result = TransactionStatus.Failure;
    }
    return result;
  }

  async verifyOrIncreaseAllowance(
    options: IncreaseAllowanceOptions,
  ): Promise<TransactionStatus> {
    if (!this.address) {
      return TransactionStatus.Failure;
    }
    const token = Erc20__factory.connect(options.token, this.provider);
    const allowance = await token.allowance(this.address, options.token);
    if (options.amount.gt(allowance)) {
      return this.increaseAllowance(options);
    }
    return TransactionStatus.Success;
  }

  async increaseAllowance({
    token,
    spender,
    amount = ethers.constants.MaxUint256,
    overrides,
    onError,
    onRejection,
    onApprovePrompt,
    onApproveSigned,
    onApproveSuccess,
  }: IncreaseAllowanceOptions): Promise<TransactionStatus> {
    let result = TransactionStatus.UserConfirmation;
    try {
      const tokenContract = Erc20__factory.connect(token, this.sdk.provider);
      if (onApprovePrompt) {
        onApprovePrompt();
      }
      const tx = await tokenContract.increaseAllowance(spender, amount, overrides);
      result = TransactionStatus.Pending;
      if (onApproveSigned) {
        onApproveSigned();
      }
      await tx.wait();
      result = TransactionStatus.Success;
      if (onApproveSuccess) {
        onApproveSuccess();
      }
    } catch (err) {
      if (result !== TransactionStatus.UserConfirmation) {
        this.error(err);
        if (onError) {
          onError(err);
        }
        return TransactionStatus.Failure;
      }
      if (onRejection) {
        onRejection();
      }
      result = TransactionStatus.Canceled;
    }
    return result;
  }

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

  async loadAllowances(
    tokens: string[],
    spender: string,
    owner?: string,
  ): Promise<Record<string, BigNumber>> {
    const balanceEntries = await Promise.all(
      tokens.map(async (addr) => {
        const balance = await this.loadAllowance(addr, spender, owner);
        return [addr, balance];
      }),
    );
    return Object.fromEntries(balanceEntries);
  }

  async loadAllowance(
    token: string,
    spender: string,
    owner?: string,
  ): Promise<BigNumber> {
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
      return contract.allowance(targetAddress, spender);
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
