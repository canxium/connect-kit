import { Device } from "../lib/browser";
export declare const EXTENSION_EVM_GLOBAL = "ethereum";
export declare const EXTENSION_EVM_PROP = "isLedgerConnect";
export declare enum ExtensionSupportedChains {
    EthereumMainnet = 1,
    Polygon = 137
}
/**
 * Checks if the user's platform supports the extension.
 */
export declare function isExtensionSupported(device: Device): boolean;
/**
 * Checks if the chain id is supported by the extension.
 */
export declare function isChainIdSupported(chainId: number): boolean;
/**
 * Checks if all the chain ids are supported by the extension.
 */
export declare function areAllRequiredChainsSupported(chains: number[]): boolean;
export type EthereumRequestPayload = {
    method: string;
    params?: unknown[] | Record<string, unknown> | undefined;
};
/**
 * A common interface for all the returned providers.
 */
export interface EthereumProvider {
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
export interface ExtensionEvmProvider extends EthereumProvider {
    [EXTENSION_EVM_PROP]: boolean;
}
/**
 * Gets the extension provider. In case it does not exist returns an instance
 * of the install provider.
 */
export declare function getExtensionProvider(): EthereumProvider;
