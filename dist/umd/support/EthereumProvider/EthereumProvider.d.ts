/// <reference types="node" />
import { EventEmitter } from "events";
import { KeyValueStorageOptions } from "@walletconnect/keyvaluestorage";
import { IEthereumProvider as IProvider, IEthereumProviderEvents, ProviderAccounts, RequestArguments } from "./types";
import { Metadata, Namespace, UniversalProvider } from "@walletconnect/universal-provider/dist/index.umd.js";
export type RpcEvent = "accountsChanged" | "chainChanged" | "message" | "disconnect" | "connect";
export interface EthereumRpcMap {
    [chainId: string]: string;
}
export interface SessionEvent {
    event: {
        name: string;
        data: any;
    };
    chainId: string;
}
export interface EthereumRpcConfig {
    chains: string[];
    optionalChains?: string[];
    methods: string[];
    optionalMethods?: string[];
    /**
     * @description Events that the wallet MUST support or the connection will be rejected
     */
    events: string[];
    optionalEvents?: string[];
    rpcMap: EthereumRpcMap;
    projectId: string;
    metadata?: Metadata;
}
export interface ConnectOps {
    chains?: number[];
    optionalChains?: number[];
    rpcMap?: EthereumRpcMap;
    pairingTopic?: string;
}
export interface IEthereumProvider extends IProvider {
    connect(opts?: ConnectOps | undefined): Promise<void>;
}
export declare function getRpcUrl(chainId: string, rpc: EthereumRpcConfig): string | undefined;
export declare function getEthereumChainId(chains: string[]): number;
export declare function toHexChainId(chainId: number): string;
export type NamespacesParams = {
    chains: EthereumRpcConfig["chains"];
    optionalChains?: EthereumRpcConfig["optionalChains"];
    methods?: EthereumRpcConfig["methods"];
    optionalMethods?: EthereumRpcConfig["methods"];
    events?: EthereumRpcConfig["events"];
    rpcMap: EthereumRpcConfig["rpcMap"];
    optionalEvents?: EthereumRpcConfig["events"];
};
export declare function buildNamespaces(params: NamespacesParams): {
    required: Namespace;
    optional?: Namespace;
};
export interface EthereumProviderOptions {
    projectId: string;
    /**
     * @note Chains that your app intents to use and the peer MUST support. If the peer does not support these chains, the connection will be rejected.
     * @default [1]
     * @example [1, 3, 4, 5, 42]
     */
    chains: number[];
    /**
     * @note Optional chains that your app MAY attempt to use and the peer MAY support. If the peer does not support these chains, the connection will still be established.
     * @default [1]
     * @example [1, 3, 4, 5, 42]
     */
    optionalChains?: number[];
    /**
     * @note Methods that your app intents to use and the peer MUST support. If the peer does not support these methods, the connection will be rejected.
     * @default ["eth_sendTransaction", "personal_sign"]
     */
    methods?: string[];
    /**
     * @note Methods that your app MAY attempt to use and the peer MAY support. If the peer does not support these methods, the connection will still be established.
     */
    optionalMethods?: string[];
    events?: string[];
    optionalEvents?: string[];
    rpcMap?: EthereumRpcMap;
    metadata?: Metadata;
    disableProviderPing?: boolean;
    relayUrl?: string;
    storageOptions?: KeyValueStorageOptions;
}
export declare class EthereumProvider implements IEthereumProvider {
    events: EventEmitter<[never]>;
    namespace: string;
    accounts: string[];
    signer: InstanceType<typeof UniversalProvider>;
    chainId: number;
    protected rpc: EthereumRpcConfig;
    protected readonly STORAGE_KEY: string;
    constructor();
    static init(opts: EthereumProviderOptions): Promise<EthereumProvider>;
    request<T = unknown>(args: RequestArguments): Promise<T>;
    sendAsync(args: RequestArguments, callback: (error: Error | null, response: any) => void): void;
    get connected(): boolean;
    get connecting(): boolean;
    enable(): Promise<ProviderAccounts>;
    connect(opts?: ConnectOps): Promise<void>;
    disconnect(): Promise<void>;
    on: IEthereumProviderEvents["on"];
    once: IEthereumProviderEvents["once"];
    removeListener: IEthereumProviderEvents["removeListener"];
    off: IEthereumProviderEvents["off"];
    get isWalletConnect(): boolean;
    get session(): any;
    protected registerEventListeners(): void;
    protected switchEthereumChain(chainId: number): void;
    protected isCompatibleChainId(chainId: string): boolean;
    protected formatChainId(chainId: number): string;
    protected parseChainId(chainId: string): number;
    protected setChainIds(chains: string[]): void;
    protected setChainId(chain: string): void;
    protected parseAccountId(account: string): {
        chainId: string;
        address: string;
    };
    protected setAccounts(accounts: string[]): void;
    protected getRpcConfig(opts: EthereumProviderOptions): EthereumRpcConfig;
    protected buildRpcMap(chains: number[], projectId: string): EthereumRpcMap;
    protected initialize(opts: EthereumProviderOptions): Promise<void>;
    protected loadConnectOpts(opts?: ConnectOps): void;
    protected getRpcUrl(chainId: number, projectId?: string): string;
    protected loadPersistedSession(): Promise<void>;
    protected reset(): void;
    protected persist(): void;
    protected parseAccounts(payload: string | string[]): string[];
    protected parseAccount: (payload: any) => string;
}
export default EthereumProvider;
