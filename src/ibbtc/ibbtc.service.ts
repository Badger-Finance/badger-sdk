import { BigNumber, ethers, Overrides } from 'ethers';

import { TransactionStatus } from '../config';
import { Network } from '../config/enums/network.enum';
import {
  IbbtcCore__factory,
  TokenZap__factory,
  VaultPeak,
  VaultPeak__factory,
  VaultZap,
  VaultZap__factory,
} from '../contracts';
import { Ibbtc__factory } from '../contracts/factories/Ibbtc__factory';
import { Ibbtc } from '../contracts/Ibbtc';
import { TokenZap } from '../contracts/TokenZap';
import { BadgerSDK } from '../sdk';
import { Service } from '../service';
import { formatBalance } from '../tokens/tokens.utils';
import {
  IbBtcMintActionResults,
  IbBtcMintFees,
  IbBtcRedeemActionResults,
  IbBtcZapType,
} from '.';
import { ZAP_POOL_IDS, ZAP_SUPPORTED_TOKENS } from './ibbtc.config';
import { IbBtcActionOptions } from './interfaces';

export const IBBTC_ADDRESS = ethers.utils.getAddress(
  '0xc4e15973e6ff2a35cc804c2cf9d2a1b817a8b40f',
);
export const VAULT_PEAK = ethers.utils.getAddress(
  '0x41671BA1abcbA387b9b2B752c205e22e916BE6e3',
);
export const VAULT_ZAP = ethers.utils.getAddress(
  '0x27Fb47B9Fb32B9cF660C4E0128bE0f4e883f3df1',
);
export const TOKEN_ZAP = ethers.utils.getAddress(
  '0xe8E40093017A3A55B5c2BC3E9CA6a4d208c07734',
);

