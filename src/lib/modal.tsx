import { setIsModalOpen } from "../components/Modal/Modal";
import { createRoot, Root } from "react-dom/client";
import {
  ExtensionInstallModal,
  UseWalletModal,
  PlatformNotSupportedModal
} from "../components";
import { UseWalletModalProps } from "../components/UseWalletModal/UseWalletModal";
import { ExtensionInstallModalProps } from "../components/ExtensionInstallModal/ExtensionInstallModal";
import { getBrowser } from "./browser";
import { getSupportResult } from "./support";
import { getSupportOptions } from "./supportOptions";

type ModalType =
  'UseWalletModal' |
  'PlatformNotSupportedModal' |
  'ExtensionInstallModal'

let root: Root | null = null;

/**
 * Shows a modal component.
 */
export function showModal(
  modalType: ModalType,
  props?: ExtensionInstallModalProps | UseWalletModalProps
) {
  if (!root) {
    const el = document.body;
    const container = document.createElement("div");
    container.className = "ledger-ck-modal";
    el.appendChild(container);
    root = createRoot(container)
  }

  if (root && !!modalType) {
    let component;

    switch (modalType) {
      case 'UseWalletModal':
        component = <UseWalletModal {...props} />;
        break;
      case "PlatformNotSupportedModal":
        component = <PlatformNotSupportedModal />
        break
      case 'ExtensionInstallModal':
        component = <ExtensionInstallModal {...props} />
        break;
    }

    root.render(component);
  }

  setIsModalOpen(true);
}

/**
 * Shows one of two modals depending on if the extension is supported or not.
 */
export function showExtensionOrLLModal(props: { uri: string, onClose: Function }) {
  const device = getBrowser();
  const supportResults = getSupportResult();
  const supportOptions = getSupportOptions();

  // direct user to install the extension if supported
  if (
    !localStorage?.getItem('connectKit_forceWcV2') &&
    !localStorage?.getItem('connectKit_forceWcV1') &&
    supportResults.isLedgerConnectSupported &&
    supportResults.isChainIdSupported
  ) {
    showModal('ExtensionInstallModal', {
      // pass an onClose callback that throws when the modal is closed
      onClose: props.onClose,
    });
  } else {
    showModal('UseWalletModal', {
      // show the QR code if we are on a desktop browser
      isDesktop: device.type === 'desktop',
      uri: props.uri,
      // pass an onClose callback that throws when the modal is closed
      onClose: props.onClose,
    });
  }
}

/**
 * Shows one of two modals depending on if the extension is supported or not.
 */
export function showLLModal(props: { uri: string, onClose: Function }) {
  const device = getBrowser();

  showModal('UseWalletModal', {
    // show the QR code if we are on a desktop browser
    isDesktop: device.type === 'desktop',
    uri: props.uri,
    // pass an onClose callback that throws when the modal is closed
    onClose: props.onClose,
  });
}
