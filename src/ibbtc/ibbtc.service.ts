import { BigNumber, ethers, Overrides } from 'ethers';

import { TransactionStatus } from '../config';
import { Network } from '../config/enums/network.enum';
import {
  GeneralVaultZap,
  IbbtcCore__factory,
  IbbtcTokenZap,
  RenVaultZap,
  RenVaultZap__factory,
} from '../contracts';
import { Ibbtc__factory } from '../contracts/factories/Ibbtc__factory';
import { Ibbtc } from '../contracts/Ibbtc';
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
export const REN_VAULT_ZAP = ethers.utils.getAddress(
  '0x41671BA1abcbA387b9b2B752c205e22e916BE6e3',
);
export const GENERAL_VAULT_ZAP = ethers.utils.getAddress(
  '0x27Fb47B9Fb32B9cF660C4E0128bE0f4e883f3df1',
);
export const TOKEN_ZAP = ethers.utils.getAddress(
  '0xe8E40093017A3A55B5c2BC3E9CA6a4d208c07734',
);

export class ibBTCService extends Service {
  private _ibBTC?: Ibbtc;
  private _renVaultZap?: RenVaultZap;
  private _generalVaultZap?: GeneralVaultZap;
  private _ibbtcTokenZap?: IbbtcTokenZap;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    if (this.config.network === Network.Ethereum) {
      this._ibBTC = Ibbtc__factory.connect(IBBTC_ADDRESS, this.connector);
      this._renVaultZap = RenVaultZap__factory.connect(
        REN_VAULT_ZAP,
        this.connector,
      );
    }
  }

  get ibBTC(): Ibbtc {
    if (!this._ibBTC) {
      throw new Error(`ibBTC is not defined for ${this.config.network}`);
    }
    return this._ibBTC;
  }

  get renVaultZap(): RenVaultZap {
    if (!this._renVaultZap) {
      throw new Error(
        `Ren Vault Zap is not defined for ${this.config.network}`,
      );
    }
    return this._renVaultZap;
  }

  get ibbtcTokenZap(): IbbtcTokenZap {
    if (!this._ibbtcTokenZap) {
      throw new Error(
        `ibBTC Token Zap is not defined for ${this.config.network}`,
      );
    }
    return this._ibbtcTokenZap;
  }

  get generalVaultZap(): GeneralVaultZap {
    if (!this._generalVaultZap) {
      throw new Error(
        `General Vault Zap is not defined for ${this.config.network}`,
      );
    }
    return this._generalVaultZap;
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

  async estimateMint(amount: BigNumber): Promise<IbBtcMintActionResults> {
    const [bbtc, fee] = await this.renVaultZap.calcMint(0, amount);
    return {
      bbtc,
      fee,
    };
  }

  async estimateRedeem(amount: BigNumber): Promise<IbBtcRedeemActionResults> {
    const [sett, fee, max] = await this.renVaultZap.calcRedeem(0, amount);
    return {
      sett,
      fee,
      max,
    };
  }

  async mint(options: IbBtcActionOptions): Promise<TransactionStatus> {
    if (!this.address || !this.sdk.signer) {
      this.error('Failed to mint ibBTC, requires an active signer');
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
          spender: REN_VAULT_ZAP,
        });

      if (allowanceTransactionStatus !== TransactionStatus.Success) {
        return result;
      }

      const tokenInfo = await this.sdk.tokens.loadToken(token);

      if (onTransferPrompt) {
        onTransferPrompt({ token: tokenInfo.name, amount });
      }
      const zapType = this.#getZapType(token);
      let mintTx;
      if (zapType === IbBtcZapType.Ren) {
        mintTx = await this.renVaultZap.mint(0, amount, [], { ...overrides });
      } else if (zapType === IbBtcZapType.Vault) {
        const poolId = ZAP_POOL_IDS[token];
        const minOut = amount;
        mintTx = await this.generalVaultZap.mint(amount, poolId, minOut);
      } else {
        const { poolId, idx } = await this.ibbtcTokenZap.calcMint(
          token,
          amount,
        );
        mintTx = await this.ibbtcTokenZap.mint(
          token,
          amount,
          poolId,
          idx,
          amount,
        );
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
          spender: REN_VAULT_ZAP,
        });

      if (allowanceTransactionStatus !== TransactionStatus.Success) {
        return result;
      }

      const tokenInfo = await this.sdk.tokens.loadToken(token);

      if (onTransferPrompt) {
        onTransferPrompt({ token: tokenInfo.name, amount });
      }
      const redeemTx = await this.renVaultZap.redeem(0, amount, {
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
    if (ZAP_SUPPORTED_TOKENS[IbBtcZapType.Ren].includes(tokenAddress)) {
      return IbBtcZapType.Ren;
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
