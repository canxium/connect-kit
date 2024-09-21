import { UseWalletModalProps } from "../components/UseWalletModal/UseWalletModal";
import { ExtensionInstallModalProps } from "../components/ExtensionInstallModal/ExtensionInstallModal";
type ModalType = 'UseWalletModal' | 'PlatformNotSupportedModal' | 'ExtensionInstallModal';
/**
 * Shows a modal component.
 */
export declare function showModal(modalType: ModalType, props?: ExtensionInstallModalProps | UseWalletModalProps): void;
/**
 * Shows one of two modals depending on if the extension is supported or not.
 */
export declare function showExtensionOrLLModal(props: {
    uri: string;
    onClose: Function;
}): void;
/**
 * Shows one of two modals depending on if the extension is supported or not.
 */
export declare function showLLModal(props: {
    uri: string;
    onClose: Function;
}): void;
export {};
