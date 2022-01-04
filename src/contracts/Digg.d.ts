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

interface DiggInterface extends ethers.utils.Interface {
  functions: {
    'name()': FunctionFragment;
    'approve(address,uint256)': FunctionFragment;
    'fragmentsToShares(uint256)': FunctionFragment;
    'initialize(string,string,uint8)': FunctionFragment;
    'totalSupply()': FunctionFragment;
    'transferFrom(address,address,uint256)': FunctionFragment;
    'decimals()': FunctionFragment;
    'increaseAllowance(address,uint256)': FunctionFragment;
    'totalShares()': FunctionFragment;
    'sharesToFragments(uint256)': FunctionFragment;
    '_sharesPerFragment()': FunctionFragment;
    'sharesToScaledShares(uint256)': FunctionFragment;
    'balanceOf(address)': FunctionFragment;
    'renounceOwnership()': FunctionFragment;
    'rebase(uint256,int256)': FunctionFragment;
    'setMonetaryPolicy(address)': FunctionFragment;
    'owner()': FunctionFragment;
    'monetaryPolicy()': FunctionFragment;
    'isOwner()': FunctionFragment;
    'symbol()': FunctionFragment;
    'decreaseAllowance(address,uint256)': FunctionFragment;
    'transfer(address,uint256)': FunctionFragment;
    'rebaseStartTime()': FunctionFragment;
    '_initialSharesPerFragment()': FunctionFragment;
    'allowance(address,address)': FunctionFragment;
    'transferOwnership(address)': FunctionFragment;
    'sharesOf(address)': FunctionFragment;
    'scaledSharesToShares(uint256)': FunctionFragment;
  };

