/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from 'ethers';
import { BytesLike } from '@ethersproject/bytes';
import { Listener, Provider } from '@ethersproject/providers';
import { FunctionFragment, EventFragment, Result } from '@ethersproject/abi';
import type { TypedEventFilter, TypedEvent, TypedListener } from './common';

interface SettInterface extends ethers.utils.Interface {
  functions: {
    'allowance(address,address)': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'approveContractAccess(address)': FunctionFragment;
    'approved(address)': FunctionFragment;
    'available()': FunctionFragment;
    'balance()': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'blockLock(address)': FunctionFragment;
    'controller()': FunctionFragment;
    'decimals()': FunctionFragment;
    'decreaseAllowance(address,uint256)': FunctionFragment;
    'deposit(uint256)': FunctionFragment;
    'depositAll()': FunctionFragment;
    'earn()': FunctionFragment;
    'getPricePerFullShare()': FunctionFragment;
    'governance()': FunctionFragment;
    'guardian()': FunctionFragment;
    'harvest(address,uint256)': FunctionFragment;
    'increaseAllowance(address,uint256)': FunctionFragment;
    'initialize(address,address,address,address,address,bool,string,string)': FunctionFragment;
    'keeper()': FunctionFragment;
    'max()': FunctionFragment;
    'min()': FunctionFragment;
    'name()': FunctionFragment;
    'pause()': FunctionFragment;
    'paused()': FunctionFragment;
    'revokeContractAccess(address)': FunctionFragment;
    'setController(address)': FunctionFragment;
    'setGovernance(address)': FunctionFragment;
    'setGuardian(address)': FunctionFragment;
    'setKeeper(address)': FunctionFragment;
    'setMin(uint256)': FunctionFragment;
    'setStrategist(address)': FunctionFragment;
    'strategist()': FunctionFragment;
    'symbol()': FunctionFragment;
    'token()': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'trackFullPricePerShare()': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
    'unpause()': FunctionFragment;
    'version()': FunctionFragment;
    'withdraw(uint256)': FunctionFragment;
    'withdrawAll()': FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: 'allowance',
    values: [string, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'approve',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'approveContractAccess',
    values: [string],
  ): string;
  encodeFunctionData(functionFragment: 'approved', values: [string]): string;
  encodeFunctionData(functionFragment: 'available', values?: undefined): string;
  encodeFunctionData(functionFragment: 'balance', values?: undefined): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
  encodeFunctionData(functionFragment: 'blockLock', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'controller',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'decreaseAllowance',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'deposit',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'depositAll',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'earn', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'getPricePerFullShare',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'governance',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'guardian', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'harvest',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'increaseAllowance',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, string, string, string, string, boolean, string, string],
  ): string;
  encodeFunctionData(functionFragment: 'keeper', values?: undefined): string;
  encodeFunctionData(functionFragment: 'max', values?: undefined): string;
  encodeFunctionData(functionFragment: 'min', values?: undefined): string;
  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pause', values?: undefined): string;
  encodeFunctionData(functionFragment: 'paused', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'revokeContractAccess',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'setController',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'setGovernance',
    values: [string],
  ): string;
  encodeFunctionData(functionFragment: 'setGuardian', values: [string]): string;
  encodeFunctionData(functionFragment: 'setKeeper', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'setMin',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'setStrategist',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: 'strategist',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(functionFragment: 'token', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'totalSupply',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'trackFullPricePerShare',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'unpause', values?: undefined): string;
  encodeFunctionData(functionFragment: 'version', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'withdraw',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'withdrawAll',
    values?: undefined,
  ): string;

  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'approveContractAccess',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'approved', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'available', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'blockLock', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'controller', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'decreaseAllowance',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'deposit', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'depositAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'earn', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'getPricePerFullShare',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'governance', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'guardian', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'harvest', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'increaseAllowance',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'keeper', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'max', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'min', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pause', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'paused', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'revokeContractAccess',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setController',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setGovernance',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setGuardian',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'setKeeper', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setMin', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setStrategist',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'strategist', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'token', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'totalSupply',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'trackFullPricePerShare',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'transferFrom',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'unpause', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'version', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'withdraw', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'withdrawAll',
    data: BytesLike,
  ): Result;

  events: {
    'Approval(address,address,uint256)': EventFragment;
    'FullPricePerShareUpdated(uint256,uint256,uint256)': EventFragment;
    'Paused(address)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
    'Unpaused(address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'FullPricePerShareUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Paused'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Unpaused'): EventFragment;
}

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber] & {
    owner: string;
    spender: string;
    value: BigNumber;
  }