export class ibBTCService extends Service {
  private _ibBTC?: Ibbtc;
  private _vaultPeak?: VaultPeak;
  private _vaultZap?: VaultZap;
  private _tokenZap?: TokenZap;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    if (this.config.network === Network.Ethereum) {
      this._ibBTC = Ibbtc__factory.connect(IBBTC_ADDRESS, this.connector);
      this._vaultPeak = VaultPeak__factory.connect(VAULT_PEAK, this.connector);
      this._vaultZap = VaultZap__factory.connect(VAULT_ZAP, this.connector);
      this._tokenZap = TokenZap__factory.connect(TOKEN_ZAP, this.connector);
    }
  }

  get ibBTC(): Ibbtc {
    if (!this._ibBTC) {
      throw new Error(`ibBTC is not defined for ${this.config.network}`);
    }
    return this._ibBTC;
  }

  get vaultPeak(): VaultPeak {
    if (!this._vaultPeak) {
      throw new Error(
        `ibBTC Vault Peak is not defined for ${this.config.network}`,
      );
    }
    return this._vaultPeak;
  }

  get tokenZap(): TokenZap {
    if (!this._tokenZap) {
      throw new Error(
        `ibBTC Token Zap is not defined for ${this.config.network}`,
      );
    }
    return this._tokenZap;
  }

  get vaultZap(): VaultZap {
    if (!this._vaultZap) {
      throw new Error(
        `ibBTC Vault Zap is not defined for ${this.config.network}`,
      );
    }
    return this._vaultZap;
  }

  async getPricePerFullShare(overrides?: Overrides): Promise<number> {
    if (!this.ibBTC) {
      throw new Error(`ibBTC is not defined on ${this.config.network}`);
    }
    const [pricePerFullShare, token] = await Promise.all([
      this.ibBTC.pricePerShare({ ...overrides }),
      this.sdk.tokens.loadToken(this.ibBTC.address),
    ]);
    return formatBalance(pricePerFullShare, token.decimals);
  }

  async getFees(): Promise<IbBtcMintFees> {
    const coreAddress = await this.ibBTC.core();
    const ibbtcCore = IbbtcCore__factory.connect(coreAddress, this.connector);
    const [mint, redeem] = await Promise.all([
      ibbtcCore.mintFee(),
      ibbtcCore.redeemFee(),
    ]);
    const mintFee = mint.toNumber() / 100;
    const redeemFee = redeem.toNumber() / 100;
    return {
      mintFee,
      redeemFee,
    };
  }

  async estimateMint(
    token: string,
    amount: BigNumber,
  ): Promise<IbBtcMintActionResults> {
    const zapType = this.#getZapType(token);

    if (zapType === IbBtcZapType.Peak) {
      const [bbtc, fee] = await this.vaultPeak.calcMint(0, amount);
      return {
        bbtc,
        fee,
      };
    } else if (zapType === IbBtcZapType.Vault) {
      const poolId = ZAP_POOL_IDS[token];
      const bbtc = await this.vaultZap.calcMint(amount, poolId);
      return {
        bbtc,
        fee: bbtc.div(1000),
      };
    } else {
      const { bBTC, fee } = await this.tokenZap.calcMint(token, amount);
      return {
        bbtc: bBTC,
        fee,
      };
    }
  }

  async estimateRedeem(amount: BigNumber): Promise<IbBtcRedeemActionResults> {
    const [sett, fee, max] = await this.vaultPeak.calcRedeem(0, amount);
    return {
      sett,
      fee,
      max,
    };
  }

  async mint(options: IbBtcActionOptions): Promise<TransactionStatus> {
    const {
      token,
      amount,
      overrides,
      onTransferPrompt,
      onTransferSigned,
      onTransferSuccess,
      onRejection,
      onError,
    } = options;
    let result = TransactionStatus.UserConfirmation;

    try {
      const zapType = this.#getZapType(token);

      let spender;
      if (zapType === IbBtcZapType.Peak) {
        spender = this.vaultPeak.address;
      } else if (zapType === IbBtcZapType.Vault) {
        spender = this.vaultZap.address;
      } else {
        spender = this.tokenZap.address;
      }

      const allowanceTransactionStatus =
        await this.sdk.tokens.verifyOrIncreaseAllowance({
          ...options,
          spender,
        });

      if (allowanceTransactionStatus !== TransactionStatus.Success) {
        return result;
      }

      const tokenInfo = await this.sdk.tokens.loadToken(token);

      if (onTransferPrompt) {
        onTransferPrompt({ token: tokenInfo.name, amount });
      }
      let mintTx;
      if (zapType === IbBtcZapType.Peak) {
        mintTx = await this.vaultPeak.mint(0, amount, [], { ...overrides });
      } else if (zapType === IbBtcZapType.Vault) {
        const poolId = ZAP_POOL_IDS[token];
        const minOut = amount;
        mintTx = await this.vaultZap.mint(amount, poolId, minOut);
      } else {
        const { poolId, idx } = await this.tokenZap.calcMint(token, amount);
        mintTx = await this.tokenZap.mint(token, amount, poolId, idx, amount);
      }
      result = TransactionStatus.Pending;
      if (onTransferSigned) {
        onTransferSigned({
          token: tokenInfo.name,
          amount,
          transaction: mintTx,
        });
      }
      const receipt = await mintTx.wait();
      result = TransactionStatus.Success;
      if (onTransferSuccess) {
        onTransferSuccess({ token: tokenInfo.name, amount, receipt });
      }
    } catch (err) {
      // TODO: refactor this common function pattern to a harness
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

  async redeem(options: IbBtcActionOptions) {
    if (!this.address || !this.sdk.signer) {
      this.error('Failed to redeem ibBTC, requires an active signer');
      return TransactionStatus.Failure;
    }

    const {
      token,
      amount,
      overrides,
      onTransferPrompt,
      onTransferSigned,
      onTransferSuccess,
      onRejection,
      onError,
    } = options;
    let result = TransactionStatus.UserConfirmation;

    try {
      const allowanceTransactionStatus =
        await this.sdk.tokens.verifyOrIncreaseAllowance({
          ...options,
          token: IBBTC_ADDRESS,
          spender: VAULT_ZAP,
        });

      if (allowanceTransactionStatus !== TransactionStatus.Success) {
        return result;
      }

      const tokenInfo = await this.sdk.tokens.loadToken(token);

      if (onTransferPrompt) {
        onTransferPrompt({ token: tokenInfo.name, amount });
      }
      const redeemTx = await this.vaultPeak.redeem(0, amount, {
        ...overrides,
      });
      result = TransactionStatus.Pending;
      if (onTransferSigned) {
        onTransferSigned({
          token: tokenInfo.name,
          amount,
          transaction: redeemTx,
        });
      }
      const receipt = await redeemTx.wait();
      result = TransactionStatus.Success;
      if (onTransferSuccess) {
        onTransferSuccess({ token: tokenInfo.name, amount, receipt });
      }
    } catch (err) {
      // TODO: refactor this common function pattern to a harness
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

  #getZapType(token: string): IbBtcZapType {
    const tokenAddress = ethers.utils.getAddress(token);
    if (ZAP_SUPPORTED_TOKENS[IbBtcZapType.Peak].includes(tokenAddress)) {
      return IbBtcZapType.Peak;
    }
    if (ZAP_SUPPORTED_TOKENS[IbBtcZapType.Vault].includes(tokenAddress)) {
      return IbBtcZapType.Vault;
    }
    if (ZAP_SUPPORTED_TOKENS[IbBtcZapType.Token].includes(tokenAddress)) {
      return IbBtcZapType.Token;
    }
    throw new Error(`${tokenAddress} not a supported zap token!`);
  }
}
