import { EthereumProvider } from './ExtensionEvm';
import { CheckSupportWalletConnectLegacyProviderOptions } from '../lib/supportOptions';
export type WalletConnectLegacyProviderOptions = CheckSupportWalletConnectLegacyProviderOptions;
/**
 * Gets the legacy WalletConnect provider.
 */
export declare function getWalletConnectLegacyProvider(): Promise<EthereumProvider>;
