import { EthereumProvider } from "../providers/ExtensionEvm";
export declare const DEFAULT_CHAIN_ID: number;
export declare const DEFAULT_REQUIRED_CHAINS: number[];
export declare const DEFAULT_WALLETCONNECT_VERSION: number;
export declare enum SupportedProviders {
    Ethereum = "Ethereum"
}
export declare enum SupportedProviderImplementations {
    LedgerConnect = "LedgerConnect",
    WalletConnect = "WalletConnect"
}
export type ProviderResult = EthereumProvider;
/**
 * Sets the provider implementation to be used by getProvider.
 */
export declare function setProviderImplementation(providerImplementation: SupportedProviderImplementations): void;
/**
 * Gets a provider instance based on the implementation set earlier.
 */
export declare function getProvider(): Promise<ProviderResult>;
/**
 * Gets the hex chainId from a number or string.
 */
export declare const getHexChainId: (chainId: string | number) => string;
