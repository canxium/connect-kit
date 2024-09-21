import { SupportedProviderImplementations } from "./provider";
import { CheckSupportOptions } from "./supportOptions";
export type CheckSupportResult = {
    isLedgerConnectSupported?: boolean;
    isLedgerConnectEnabled?: boolean;
    isChainIdSupported?: boolean;
    providerImplementation: SupportedProviderImplementations;
};
/**
 * Check support for user's platform.
 */
export declare function checkSupport(options: CheckSupportOptions): CheckSupportResult;
/**
 * Gets support results.
 */
export declare function getSupportResult(): CheckSupportResult;
