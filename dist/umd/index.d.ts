type EthereumRequestPayload = {
    method: string;
    params?: unknown[] | Record<string, unknown> | undefined;
};
/**
 * A common interface for all the returned providers.
 */
interface EthereumProvider {
    providers?: EthereumProvider[];
    connector?: unknown;
    session?: unknown;
    chainId: string | number;
    request<T = unknown>(args: EthereumRequestPayload): Promise<T>;
    disconnect?: {
        (): Promise<void>;
    };
    on(event: any, listener: any): void;
    removeListener(event: string, listener: any): void;
}

declare enum SupportedProviders {
    Ethereum = "Ethereum"
}
declare enum SupportedProviderImplementations {
    LedgerConnect = "LedgerConnect",
    WalletConnect = "WalletConnect"
}
type ProviderResult = EthereumProvider;
/**
 * Gets a provider instance based on the implementation set earlier.
 */
declare function getProvider(): Promise<ProviderResult>;

type CheckSupportCommonOptions = {
    walletConnectVersion?: number;
    providerType: SupportedProviders;
};
type CheckSupportWalletConnectProviderOptions = {
    projectId?: string;
    chains?: number[];
    optionalChains?: number[];
    methods?: string[];
    optionalMethods?: string[];
    events?: string[];
    optionalEvents?: string[];
    rpcMap?: {
        [chainId: string]: string;
    };
    relayUrl?: string;
};
type CheckSupportWalletConnectLegacyProviderOptions = {
    chainId?: number;
    bridge?: string;
    infuraId?: string;
    rpc?: {
        [chainId: number]: string;
    };
};
type CheckSupportOptions = CheckSupportCommonOptions & CheckSupportWalletConnectProviderOptions & CheckSupportWalletConnectLegacyProviderOptions;

type CheckSupportResult = {
    isLedgerConnectSupported?: boolean;
    isLedgerConnectEnabled?: boolean;
    isChainIdSupported?: boolean;
    providerImplementation: SupportedProviderImplementations;
};
/**
 * Check support for user's platform.
 */
declare function checkSupport(options: CheckSupportOptions): CheckSupportResult;

declare const enableDebugLogs: () => void;

export { EthereumProvider, SupportedProviderImplementations, SupportedProviders, checkSupport, enableDebugLogs, getProvider };
