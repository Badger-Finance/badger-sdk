import { BigNumber, ethers } from 'ethers';

import { TransactionStatus } from '../config';
import { Erc20, Erc20__factory } from '../contracts';
import { Service } from '../service';
import { IncreaseAllowanceOptions } from './interfaces/increase-allowance-options.interface';
import { RevokeAllowanceOptions } from './interfaces/revoke-allowance-options.interface';
import { Token } from './interfaces/token.interface';

export class TokensService extends Service {
  private tokens: Record<string, Token> = {};
  private allowances: Record<string, BigNumber> = {};

  async revoke(options: RevokeAllowanceOptions): Promise<TransactionStatus> {
    return this.increaseAllowance({
      ...options,
      amount: ethers.constants.Zero,
    });
  }

  async verifyOrIncreaseAllowance(
    options: IncreaseAllowanceOptions,
  ): Promise<TransactionStatus> {
    if (!this.address) {
      return TransactionStatus.Failure;
    }

    let allowance: BigNumber;
    const cachedAllowance =
      this.allowances[ethers.utils.getAddress(options.token)];
    if (cachedAllowance) {
      allowance = cachedAllowance;
    } else {
      allowance = await this.loadAllowance(options.token, options.spender);
    }

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
    if (!this.signer) {
      if (onError) {
        onError('Unable to increase allowance, no signer provided!');
      }
      return TransactionStatus.Failure;
    }

    let result = TransactionStatus.UserConfirmation;

    try {
      const tokenContract = Erc20__factory.connect(token, this.signer);
      if (onApprovePrompt) {
        onApprovePrompt();
      }
      const tx = await tokenContract.increaseAllowance(spender, amount, {
        ...overrides,
      });
      result = TransactionStatus.Pending;
      if (onApproveSigned) {
        onApproveSigned();
      }
      await tx.wait();
      result = TransactionStatus.Success;
      if (onApproveSuccess) {
        onApproveSuccess();
      }
      this.allowances[ethers.utils.getAddress(token)] = amount;
    } catch (err) {
      if (result !== TransactionStatus.UserConfirmation) {
        result = TransactionStatus.Failure;
        this.error(err);
        if (onError) {
          onError(err);
        }
      } else {
        result = TransactionStatus.Canceled;
        if (onRejection) {
          onRejection();
        }
      }
    }

    return result;
  }

  async loadTokens(tokens: string[]): Promise<Record<string, Token>> {
    return Object.fromEntries(
      await Promise.all(
        tokens.map(async (addr) => {
          const token = await this.loadToken(addr);
          return [token.address, token];
        }),
      ),
    );
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
    if (!this.address) {
      return BigNumber.from(0);
    }
    const targetAddress = owner ?? this.address;
    try {
      const checksumAddress = ethers.utils.getAddress(token);
      const contract = Erc20__factory.connect(checksumAddress, this.provider);
      const balance = await contract.balanceOf(targetAddress);
      return balance;
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
    if (!this.address) {
      return BigNumber.from(0);
    }
    const targetAddress = owner ?? this.address;
    try {
      const checksumAddress = ethers.utils.getAddress(token);
      const contract = Erc20__factory.connect(checksumAddress, this.provider);
      const allowance = await contract.allowance(targetAddress, spender);
      this.allowances[checksumAddress] = allowance;
      return allowance;
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
