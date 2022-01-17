/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import { Listener, Provider } from '@ethersproject/providers';
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export declare namespace BaseStrategy {
  export type TokenAmountStruct = { token: string; amount: BigNumberish };

  export type TokenAmountStructOutput = [string, BigNumber] & {
    token: string;
    amount: BigNumber;
  };
}

export interface StrategyV15Interface extends utils.Interface {
  contractName: 'StrategyV15';
  functions: {
    'LENDING_POOL()': FunctionFragment;
    'MAX_BPS()': FunctionFragment;
    'REWARD()': FunctionFragment;
    'REWARDS_CONTRACT()': FunctionFragment;
    'ROUTER()': FunctionFragment;
    '__BaseStrategy_init(address)': FunctionFragment;
    'aToken()': FunctionFragment;
    'autoCompoundRatio()': FunctionFragment;
    'balanceOf()': FunctionFragment;
    'balanceOfPool()': FunctionFragment;
    'balanceOfRewards()': FunctionFragment;
    'balanceOfWant()': FunctionFragment;
    'baseStrategyVersion()': FunctionFragment;
    'deposit()': FunctionFragment;
    'earn()': FunctionFragment;
    'emitNonProtectedToken(address)': FunctionFragment;
    'getName()': FunctionFragment;
    'getProtectedTokens()': FunctionFragment;
    'governance()': FunctionFragment;
    'guardian()': FunctionFragment;
    'harvest()': FunctionFragment;
    'initialize(address,address[1])': FunctionFragment;
    'isProtectedToken(address)': FunctionFragment;
    'isTendable()': FunctionFragment;
    'keeper()': FunctionFragment;
    'pause()': FunctionFragment;
    'paused()': FunctionFragment;
    'setWithdrawalMaxDeviationThreshold(uint256)': FunctionFragment;
    'strategist()': FunctionFragment;
    'tend()': FunctionFragment;
    'unpause()': FunctionFragment;
    'vault()': FunctionFragment;
    'want()': FunctionFragment;
    'withdraw(uint256)': FunctionFragment;
    'withdrawOther(address)': FunctionFragment;
    'withdrawToVault()': FunctionFragment;
    'withdrawalMaxDeviationThreshold()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'LENDING_POOL',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'MAX_BPS', values?: undefined): string;
  encodeFunctionData(functionFragment: 'REWARD', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'REWARDS_CONTRACT',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'ROUTER', values?: undefined): string;
  encodeFunctionData(
    functionFragment: '__BaseStrategy_init',
    values: [string],
  ): string;
  encodeFunctionData(functionFragment: 'aToken', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'autoCompoundRatio',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'balanceOf', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'balanceOfPool',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'balanceOfRewards',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'balanceOfWant',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'baseStrategyVersion',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'deposit', values?: undefined): string;
  encodeFunctionData(functionFragment: 'earn', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'emitNonProtectedToken',
    values: [string],
  ): string;
  encodeFunctionData(functionFragment: 'getName', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getProtectedTokens',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'governance',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'guardian', values?: undefined): string;
  encodeFunctionData(functionFragment: 'harvest', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, [string]],
  ): string;
  encodeFunctionData(
    functionFragment: 'isProtectedToken',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'isTendable',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'keeper', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pause', values?: undefined): string;
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'setWithdrawalMaxDeviationThreshold',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'strategist',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'tend', values?: undefined): string;
  encodeFunctionData(functionFragment: 'unpause', values?: undefined): string;
  encodeFunctionData(functionFragment: 'vault', values?: undefined): string;
  encodeFunctionData(functionFragment: 'want', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'withdrawOther',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'withdrawToVault',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'withdrawalMaxDeviationThreshold',
    values?: undefined,
  ): string;

  decodeFunctionResult(
    functionFragment: 'LENDING_POOL',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'MAX_BPS', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'REWARD', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'REWARDS_CONTRACT',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'ROUTER', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: '__BaseStrategy_init',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'aToken', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'autoCompoundRatio',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'balanceOfPool',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'balanceOfRewards',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'balanceOfWant',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'baseStrategyVersion',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'earn', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'emitNonProtectedToken',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'getName', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getProtectedTokens',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'governance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'guardian', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'harvest', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'isProtectedToken',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'isTendable', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'keeper', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pause', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setWithdrawalMaxDeviationThreshold',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'strategist', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tend', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'unpause', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'vault', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'want', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'withdrawOther',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'withdrawToVault',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'withdrawalMaxDeviationThreshold',
    data: BytesLike,
  ): Result;

  events: {
    'Debug(string,uint256)': EventFragment;
    'Paused(address)': EventFragment;
    'SetWithdrawalMaxDeviationThreshold(uint256)': EventFragment;
    'Unpaused(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Debug'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'SetWithdrawalMaxDeviationThreshold',
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment;
}

export type DebugEvent = TypedEvent<
  [string, BigNumber],
  { name: string; value: BigNumber }
>;

export type DebugEventFilter = TypedEventFilter<DebugEvent>;

export type PausedEvent = TypedEvent<[string], { account: string }>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type SetWithdrawalMaxDeviationThresholdEvent = TypedEvent<
  [BigNumber],
  { nawMaxDeviationThreshold: BigNumber }
>;

export type SetWithdrawalMaxDeviationThresholdEventFilter =
  TypedEventFilter<SetWithdrawalMaxDeviationThresholdEvent>;

export type UnpausedEvent = TypedEvent<[string], { account: string }>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export interface StrategyV15 extends BaseContract {
  contractName: 'StrategyV15';
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: StrategyV15Interface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    LENDING_POOL(overrides?: CallOverrides): Promise<[string]>;

    MAX_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;

    REWARD(overrides?: CallOverrides): Promise<[string]>;

    REWARDS_CONTRACT(overrides?: CallOverrides): Promise<[string]>;

    ROUTER(overrides?: CallOverrides): Promise<[string]>;

    __BaseStrategy_init(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    aToken(overrides?: CallOverrides): Promise<[string]>;

    autoCompoundRatio(overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOf(overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOfPool(overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOfRewards(overrides?: CallOverrides): Promise<
      [BaseStrategy.TokenAmountStructOutput[]] & {
        rewards: BaseStrategy.TokenAmountStructOutput[];
      }
    >;

    balanceOfWant(overrides?: CallOverrides): Promise<[BigNumber]>;

    baseStrategyVersion(overrides?: CallOverrides): Promise<[string]>;

    deposit(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    earn(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    emitNonProtectedToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getName(overrides?: CallOverrides): Promise<[string]>;

    getProtectedTokens(overrides?: CallOverrides): Promise<[string[]]>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    guardian(overrides?: CallOverrides): Promise<[string]>;

    harvest(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    initialize(
      _vault: string,
      _wantConfig: [string],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    isProtectedToken(
      token: string,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    isTendable(overrides?: CallOverrides): Promise<[boolean]>;

    keeper(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    setWithdrawalMaxDeviationThreshold(
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    strategist(overrides?: CallOverrides): Promise<[string]>;

    tend(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    vault(overrides?: CallOverrides): Promise<[string]>;

    want(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    withdrawOther(
      _asset: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    withdrawToVault(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    withdrawalMaxDeviationThreshold(
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;
  };

  LENDING_POOL(overrides?: CallOverrides): Promise<string>;

  MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;

  REWARD(overrides?: CallOverrides): Promise<string>;

  REWARDS_CONTRACT(overrides?: CallOverrides): Promise<string>;

  ROUTER(overrides?: CallOverrides): Promise<string>;

  __BaseStrategy_init(
    _vault: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  aToken(overrides?: CallOverrides): Promise<string>;

  autoCompoundRatio(overrides?: CallOverrides): Promise<BigNumber>;

  balanceOf(overrides?: CallOverrides): Promise<BigNumber>;

  balanceOfPool(overrides?: CallOverrides): Promise<BigNumber>;

  balanceOfRewards(
    overrides?: CallOverrides,
  ): Promise<BaseStrategy.TokenAmountStructOutput[]>;

  balanceOfWant(overrides?: CallOverrides): Promise<BigNumber>;

  baseStrategyVersion(overrides?: CallOverrides): Promise<string>;

  deposit(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  earn(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  emitNonProtectedToken(
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getName(overrides?: CallOverrides): Promise<string>;

  getProtectedTokens(overrides?: CallOverrides): Promise<string[]>;

  governance(overrides?: CallOverrides): Promise<string>;

  guardian(overrides?: CallOverrides): Promise<string>;

  harvest(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  initialize(
    _vault: string,
    _wantConfig: [string],
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  isProtectedToken(token: string, overrides?: CallOverrides): Promise<boolean>;

  isTendable(overrides?: CallOverrides): Promise<boolean>;

  keeper(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  setWithdrawalMaxDeviationThreshold(
    _threshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  strategist(overrides?: CallOverrides): Promise<string>;

  tend(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  vault(overrides?: CallOverrides): Promise<string>;

  want(overrides?: CallOverrides): Promise<string>;

  withdraw(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  withdrawOther(
    _asset: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  withdrawToVault(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  withdrawalMaxDeviationThreshold(
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  callStatic: {
    LENDING_POOL(overrides?: CallOverrides): Promise<string>;

    MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;

    REWARD(overrides?: CallOverrides): Promise<string>;

    REWARDS_CONTRACT(overrides?: CallOverrides): Promise<string>;

    ROUTER(overrides?: CallOverrides): Promise<string>;

    __BaseStrategy_init(
      _vault: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    aToken(overrides?: CallOverrides): Promise<string>;

    autoCompoundRatio(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfPool(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfRewards(
      overrides?: CallOverrides,
    ): Promise<BaseStrategy.TokenAmountStructOutput[]>;

    balanceOfWant(overrides?: CallOverrides): Promise<BigNumber>;

    baseStrategyVersion(overrides?: CallOverrides): Promise<string>;

    deposit(overrides?: CallOverrides): Promise<void>;

    earn(overrides?: CallOverrides): Promise<void>;

    emitNonProtectedToken(
      _token: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    getName(overrides?: CallOverrides): Promise<string>;

    getProtectedTokens(overrides?: CallOverrides): Promise<string[]>;

    governance(overrides?: CallOverrides): Promise<string>;

    guardian(overrides?: CallOverrides): Promise<string>;

    harvest(
      overrides?: CallOverrides,
    ): Promise<BaseStrategy.TokenAmountStructOutput[]>;

    initialize(
      _vault: string,
      _wantConfig: [string],
      overrides?: CallOverrides,
    ): Promise<void>;

    isProtectedToken(
      token: string,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    isTendable(overrides?: CallOverrides): Promise<boolean>;

    keeper(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    setWithdrawalMaxDeviationThreshold(
      _threshold: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    strategist(overrides?: CallOverrides): Promise<string>;

    tend(
      overrides?: CallOverrides,
    ): Promise<BaseStrategy.TokenAmountStructOutput[]>;

    unpause(overrides?: CallOverrides): Promise<void>;

    vault(overrides?: CallOverrides): Promise<string>;

    want(overrides?: CallOverrides): Promise<string>;

    withdraw(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    withdrawOther(_asset: string, overrides?: CallOverrides): Promise<void>;

    withdrawToVault(overrides?: CallOverrides): Promise<BigNumber>;

    withdrawalMaxDeviationThreshold(
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  filters: {
    'Debug(string,uint256)'(name?: null, value?: null): DebugEventFilter;
    Debug(name?: null, value?: null): DebugEventFilter;

    'Paused(address)'(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    'SetWithdrawalMaxDeviationThreshold(uint256)'(
      nawMaxDeviationThreshold?: null,
    ): SetWithdrawalMaxDeviationThresholdEventFilter;
    SetWithdrawalMaxDeviationThreshold(
      nawMaxDeviationThreshold?: null,
    ): SetWithdrawalMaxDeviationThresholdEventFilter;

    'Unpaused(address)'(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;
  };

  estimateGas: {
    LENDING_POOL(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;

    REWARD(overrides?: CallOverrides): Promise<BigNumber>;

    REWARDS_CONTRACT(overrides?: CallOverrides): Promise<BigNumber>;

    ROUTER(overrides?: CallOverrides): Promise<BigNumber>;

    __BaseStrategy_init(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    aToken(overrides?: CallOverrides): Promise<BigNumber>;

    autoCompoundRatio(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfPool(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfRewards(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOfWant(overrides?: CallOverrides): Promise<BigNumber>;

    baseStrategyVersion(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    earn(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    emitNonProtectedToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getName(overrides?: CallOverrides): Promise<BigNumber>;

    getProtectedTokens(overrides?: CallOverrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    guardian(overrides?: CallOverrides): Promise<BigNumber>;

    harvest(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    initialize(
      _vault: string,
      _wantConfig: [string],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    isProtectedToken(
      token: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    isTendable(overrides?: CallOverrides): Promise<BigNumber>;

    keeper(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    setWithdrawalMaxDeviationThreshold(
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    strategist(overrides?: CallOverrides): Promise<BigNumber>;

    tend(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    vault(overrides?: CallOverrides): Promise<BigNumber>;

    want(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    withdrawOther(
      _asset: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    withdrawToVault(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    withdrawalMaxDeviationThreshold(
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    LENDING_POOL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REWARD(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    REWARDS_CONTRACT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROUTER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    __BaseStrategy_init(
      _vault: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    aToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    autoCompoundRatio(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOfPool(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOfRewards(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOfWant(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    baseStrategyVersion(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    deposit(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    earn(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    emitNonProtectedToken(
      _token: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getName(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getProtectedTokens(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    harvest(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    initialize(
      _vault: string,
      _wantConfig: [string],
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    isProtectedToken(
      token: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    isTendable(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    keeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setWithdrawalMaxDeviationThreshold(
      _threshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    strategist(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tend(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    vault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    want(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    withdrawOther(
      _asset: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    withdrawToVault(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    withdrawalMaxDeviationThreshold(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
