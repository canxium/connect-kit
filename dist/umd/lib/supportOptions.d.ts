import { WalletConnectProviderOptions } from "../providers/WalletConnectEvm";
import { WalletConnectLegacyProviderOptions } from '../providers/WalletConnectLegacy';
import { SupportedProviders } from "./provider";
type CheckSupportCommonOptions = {
    walletConnectVersion?: number;
    providerType: SupportedProviders;
};
export type CheckSupportWalletConnectProviderOptions = {
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
export type CheckSupportWalletConnectLegacyProviderOptions = {
    chainId?: number;
    bridge?: string;
    infuraId?: string;
    rpc?: {
        [chainId: number]: string;
    };
};
export type CheckSupportOptions = CheckSupportCommonOptions & CheckSupportWalletConnectProviderOptions & CheckSupportWalletConnectLegacyProviderOptions;
export type ValidatedSupportOptions = CheckSupportOptions & WalletConnectProviderOptions & WalletConnectLegacyProviderOptions;
/**
 * Sets defaults and makes the result available for other modules.
 */
export declare const setSupportOptions: (options: CheckSupportOptions) => void;
/**
 * Gets the validated support options.
 */
export declare const getSupportOptions: () => ValidatedSupportOptions;
export {};
