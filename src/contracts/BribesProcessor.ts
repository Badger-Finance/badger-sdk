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
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export declare namespace CowSwapSeller {
  export type DataStruct = {
    sellToken: string;
    buyToken: string;
    receiver: string;
    sellAmount: BigNumberish;
    buyAmount: BigNumberish;
    validTo: BigNumberish;
    appData: BytesLike;
    feeAmount: BigNumberish;
    kind: BytesLike;
    partiallyFillable: boolean;
    sellTokenBalance: BytesLike;
    buyTokenBalance: BytesLike;
  };

  export type DataStructOutput = [
    string,
    string,
    string,
    BigNumber,
    BigNumber,
    number,
    string,
    BigNumber,
    string,
    boolean,
    string,
    string
  ] & {
    sellToken: string;
    buyToken: string;
    receiver: string;
    sellAmount: BigNumber;
    buyAmount: BigNumber;
    validTo: number;
    appData: string;
    feeAmount: BigNumber;
    kind: string;
    partiallyFillable: boolean;
    sellTokenBalance: string;
    buyTokenBalance: string;
  };
}

export interface BribesProcessorInterface extends utils.Interface {
  contractName: "BribesProcessor";
  functions: {
    "BADGER()": FunctionFragment;
    "BADGER_SHARE()": FunctionFragment;
    "BADGER_TREE()": FunctionFragment;
    "BALANCE_ERC20()": FunctionFragment;
    "BVE_CVX()": FunctionFragment;
    "CVX()": FunctionFragment;
    "CVX_BVE_CVX_CURVE()": FunctionFragment;
    "DEV_MULTI()": FunctionFragment;
    "KIND_SELL()": FunctionFragment;
    "MAX_BPS()": FunctionFragment;
    "MAX_MANAGER_IDLE_TIME()": FunctionFragment;
    "OPS_FEE()": FunctionFragment;
    "RELAYER()": FunctionFragment;
    "SETTLEMENT()": FunctionFragment;
    "STRATEGY()": FunctionFragment;
    "TREASURY()": FunctionFragment;
    "WETH()": FunctionFragment;
    "checkCowswapOrder((address,address,address,uint256,uint256,uint32,bytes32,uint256,bytes32,bool,bytes32,bytes32),bytes)": FunctionFragment;
    "domainSeparator()": FunctionFragment;
    "emitBadger()": FunctionFragment;
    "getHash((address,address,address,uint256,uint256,uint32,bytes32,uint256,bytes32,bool,bytes32,bytes32),bytes32)": FunctionFragment;
    "getOrderID((address,address,address,uint256,uint256,uint32,bytes32,uint256,bytes32,bool,bytes32,bytes32))": FunctionFragment;
    "lastBribeAction()": FunctionFragment;
    "manager()": FunctionFragment;
    "notifyNewRound()": FunctionFragment;
    "packOrderUidParams(bytes,bytes32,address,uint32)": FunctionFragment;
    "pricer()": FunctionFragment;
    "ragequit(address,bool)": FunctionFragment;
    "sellBribeForWeth((address,address,address,uint256,uint256,uint32,bytes32,uint256,bytes32,bool,bytes32,bytes32),bytes)": FunctionFragment;
    "setManager(address)": FunctionFragment;
    "setPricer(address)": FunctionFragment;
    "swapCVXTobveCVXAndEmit()": FunctionFragment;
    "swapWethForBadger((address,address,address,uint256,uint256,uint32,bytes32,uint256,bytes32,bool,bytes32,bytes32),bytes)": FunctionFragment;
    "swapWethForCVX((address,address,address,uint256,uint256,uint32,bytes32,uint256,bytes32,bool,bytes32,bytes32),bytes)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "BADGER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "BADGER_SHARE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BADGER_TREE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "BALANCE_ERC20",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "BVE_CVX", values?: undefined): string;
  encodeFunctionData(functionFragment: "CVX", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "CVX_BVE_CVX_CURVE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "DEV_MULTI", values?: undefined): string;
  encodeFunctionData(functionFragment: "KIND_SELL", values?: undefined): string;
  encodeFunctionData(functionFragment: "MAX_BPS", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "MAX_MANAGER_IDLE_TIME",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "OPS_FEE", values?: undefined): string;
  encodeFunctionData(functionFragment: "RELAYER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "SETTLEMENT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "STRATEGY", values?: undefined): string;
  encodeFunctionData(functionFragment: "TREASURY", values?: undefined): string;
  encodeFunctionData(functionFragment: "WETH", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "checkCowswapOrder",
    values: [CowSwapSeller.DataStruct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "domainSeparator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "emitBadger",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getHash",
    values: [CowSwapSeller.DataStruct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getOrderID",
    values: [CowSwapSeller.DataStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "lastBribeAction",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "manager", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "notifyNewRound",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "packOrderUidParams",
    values: [BytesLike, BytesLike, string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "pricer", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ragequit",
    values: [string, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "sellBribeForWeth",
    values: [CowSwapSeller.DataStruct, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "setManager", values: [string]): string;
  encodeFunctionData(functionFragment: "setPricer", values: [string]): string;
  encodeFunctionData(
    functionFragment: "swapCVXTobveCVXAndEmit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "swapWethForBadger",
    values: [CowSwapSeller.DataStruct, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "swapWethForCVX",
    values: [CowSwapSeller.DataStruct, BytesLike]
  ): string;

  decodeFunctionResult(functionFragment: "BADGER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "BADGER_SHARE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BADGER_TREE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "BALANCE_ERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "BVE_CVX", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "CVX", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "CVX_BVE_CVX_CURVE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "DEV_MULTI", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "KIND_SELL", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "MAX_BPS", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MAX_MANAGER_IDLE_TIME",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "OPS_FEE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "RELAYER", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "SETTLEMENT", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "STRATEGY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "TREASURY", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "WETH", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkCowswapOrder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "domainSeparator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "emitBadger", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getHash", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getOrderID", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastBribeAction",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "manager", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "notifyNewRound",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "packOrderUidParams",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pricer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ragequit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sellBribeForWeth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setManager", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPricer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "swapCVXTobveCVXAndEmit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapWethForBadger",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "swapWethForCVX",
    data: BytesLike
  ): Result;

  events: {
    "PerformanceFeeGovernance(address,uint256)": EventFragment;
    "SentBribeToGovernance(address,uint256)": EventFragment;
    "SentBribeToTree(address,uint256)": EventFragment;
    "TreeDistribution(address,uint256,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "PerformanceFeeGovernance"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SentBribeToGovernance"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SentBribeToTree"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TreeDistribution"): EventFragment;
}

export type PerformanceFeeGovernanceEvent = TypedEvent<
  [string, BigNumber],
  { token: string; amount: BigNumber }
>;

export type PerformanceFeeGovernanceEventFilter =
  TypedEventFilter<PerformanceFeeGovernanceEvent>;

export type SentBribeToGovernanceEvent = TypedEvent<
  [string, BigNumber],
  { token: string; amount: BigNumber }
>;

export type SentBribeToGovernanceEventFilter =
  TypedEventFilter<SentBribeToGovernanceEvent>;

export type SentBribeToTreeEvent = TypedEvent<
  [string, BigNumber],
  { token: string; amount: BigNumber }
>;

export type SentBribeToTreeEventFilter = TypedEventFilter<SentBribeToTreeEvent>;

export type TreeDistributionEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  {
    token: string;
    amount: BigNumber;
    blockNumber: BigNumber;
    timestamp: BigNumber;
  }
>;

export type TreeDistributionEventFilter =
  TypedEventFilter<TreeDistributionEvent>;

export interface BribesProcessor extends BaseContract {
  contractName: "BribesProcessor";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BribesProcessorInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    BADGER(overrides?: CallOverrides): Promise<[string]>;

    BADGER_SHARE(overrides?: CallOverrides): Promise<[BigNumber]>;

    BADGER_TREE(overrides?: CallOverrides): Promise<[string]>;

    BALANCE_ERC20(overrides?: CallOverrides): Promise<[string]>;

    BVE_CVX(overrides?: CallOverrides): Promise<[string]>;

    CVX(overrides?: CallOverrides): Promise<[string]>;

    CVX_BVE_CVX_CURVE(overrides?: CallOverrides): Promise<[string]>;

    DEV_MULTI(overrides?: CallOverrides): Promise<[string]>;

    KIND_SELL(overrides?: CallOverrides): Promise<[string]>;

    MAX_BPS(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_MANAGER_IDLE_TIME(overrides?: CallOverrides): Promise<[BigNumber]>;

    OPS_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    RELAYER(overrides?: CallOverrides): Promise<[string]>;

    SETTLEMENT(overrides?: CallOverrides): Promise<[string]>;

    STRATEGY(overrides?: CallOverrides): Promise<[string]>;

    TREASURY(overrides?: CallOverrides): Promise<[string]>;

    WETH(overrides?: CallOverrides): Promise<[string]>;

    checkCowswapOrder(
      orderData: CowSwapSeller.DataStruct,
      orderUid: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    domainSeparator(overrides?: CallOverrides): Promise<[string]>;

    emitBadger(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getHash(
      order: CowSwapSeller.DataStruct,
      separator: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { orderDigest: string }>;

    getOrderID(
      orderData: CowSwapSeller.DataStruct,
      overrides?: CallOverrides
    ): Promise<[string]>;

    lastBribeAction(overrides?: CallOverrides): Promise<[BigNumber]>;

    manager(overrides?: CallOverrides): Promise<[string]>;

    notifyNewRound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    packOrderUidParams(
      orderUid: BytesLike,
      orderDigest: BytesLike,
      owner: string,
      validTo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[void]>;

    pricer(overrides?: CallOverrides): Promise<[string]>;

    ragequit(
      token: string,
      sendToGovernance: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    sellBribeForWeth(
      orderData: CowSwapSeller.DataStruct,
      orderUid: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setManager(
      newManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPricer(
      newPricer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapCVXTobveCVXAndEmit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapWethForBadger(
      orderData: CowSwapSeller.DataStruct,
      orderUid: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    swapWethForCVX(
      orderData: CowSwapSeller.DataStruct,
      orderUid: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  BADGER(overrides?: CallOverrides): Promise<string>;

  BADGER_SHARE(overrides?: CallOverrides): Promise<BigNumber>;

  BADGER_TREE(overrides?: CallOverrides): Promise<string>;

  BALANCE_ERC20(overrides?: CallOverrides): Promise<string>;

  BVE_CVX(overrides?: CallOverrides): Promise<string>;

  CVX(overrides?: CallOverrides): Promise<string>;

  CVX_BVE_CVX_CURVE(overrides?: CallOverrides): Promise<string>;

  DEV_MULTI(overrides?: CallOverrides): Promise<string>;

  KIND_SELL(overrides?: CallOverrides): Promise<string>;

  MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_MANAGER_IDLE_TIME(overrides?: CallOverrides): Promise<BigNumber>;

  OPS_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  RELAYER(overrides?: CallOverrides): Promise<string>;

  SETTLEMENT(overrides?: CallOverrides): Promise<string>;

  STRATEGY(overrides?: CallOverrides): Promise<string>;

  TREASURY(overrides?: CallOverrides): Promise<string>;

  WETH(overrides?: CallOverrides): Promise<string>;

  checkCowswapOrder(
    orderData: CowSwapSeller.DataStruct,
    orderUid: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  domainSeparator(overrides?: CallOverrides): Promise<string>;

  emitBadger(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getHash(
    order: CowSwapSeller.DataStruct,
    separator: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getOrderID(
    orderData: CowSwapSeller.DataStruct,
    overrides?: CallOverrides
  ): Promise<string>;

  lastBribeAction(overrides?: CallOverrides): Promise<BigNumber>;

  manager(overrides?: CallOverrides): Promise<string>;

  notifyNewRound(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  packOrderUidParams(
    orderUid: BytesLike,
    orderDigest: BytesLike,
    owner: string,
    validTo: BigNumberish,
    overrides?: CallOverrides
  ): Promise<void>;

  pricer(overrides?: CallOverrides): Promise<string>;

  ragequit(
    token: string,
    sendToGovernance: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  sellBribeForWeth(
    orderData: CowSwapSeller.DataStruct,
    orderUid: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setManager(
    newManager: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPricer(
    newPricer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapCVXTobveCVXAndEmit(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapWethForBadger(
    orderData: CowSwapSeller.DataStruct,
    orderUid: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  swapWethForCVX(
    orderData: CowSwapSeller.DataStruct,
    orderUid: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BADGER(overrides?: CallOverrides): Promise<string>;

    BADGER_SHARE(overrides?: CallOverrides): Promise<BigNumber>;

    BADGER_TREE(overrides?: CallOverrides): Promise<string>;

    BALANCE_ERC20(overrides?: CallOverrides): Promise<string>;

    BVE_CVX(overrides?: CallOverrides): Promise<string>;

    CVX(overrides?: CallOverrides): Promise<string>;

    CVX_BVE_CVX_CURVE(overrides?: CallOverrides): Promise<string>;

    DEV_MULTI(overrides?: CallOverrides): Promise<string>;

    KIND_SELL(overrides?: CallOverrides): Promise<string>;

    MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_MANAGER_IDLE_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    OPS_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    RELAYER(overrides?: CallOverrides): Promise<string>;

    SETTLEMENT(overrides?: CallOverrides): Promise<string>;

    STRATEGY(overrides?: CallOverrides): Promise<string>;

    TREASURY(overrides?: CallOverrides): Promise<string>;

    WETH(overrides?: CallOverrides): Promise<string>;

    checkCowswapOrder(
      orderData: CowSwapSeller.DataStruct,
      orderUid: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    domainSeparator(overrides?: CallOverrides): Promise<string>;

    emitBadger(overrides?: CallOverrides): Promise<void>;

    getHash(
      order: CowSwapSeller.DataStruct,
      separator: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getOrderID(
      orderData: CowSwapSeller.DataStruct,
      overrides?: CallOverrides
    ): Promise<string>;

    lastBribeAction(overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<string>;

    notifyNewRound(overrides?: CallOverrides): Promise<void>;

    packOrderUidParams(
      orderUid: BytesLike,
      orderDigest: BytesLike,
      owner: string,
      validTo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    pricer(overrides?: CallOverrides): Promise<string>;

    ragequit(
      token: string,
      sendToGovernance: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    sellBribeForWeth(
      orderData: CowSwapSeller.DataStruct,
      orderUid: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    setManager(newManager: string, overrides?: CallOverrides): Promise<void>;

    setPricer(newPricer: string, overrides?: CallOverrides): Promise<void>;

    swapCVXTobveCVXAndEmit(overrides?: CallOverrides): Promise<void>;

    swapWethForBadger(
      orderData: CowSwapSeller.DataStruct,
      orderUid: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    swapWethForCVX(
      orderData: CowSwapSeller.DataStruct,
      orderUid: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "PerformanceFeeGovernance(address,uint256)"(
      token?: string | null,
      amount?: null
    ): PerformanceFeeGovernanceEventFilter;
    PerformanceFeeGovernance(
      token?: string | null,
      amount?: null
    ): PerformanceFeeGovernanceEventFilter;

    "SentBribeToGovernance(address,uint256)"(
      token?: string | null,
      amount?: null
    ): SentBribeToGovernanceEventFilter;
    SentBribeToGovernance(
      token?: string | null,
      amount?: null
    ): SentBribeToGovernanceEventFilter;

    "SentBribeToTree(address,uint256)"(
      token?: string | null,
      amount?: null
    ): SentBribeToTreeEventFilter;
    SentBribeToTree(
      token?: string | null,
      amount?: null
    ): SentBribeToTreeEventFilter;

    "TreeDistribution(address,uint256,uint256,uint256)"(
      token?: string | null,
      amount?: null,
      blockNumber?: BigNumberish | null,
      timestamp?: null
    ): TreeDistributionEventFilter;
    TreeDistribution(
      token?: string | null,
      amount?: null,
      blockNumber?: BigNumberish | null,
      timestamp?: null
    ): TreeDistributionEventFilter;
  };

  estimateGas: {
    BADGER(overrides?: CallOverrides): Promise<BigNumber>;

    BADGER_SHARE(overrides?: CallOverrides): Promise<BigNumber>;

    BADGER_TREE(overrides?: CallOverrides): Promise<BigNumber>;

    BALANCE_ERC20(overrides?: CallOverrides): Promise<BigNumber>;

    BVE_CVX(overrides?: CallOverrides): Promise<BigNumber>;

    CVX(overrides?: CallOverrides): Promise<BigNumber>;

    CVX_BVE_CVX_CURVE(overrides?: CallOverrides): Promise<BigNumber>;

    DEV_MULTI(overrides?: CallOverrides): Promise<BigNumber>;

    KIND_SELL(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_BPS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_MANAGER_IDLE_TIME(overrides?: CallOverrides): Promise<BigNumber>;

    OPS_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    RELAYER(overrides?: CallOverrides): Promise<BigNumber>;

    SETTLEMENT(overrides?: CallOverrides): Promise<BigNumber>;

    STRATEGY(overrides?: CallOverrides): Promise<BigNumber>;

    TREASURY(overrides?: CallOverrides): Promise<BigNumber>;

    WETH(overrides?: CallOverrides): Promise<BigNumber>;

    checkCowswapOrder(
      orderData: CowSwapSeller.DataStruct,
      orderUid: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    domainSeparator(overrides?: CallOverrides): Promise<BigNumber>;

    emitBadger(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getHash(
      order: CowSwapSeller.DataStruct,
      separator: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getOrderID(
      orderData: CowSwapSeller.DataStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastBribeAction(overrides?: CallOverrides): Promise<BigNumber>;

    manager(overrides?: CallOverrides): Promise<BigNumber>;

    notifyNewRound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    packOrderUidParams(
      orderUid: BytesLike,
      orderDigest: BytesLike,
      owner: string,
      validTo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    pricer(overrides?: CallOverrides): Promise<BigNumber>;

    ragequit(
      token: string,
      sendToGovernance: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    sellBribeForWeth(
      orderData: CowSwapSeller.DataStruct,
      orderUid: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setManager(
      newManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPricer(
      newPricer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapCVXTobveCVXAndEmit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapWethForBadger(
      orderData: CowSwapSeller.DataStruct,
      orderUid: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    swapWethForCVX(
      orderData: CowSwapSeller.DataStruct,
      orderUid: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BADGER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BADGER_SHARE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BADGER_TREE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BALANCE_ERC20(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    BVE_CVX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CVX(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    CVX_BVE_CVX_CURVE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    DEV_MULTI(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    KIND_SELL(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_BPS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_MANAGER_IDLE_TIME(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    OPS_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RELAYER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SETTLEMENT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    STRATEGY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    TREASURY(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    WETH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    checkCowswapOrder(
      orderData: CowSwapSeller.DataStruct,
      orderUid: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    domainSeparator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    emitBadger(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getHash(
      order: CowSwapSeller.DataStruct,
      separator: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getOrderID(
      orderData: CowSwapSeller.DataStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastBribeAction(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    manager(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    notifyNewRound(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    packOrderUidParams(
      orderUid: BytesLike,
      orderDigest: BytesLike,
      owner: string,
      validTo: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    pricer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ragequit(
      token: string,
      sendToGovernance: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    sellBribeForWeth(
      orderData: CowSwapSeller.DataStruct,
      orderUid: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setManager(
      newManager: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPricer(
      newPricer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapCVXTobveCVXAndEmit(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapWethForBadger(
      orderData: CowSwapSeller.DataStruct,
      orderUid: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    swapWethForCVX(
      orderData: CowSwapSeller.DataStruct,
      orderUid: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