  encodeFunctionData(functionFragment: 'name', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'approve',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'fragmentsToShares',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'initialize',
    values: [string, string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'totalSupply',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'transferFrom',
    values: [string, string, BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'decimals', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'increaseAllowance',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'totalShares',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'sharesToFragments',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: '_sharesPerFragment',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'sharesToScaledShares',
    values: [BigNumberish],
  ): string;
  encodeFunctionData(functionFragment: 'balanceOf', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'renounceOwnership',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'rebase',
    values: [BigNumberish, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'setMonetaryPolicy',
    values: [string],
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'monetaryPolicy',
    values?: undefined,
  ): string;
  encodeFunctionData(functionFragment: 'isOwner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'symbol', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'decreaseAllowance',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'transfer',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'rebaseStartTime',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: '_initialSharesPerFragment',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: 'allowance',
    values: [string, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [string],
  ): string;
  encodeFunctionData(functionFragment: 'sharesOf', values: [string]): string;
  encodeFunctionData(
    functionFragment: 'scaledSharesToShares',
    values: [BigNumberish],
  ): string;

  decodeFunctionResult(functionFragment: 'name', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'approve', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'fragmentsToShares',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'initialize', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'totalSupply',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'transferFrom',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'decimals', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'increaseAllowance',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'totalShares',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'sharesToFragments',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: '_sharesPerFragment',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'sharesToScaledShares',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'renounceOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'rebase', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'setMonetaryPolicy',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'monetaryPolicy',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'isOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'symbol', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'decreaseAllowance',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'transfer', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'rebaseStartTime',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: '_initialSharesPerFragment',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'allowance', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'transferOwnership',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(functionFragment: 'sharesOf', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'scaledSharesToShares',
    data: BytesLike,
  ): Result;

  events: {
    'LogRebase(uint256,uint256)': EventFragment;
    'LogMonetaryPolicyUpdated(address)': EventFragment;
    'OwnershipRenounced(address)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
    'Transfer(address,address,uint256)': EventFragment;
    'Approval(address,address,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'LogRebase'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogMonetaryPolicyUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipRenounced'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Transfer'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'Approval'): EventFragment;
}

export type LogRebaseEvent = TypedEvent<
  [BigNumber, BigNumber] & { epoch: BigNumber; totalSupply: BigNumber }
>;

export type LogMonetaryPolicyUpdatedEvent = TypedEvent<
  [string] & { monetaryPolicy: string }
>;

export type OwnershipRenouncedEvent = TypedEvent<
  [string] & { previousOwner: string }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type TransferEvent = TypedEvent<
  [string, string, BigNumber] & { from: string; to: string; value: BigNumber }
>;

export type ApprovalEvent = TypedEvent<
  [string, string, BigNumber] & {
    owner: string;
    spender: string;
    value: BigNumber;
  }
>;

export class Digg extends BaseContract {
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

  interface: DiggInterface;

  functions: {
    name(overrides?: CallOverrides): Promise<[string]>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    fragmentsToShares(
      fragments: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    'initialize(string,string,uint8)'(
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'initialize(address)'(
      owner_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    decimals(overrides?: CallOverrides): Promise<[number]>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    totalShares(overrides?: CallOverrides): Promise<[BigNumber]>;

    sharesToFragments(
      shares: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    _sharesPerFragment(overrides?: CallOverrides): Promise<[BigNumber]>;

    sharesToScaledShares(
      shares: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    balanceOf(who: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    rebase(
      epoch: BigNumberish,
      supplyDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setMonetaryPolicy(
      monetaryPolicy_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    monetaryPolicy(overrides?: CallOverrides): Promise<[string]>;

    isOwner(overrides?: CallOverrides): Promise<[boolean]>;

    symbol(overrides?: CallOverrides): Promise<[string]>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    rebaseStartTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    _initialSharesPerFragment(overrides?: CallOverrides): Promise<[BigNumber]>;

    allowance(
      owner_: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    sharesOf(who: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    scaledSharesToShares(
      fragments: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;
  };

  name(overrides?: CallOverrides): Promise<string>;

  approve(
    spender: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  fragmentsToShares(
    fragments: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  'initialize(string,string,uint8)'(
    name: string,
    symbol: string,
    decimals: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'initialize(address)'(
    owner_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  transferFrom(
    from: string,
    to: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  increaseAllowance(
    spender: string,
    addedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  totalShares(overrides?: CallOverrides): Promise<BigNumber>;

  sharesToFragments(
    shares: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  _sharesPerFragment(overrides?: CallOverrides): Promise<BigNumber>;

  sharesToScaledShares(
    shares: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  rebase(
    epoch: BigNumberish,
    supplyDelta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setMonetaryPolicy(
    monetaryPolicy_: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  monetaryPolicy(overrides?: CallOverrides): Promise<string>;

  isOwner(overrides?: CallOverrides): Promise<boolean>;

  symbol(overrides?: CallOverrides): Promise<string>;

  decreaseAllowance(
    spender: string,
    subtractedValue: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  transfer(
    to: string,
    value: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  rebaseStartTime(overrides?: CallOverrides): Promise<BigNumber>;

  _initialSharesPerFragment(overrides?: CallOverrides): Promise<BigNumber>;

  allowance(
    owner_: string,
    spender: string,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  sharesOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

  scaledSharesToShares(
    fragments: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  callStatic: {
    name(overrides?: CallOverrides): Promise<string>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    fragmentsToShares(
      fragments: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'initialize(string,string,uint8)'(
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    'initialize(address)'(
      owner_: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    decimals(overrides?: CallOverrides): Promise<number>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    sharesToFragments(
      shares: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    _sharesPerFragment(overrides?: CallOverrides): Promise<BigNumber>;

    sharesToScaledShares(
      shares: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    rebase(
      epoch: BigNumberish,
      supplyDelta: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    setMonetaryPolicy(
      monetaryPolicy_: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    monetaryPolicy(overrides?: CallOverrides): Promise<string>;

    isOwner(overrides?: CallOverrides): Promise<boolean>;

    symbol(overrides?: CallOverrides): Promise<string>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    rebaseStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    _initialSharesPerFragment(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner_: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    sharesOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    scaledSharesToShares(
      fragments: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  filters: {
    'LogRebase(uint256,uint256)'(
      epoch?: BigNumberish | null,
      totalSupply?: null,
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { epoch: BigNumber; totalSupply: BigNumber }
    >;

    LogRebase(
      epoch?: BigNumberish | null,
      totalSupply?: null,
    ): TypedEventFilter<
      [BigNumber, BigNumber],
      { epoch: BigNumber; totalSupply: BigNumber }
    >;

    'LogMonetaryPolicyUpdated(address)'(
      monetaryPolicy?: null,
    ): TypedEventFilter<[string], { monetaryPolicy: string }>;

    LogMonetaryPolicyUpdated(
      monetaryPolicy?: null,
    ): TypedEventFilter<[string], { monetaryPolicy: string }>;

    'OwnershipRenounced(address)'(
      previousOwner?: string | null,
    ): TypedEventFilter<[string], { previousOwner: string }>;

    OwnershipRenounced(
      previousOwner?: string | null,
    ): TypedEventFilter<[string], { previousOwner: string }>;

    'OwnershipTransferred(address,address)'(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null,
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

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
  };

  estimateGas: {
    name(overrides?: CallOverrides): Promise<BigNumber>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    fragmentsToShares(
      fragments: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'initialize(string,string,uint8)'(
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'initialize(address)'(
      owner_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    totalShares(overrides?: CallOverrides): Promise<BigNumber>;

    sharesToFragments(
      shares: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    _sharesPerFragment(overrides?: CallOverrides): Promise<BigNumber>;

    sharesToScaledShares(
      shares: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    balanceOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    rebase(
      epoch: BigNumberish,
      supplyDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setMonetaryPolicy(
      monetaryPolicy_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    monetaryPolicy(overrides?: CallOverrides): Promise<BigNumber>;

    isOwner(overrides?: CallOverrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    rebaseStartTime(overrides?: CallOverrides): Promise<BigNumber>;

    _initialSharesPerFragment(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(
      owner_: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    sharesOf(who: string, overrides?: CallOverrides): Promise<BigNumber>;

    scaledSharesToShares(
      fragments: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    fragmentsToShares(
      fragments: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'initialize(string,string,uint8)'(
      name: string,
      symbol: string,
      decimals: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'initialize(address)'(
      owner_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferFrom(
      from: string,
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    increaseAllowance(
      spender: string,
      addedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    totalShares(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    sharesToFragments(
      shares: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    _sharesPerFragment(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    sharesToScaledShares(
      shares: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    balanceOf(
      who: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    rebase(
      epoch: BigNumberish,
      supplyDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setMonetaryPolicy(
      monetaryPolicy_: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    monetaryPolicy(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    decreaseAllowance(
      spender: string,
      subtractedValue: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    transfer(
      to: string,
      value: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    rebaseStartTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    _initialSharesPerFragment(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    allowance(
      owner_: string,
      spender: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    sharesOf(
      who: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    scaledSharesToShares(
      fragments: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
