import { BigNumber, ethers, Overrides } from 'ethers';

import { TransactionStatus } from '../config';
import { Network } from '../config/enums/network.enum';
import {
  BadgerVaultPeak,
  BadgerVaultPeak__factory,
  IbbtcCore__factory,
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
} from '.';
import { IbBtcActionOptions } from './interfaces';

export const IBBTC_ADDRESS = ethers.utils.getAddress(
  '0xc4e15973e6ff2a35cc804c2cf9d2a1b817a8b40f',
);
export const REN_VAULT_ZAP = ethers.utils.getAddress(
  '0x41671BA1abcbA387b9b2B752c205e22e916BE6e3',
);

export class ibBTCService extends Service {
  private _ibBTC?: Ibbtc;
  private _vaultPeak?: BadgerVaultPeak;

  constructor(sdk: BadgerSDK) {
    super(sdk);
    this.init();
  }

  get ibBTC(): Ibbtc {
    if (!this._ibBTC) {
      throw new Error(`ibBTC is not defined for ${this.config.network}`);
    }
    return this._ibBTC;
  }

  get vaultPeak(): BadgerVaultPeak {
    if (!this._vaultPeak) {
      throw new Error(
        `BadgerVaultPeak is not defined for ${this.config.network}`,
      );
    }
    return this._vaultPeak;
  }

  async getPricePerFullShare(overrides: Overrides): Promise<number> {
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
    const [bbtc, fee] = await this.vaultPeak.calcMint(0, amount);
    return {
      bbtc,
      fee,
    };
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
      const mintTx = await this.vaultPeak.mint(0, amount, [], { ...overrides });
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
      const redeemTx = await this.vaultPeak.redeem(0, amount, { ...overrides });
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

  private init() {
    if (this.config.network !== Network.Ethereum) {
      return;
    }
    this._ibBTC = Ibbtc__factory.connect(IBBTC_ADDRESS, this.connector);
    this._vaultPeak = BadgerVaultPeak__factory.connect(
      REN_VAULT_ZAP,
      this.connector,
    );
  }
}
