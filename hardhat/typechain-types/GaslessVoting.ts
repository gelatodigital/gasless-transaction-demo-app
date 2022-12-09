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
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export type ProposalStateStruct = {
  positive: BigNumberish;
  negative: BigNumberish;
  proposalTimestamp: BigNumberish;
  currentProposalId: BigNumberish;
  payload: BytesLike;
};

export type ProposalStateStructOutput = [
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string
] & {
  positive: BigNumber;
  negative: BigNumber;
  proposalTimestamp: BigNumber;
  currentProposalId: BigNumber;
  payload: string;
};

export interface GaslessVotingInterface extends utils.Interface {
  functions: {
    "_createProposal(uint256,bytes)": FunctionFragment;
    "_votingProposal(bool,address)": FunctionFragment;
    "getProposalState()": FunctionFragment;
    "isTrustedForwarder(address)": FunctionFragment;
    "proposalState(uint256)": FunctionFragment;
    "votingProposal(bool)": FunctionFragment;
    "withdraw()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "_createProposal",
    values: [BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "_votingProposal",
    values: [boolean, string]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposalState",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isTrustedForwarder",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "proposalState",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "votingProposal",
    values: [boolean]
  ): string;
  encodeFunctionData(functionFragment: "withdraw", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "_createProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_votingProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposalState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isTrustedForwarder",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proposalState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "votingProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;

  events: {};
}

export interface GaslessVoting extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GaslessVotingInterface;

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
    _createProposal(
      _proposalId: BigNumberish,
      payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    _votingProposal(
      positive: boolean,
      voter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getProposalState(
      overrides?: CallOverrides
    ): Promise<[ProposalStateStructOutput]>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    proposalState(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, string] & {
        positive: BigNumber;
        negative: BigNumber;
        proposalTimestamp: BigNumber;
        currentProposalId: BigNumber;
        payload: string;
      }
    >;

    votingProposal(
      positive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  _createProposal(
    _proposalId: BigNumberish,
    payload: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  _votingProposal(
    positive: boolean,
    voter: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getProposalState(
    overrides?: CallOverrides
  ): Promise<ProposalStateStructOutput>;

  isTrustedForwarder(
    forwarder: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  proposalState(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, BigNumber, string] & {
      positive: BigNumber;
      negative: BigNumber;
      proposalTimestamp: BigNumber;
      currentProposalId: BigNumber;
      payload: string;
    }
  >;

  votingProposal(
    positive: boolean,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    _createProposal(
      _proposalId: BigNumberish,
      payload: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    _votingProposal(
      positive: boolean,
      voter: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getProposalState(
      overrides?: CallOverrides
    ): Promise<ProposalStateStructOutput>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    proposalState(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber, string] & {
        positive: BigNumber;
        negative: BigNumber;
        proposalTimestamp: BigNumber;
        currentProposalId: BigNumber;
        payload: string;
      }
    >;

    votingProposal(positive: boolean, overrides?: CallOverrides): Promise<void>;

    withdraw(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    _createProposal(
      _proposalId: BigNumberish,
      payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    _votingProposal(
      positive: boolean,
      voter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getProposalState(overrides?: CallOverrides): Promise<BigNumber>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proposalState(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    votingProposal(
      positive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    _createProposal(
      _proposalId: BigNumberish,
      payload: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    _votingProposal(
      positive: boolean,
      voter: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getProposalState(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isTrustedForwarder(
      forwarder: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proposalState(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    votingProposal(
      positive: boolean,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    withdraw(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
