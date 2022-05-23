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

export declare namespace BadgerRegistry {
  export type VaultDataStruct = {
    version: string;
    status: BigNumberish;
    list: string[];
  };

  export type VaultDataStructOutput = [string, number, string[]] & {
    version: string;
    status: number;
    list: string[];
  };
}

export interface RegistryInterface extends utils.Interface {
  contractName: "Registry";
  functions: {
    "add(string,address)": FunctionFragment;
    "addVersions(string)": FunctionFragment;
    "addresses(string)": FunctionFragment;
    "demote(string,address,uint8)": FunctionFragment;
    "devGovernance()": FunctionFragment;
    "get(string)": FunctionFragment;
    "getFilteredProductionVaults(string,uint8)": FunctionFragment;
    "getProductionVaults()": FunctionFragment;
    "getVaults(string,address)": FunctionFragment;
    "governance()": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "keys(uint256)": FunctionFragment;
    "promote(string,address,uint8)": FunctionFragment;
    "remove(string,address)": FunctionFragment;
    "set(string,address)": FunctionFragment;
    "setDev(address)": FunctionFragment;
    "setGovernance(address)": FunctionFragment;
    "versions(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "add", values: [string, string]): string;
  encodeFunctionData(functionFragment: "addVersions", values: [string]): string;
  encodeFunctionData(functionFragment: "addresses", values: [string]): string;
  encodeFunctionData(
    functionFragment: "demote",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "devGovernance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "get", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getFilteredProductionVaults",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getProductionVaults",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVaults",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "governance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(functionFragment: "keys", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "promote",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [string, string]
  ): string;
  encodeFunctionData(functionFragment: "set", values: [string, string]): string;
  encodeFunctionData(functionFragment: "setDev", values: [string]): string;
  encodeFunctionData(
    functionFragment: "setGovernance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "versions",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "add", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "addVersions",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "addresses", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "demote", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "devGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "get", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getFilteredProductionVaults",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProductionVaults",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVaults", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "governance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "keys", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "promote", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "set", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setDev", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setGovernance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "versions", data: BytesLike): Result;

  events: {
    "AddKey(string)": EventFragment;
    "AddVersion(string)": EventFragment;
    "DemoteVault(address,string,address,uint8)": EventFragment;
    "NewVault(address,string,address)": EventFragment;
    "PromoteVault(address,string,address,uint8)": EventFragment;
    "RemoveVault(address,string,address)": EventFragment;
    "Set(string,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddKey"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AddVersion"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DemoteVault"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewVault"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PromoteVault"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveVault"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Set"): EventFragment;
}

export type AddKeyEvent = TypedEvent<[string], { key: string }>;

export type AddKeyEventFilter = TypedEventFilter<AddKeyEvent>;

export type AddVersionEvent = TypedEvent<[string], { version: string }>;

export type AddVersionEventFilter = TypedEventFilter<AddVersionEvent>;

export type DemoteVaultEvent = TypedEvent<
  [string, string, string, number],
  { author: string; version: string; vault: string; status: number }
>;

export type DemoteVaultEventFilter = TypedEventFilter<DemoteVaultEvent>;

export type NewVaultEvent = TypedEvent<
  [string, string, string],
  { author: string; version: string; vault: string }
>;

export type NewVaultEventFilter = TypedEventFilter<NewVaultEvent>;

export type PromoteVaultEvent = TypedEvent<
  [string, string, string, number],
  { author: string; version: string; vault: string; status: number }
>;

export type PromoteVaultEventFilter = TypedEventFilter<PromoteVaultEvent>;

export type RemoveVaultEvent = TypedEvent<
  [string, string, string],
  { author: string; version: string; vault: string }
>;

export type RemoveVaultEventFilter = TypedEventFilter<RemoveVaultEvent>;

export type SetEvent = TypedEvent<
  [string, string],
  { key: string; at: string }
>;

export type SetEventFilter = TypedEventFilter<SetEvent>;

export interface Registry extends BaseContract {
  contractName: "Registry";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RegistryInterface;

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
    add(
      version: string,
      vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addVersions(
      version: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addresses(arg0: string, overrides?: CallOverrides): Promise<[string]>;

    demote(
      version: string,
      vault: string,
      status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    devGovernance(overrides?: CallOverrides): Promise<[string]>;

    get(key: string, overrides?: CallOverrides): Promise<[string]>;

    getFilteredProductionVaults(
      version: string,
      status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    getProductionVaults(
      overrides?: CallOverrides
    ): Promise<[BadgerRegistry.VaultDataStructOutput[]]>;

    getVaults(
      version: string,
      author: string,
      overrides?: CallOverrides
    ): Promise<[string[]]>;

    governance(overrides?: CallOverrides): Promise<[string]>;

    initialize(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    keys(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    promote(
      version: string,
      vault: string,
      status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    remove(
      version: string,
      vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    set(
      key: string,
      at: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDev(
      newDev: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setGovernance(
      _newGov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    versions(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  add(
    version: string,
    vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addVersions(
    version: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addresses(arg0: string, overrides?: CallOverrides): Promise<string>;

  demote(
    version: string,
    vault: string,
    status: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  devGovernance(overrides?: CallOverrides): Promise<string>;

  get(key: string, overrides?: CallOverrides): Promise<string>;

  getFilteredProductionVaults(
    version: string,
    status: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string[]>;

  getProductionVaults(
    overrides?: CallOverrides
  ): Promise<BadgerRegistry.VaultDataStructOutput[]>;

  getVaults(
    version: string,
    author: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  governance(overrides?: CallOverrides): Promise<string>;

  initialize(
    newGovernance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  keys(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  promote(
    version: string,
    vault: string,
    status: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  remove(
    version: string,
    vault: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  set(
    key: string,
    at: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDev(
    newDev: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setGovernance(
    _newGov: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  versions(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    add(
      version: string,
      vault: string,
      overrides?: CallOverrides
    ): Promise<void>;

    addVersions(version: string, overrides?: CallOverrides): Promise<void>;

    addresses(arg0: string, overrides?: CallOverrides): Promise<string>;

    demote(
      version: string,
      vault: string,
      status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    devGovernance(overrides?: CallOverrides): Promise<string>;

    get(key: string, overrides?: CallOverrides): Promise<string>;

    getFilteredProductionVaults(
      version: string,
      status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string[]>;

    getProductionVaults(
      overrides?: CallOverrides
    ): Promise<BadgerRegistry.VaultDataStructOutput[]>;

    getVaults(
      version: string,
      author: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    governance(overrides?: CallOverrides): Promise<string>;

    initialize(newGovernance: string, overrides?: CallOverrides): Promise<void>;

    keys(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    promote(
      version: string,
      vault: string,
      status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    remove(
      version: string,
      vault: string,
      overrides?: CallOverrides
    ): Promise<void>;

    set(key: string, at: string, overrides?: CallOverrides): Promise<void>;

    setDev(newDev: string, overrides?: CallOverrides): Promise<void>;

    setGovernance(_newGov: string, overrides?: CallOverrides): Promise<void>;

    versions(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "AddKey(string)"(key?: null): AddKeyEventFilter;
    AddKey(key?: null): AddKeyEventFilter;

    "AddVersion(string)"(version?: null): AddVersionEventFilter;
    AddVersion(version?: null): AddVersionEventFilter;

    "DemoteVault(address,string,address,uint8)"(
      author?: null,
      version?: null,
      vault?: null,
      status?: null
    ): DemoteVaultEventFilter;
    DemoteVault(
      author?: null,
      version?: null,
      vault?: null,
      status?: null
    ): DemoteVaultEventFilter;

    "NewVault(address,string,address)"(
      author?: null,
      version?: null,
      vault?: null
    ): NewVaultEventFilter;
    NewVault(author?: null, version?: null, vault?: null): NewVaultEventFilter;

    "PromoteVault(address,string,address,uint8)"(
      author?: null,
      version?: null,
      vault?: null,
      status?: null
    ): PromoteVaultEventFilter;
    PromoteVault(
      author?: null,
      version?: null,
      vault?: null,
      status?: null
    ): PromoteVaultEventFilter;

    "RemoveVault(address,string,address)"(
      author?: null,
      version?: null,
      vault?: null
    ): RemoveVaultEventFilter;
    RemoveVault(
      author?: null,
      version?: null,
      vault?: null
    ): RemoveVaultEventFilter;

    "Set(string,address)"(key?: null, at?: null): SetEventFilter;
    Set(key?: null, at?: null): SetEventFilter;
  };

  estimateGas: {
    add(
      version: string,
      vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addVersions(
      version: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addresses(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    demote(
      version: string,
      vault: string,
      status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    devGovernance(overrides?: CallOverrides): Promise<BigNumber>;

    get(key: string, overrides?: CallOverrides): Promise<BigNumber>;

    getFilteredProductionVaults(
      version: string,
      status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProductionVaults(overrides?: CallOverrides): Promise<BigNumber>;

    getVaults(
      version: string,
      author: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    governance(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    keys(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    promote(
      version: string,
      vault: string,
      status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    remove(
      version: string,
      vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    set(
      key: string,
      at: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDev(
      newDev: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setGovernance(
      _newGov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    versions(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    add(
      version: string,
      vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addVersions(
      version: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addresses(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    demote(
      version: string,
      vault: string,
      status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    devGovernance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    get(key: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getFilteredProductionVaults(
      version: string,
      status: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProductionVaults(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVaults(
      version: string,
      author: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    governance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      newGovernance: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    keys(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    promote(
      version: string,
      vault: string,
      status: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    remove(
      version: string,
      vault: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    set(
      key: string,
      at: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDev(
      newDev: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setGovernance(
      _newGov: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    versions(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
