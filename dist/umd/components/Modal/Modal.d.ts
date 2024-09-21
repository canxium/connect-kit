import { ReactElement } from "react";
export declare let setIsModalOpen: (isModalOpen: boolean) => void;
export interface ModalProps {
    isOpen?: boolean;
    onClose?: Function;
    children?: ReactElement | null;
}
export declare const Modal: ({ onClose, children }: ModalProps) => import("react/jsx-runtime").JSX.Element | null;
export default Modal;
