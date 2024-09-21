import { default as WalletConnectProvider } from "../support/EthereumProvider/EthereumProvider";
import { CheckSupportWalletConnectProviderOptions } from "../lib/supportOptions";
/**
 * Specifies the required options for the provider.
 */
export type WalletConnectProviderOptions = CheckSupportWalletConnectProviderOptions & {
    projectId: string;
    chains: number[];
};
/**
 * Gets the WalletConnect provider.
 */
export declare function getWalletConnectProvider(): Promise<WalletConnectProvider>;