>;

export type FullPricePerShareUpdatedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber] & {
    value: BigNumber;
    timestamp: BigNumber;
    blockNumber: BigNumber;
  }
>;

export type PausedEvent = TypedEvent<[string] & { account: string }>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber] & { from: string; to: string; value: BigNumber }
>;

export type UnpausedEvent = TypedEvent<[string] & { account: string }>;

export class Sett extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>,
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SettInterface;

  functions: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    approveContractAccess(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    approved(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    available(overrides?: CallOverrides): Promise<[BigNumber]>;

    balance(overrides?: CallOverrides): Promise<[BigNumber]>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    blockLock(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    controller(overrides?: CallOverrides): Promise<[string]>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    depositAll(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    earn(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    getPricePerFullShare(overrides?: CallOverrides): Promise<[BigNumber]>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    guardian(overrides?: CallOverrides): Promise<[string]>;

    harvest(
      reserve: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    initialize(
      _token: string,
      _controller: string,
      _governance: string,
      _keeper: string,
      _guardian: string,
      _overrideTokenName: boolean,
      _namePrefix: string,
      _symbolPrefix: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    keeper(overrides?: CallOverrides): Promise<[string]>;

    max(overrides?: CallOverrides): Promise<[BigNumber]>;

    min(overrides?: CallOverrides): Promise<[BigNumber]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    revokeContractAccess(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setController(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setGovernance(
      _governance: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setGuardian(
      _guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setKeeper(
      _keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setMin(
      _min: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setStrategist(
      _strategist: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    strategist(overrides?: CallOverrides): Promise<[string]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    trackFullPricePerShare(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[string]>;

    withdraw(
      _shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    withdrawAll(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  allowance(
    owner: string,
    spender: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  approve(
    spender: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  approveContractAccess(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  approved(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  available(overrides?: CallOverrides): Promise<BigNumber>;

  balance(overrides?: CallOverrides): Promise<BigNumber>;

  balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

  blockLock(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  controller(overrides?: CallOverrides): Promise<string>;

  decimals(overrides?: CallOverrides): Promise<number>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  deposit(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  depositAll(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  earn(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  getPricePerFullShare(overrides?: CallOverrides): Promise<BigNumber>;

  governance(overrides?: CallOverrides): Promise<string>;

  guardian(overrides?: CallOverrides): Promise<string>;

  harvest(
    reserve: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  initialize(
    _token: string,
    _controller: string,
    _governance: string,
    _keeper: string,
    _guardian: string,
    _overrideTokenName: boolean,
    _namePrefix: string,
    _symbolPrefix: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  keeper(overrides?: CallOverrides): Promise<string>;

  max(overrides?: CallOverrides): Promise<BigNumber>;

  min(overrides?: CallOverrides): Promise<BigNumber>;

  name(overrides?: CallOverrides): Promise<string>;

  pause(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  revokeContractAccess(
    account: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setController(
    _controller: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setGovernance(
    _governance: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setGuardian(
    _guardian: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setKeeper(
    _keeper: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setMin(
    _min: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setStrategist(
    _strategist: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  strategist(overrides?: CallOverrides): Promise<string>;

  symbol(overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  trackFullPricePerShare(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transfer(
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transferFrom(
    sender: string,
    recipient: string,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  unpause(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<string>;

  withdraw(
    _shares: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  withdrawAll(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    approveContractAccess(
      account: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    approved(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    available(overrides?: CallOverrides): Promise<BigNumber>;

    balance(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    blockLock(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<string>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    deposit(_amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    depositAll(overrides?: CallOverrides): Promise<void>;

    earn(overrides?: CallOverrides): Promise<void>;

    getPricePerFullShare(overrides?: CallOverrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<string>;

    guardian(overrides?: CallOverrides): Promise<string>;

    harvest(
      reserve: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    initialize(
      _token: string,
      _controller: string,
      _governance: string,
      _keeper: string,
      _guardian: string,
      _overrideTokenName: boolean,
      _namePrefix: string,
      _symbolPrefix: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    keeper(overrides?: CallOverrides): Promise<string>;

    max(overrides?: CallOverrides): Promise<BigNumber>;

    min(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<string>;

    pause(overrides?: CallOverrides): Promise<void>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    revokeContractAccess(
      account: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    setController(
      _controller: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    setGovernance(
      _governance: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    setGuardian(_guardian: string, overrides?: CallOverrides): Promise<void>;

    setKeeper(_keeper: string, overrides?: CallOverrides): Promise<void>;

    setMin(_min: BigNumberish, overrides?: CallOverrides): Promise<void>;

    setStrategist(
      _strategist: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    strategist(overrides?: CallOverrides): Promise<string>;

    symbol(overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    trackFullPricePerShare(overrides?: CallOverrides): Promise<void>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    unpause(overrides?: CallOverrides): Promise<void>;

    version(overrides?: CallOverrides): Promise<string>;

    withdraw(_shares: BigNumberish, overrides?: CallOverrides): Promise<void>;

    withdrawAll(overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'Approval(address,address,uint256)'(
      owner?: string | null,
      spender?: string | null,
      value?: null,
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    Approval(
      owner?: string | null,
      spender?: string | null,
      value?: null,
    ): TypedEventFilter<
      [string, string, BigNumber],
      { owner: string; spender: string; value: BigNumber }
    >;

    'FullPricePerShareUpdated(uint256,uint256,uint256)'(
      value?: null,
      timestamp?: BigNumberish | null,
      blockNumber?: BigNumberish | null,
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { value: BigNumber; timestamp: BigNumber; blockNumber: BigNumber }
    >;

    FullPricePerShareUpdated(
      value?: null,
      timestamp?: BigNumberish | null,
      blockNumber?: BigNumberish | null,
    ): TypedEventFilter<
      [BigNumber, BigNumber, BigNumber],
      { value: BigNumber; timestamp: BigNumber; blockNumber: BigNumber }
    >;

    'Paused(address)'(
      account?: null,
    ): TypedEventFilter<[string], { account: string }>;

    Paused(account?: null): TypedEventFilter<[string], { account: string }>;

    'Transfer(address,address,uint256)'(
      from?: string | null,
      to?: string | null,
      value?: null,
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;

    Transfer(
      from?: string | null,
      to?: string | null,
      value?: null,
    ): TypedEventFilter<
      [string, string, BigNumber],
      { from: string; to: string; value: BigNumber }
    >;

    'Unpaused(address)'(
      account?: null,
    ): TypedEventFilter<[string], { account: string }>;

    Unpaused(account?: null): TypedEventFilter<[string], { account: string }>;
  };

  estimateGas: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    approveContractAccess(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    approved(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    available(overrides?: CallOverrides): Promise<BigNumber>;

    balance(overrides?: CallOverrides): Promise<BigNumber>;

    balanceOf(account: string, overrides?: CallOverrides): Promise<BigNumber>;

    blockLock(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    controller(overrides?: CallOverrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    depositAll(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    earn(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    getPricePerFullShare(overrides?: CallOverrides): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    guardian(overrides?: CallOverrides): Promise<BigNumber>;

    harvest(
      reserve: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    initialize(
      _token: string,
      _controller: string,
      _governance: string,
      _keeper: string,
      _guardian: string,
      _overrideTokenName: boolean,
      _namePrefix: string,
      _symbolPrefix: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    keeper(overrides?: CallOverrides): Promise<BigNumber>;

    max(overrides?: CallOverrides): Promise<BigNumber>;

    min(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    revokeContractAccess(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setController(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setGovernance(
      _governance: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setGuardian(
      _guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setKeeper(
      _keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setMin(
      _min: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setStrategist(
      _strategist: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    strategist(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    trackFullPricePerShare(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    withdraw(
      _shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    withdrawAll(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    allowance(
      owner: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    approveContractAccess(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    approved(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    available(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balanceOf(
      account: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    blockLock(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    controller(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    deposit(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    depositAll(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    earn(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    getPricePerFullShare(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    guardian(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    harvest(
      reserve: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    initialize(
      _token: string,
      _controller: string,
      _governance: string,
      _keeper: string,
      _guardian: string,
      _overrideTokenName: boolean,
      _namePrefix: string,
      _symbolPrefix: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    keeper(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    max(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    min(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pause(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    revokeContractAccess(
      account: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setController(
      _controller: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setGovernance(
      _governance: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setGuardian(
      _guardian: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setKeeper(
      _keeper: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setMin(
      _min: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setStrategist(
      _strategist: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    strategist(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    trackFullPricePerShare(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transfer(
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transferFrom(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    unpause(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    withdraw(
      _shares: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    withdrawAll(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
