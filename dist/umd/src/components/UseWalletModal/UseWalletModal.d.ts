import { ModalProps } from "../Modal/Modal";
export declare let setWalletConnectUri: (uri: string) => void;
export type UseWalletModalProps = {
    isDesktop?: boolean;
    uri?: string;
} & ModalProps;
declare const UseWalletModal: ({ isDesktop, uri, onClose, }: UseWalletModalProps) => import("react/jsx-runtime").JSX.Element;
export default UseWalletModal;
