import { useCallback, useEffect, useRef, useState } from "react";
import { getDebugLogger } from "../../lib/logger";
import Modal, { ModalProps, setIsModalOpen } from "../Modal/Modal";
import {
  ModalButton,
  ModalSection,
  ModalText,
  ModalTitle,
  Link,
} from "../Modal/Modal.styles";
import { QrCode, QrCodeSection } from "./UseWalletModal.styles";

const log = getDebugLogger('UseWalletModal');

// placeholder functions until the component is initialized
let setModalUri = (uri: string) => {};

// called by the WalletConnect display_uri event handler to set a new URI
export let setWalletConnectUri = (uri: string): void => {
  log('setModalUri', uri);
  setModalUri(uri);
}

export type UseWalletModalProps = {
  isDesktop?: boolean;
  uri?: string;
} & ModalProps;

const UseWalletModal = ({
  isDesktop = false,
  uri = '',
  onClose = () => void 0,
}: UseWalletModalProps) => {
  log('initializing', { isDesktop, uri });

  // use the uri prop as the initial start value
  const [wcUri, setWcUri] = useState<string>(uri);
  // replace the placeholder function by the setState one
  setModalUri = setWcUri;
  // update state only if supplied URI is different from previous and current
  const previousUriRef = useRef<string>();
  const previousUri = previousUriRef.current;
  if (uri !== previousUri && uri !== wcUri) {
    setWcUri(uri);
  }
  // update the previous URI ref on each rerender
  useEffect(() => {
    previousUriRef.current = uri;
  });

  const onUseWalletClick = useCallback(() => {
    window.location.href = `canxium://wc?uri=${encodeURIComponent(wcUri)}`;

    // close the modal so that the current WalletConnect URI cannot be reused
    setIsModalOpen(false);

    return false;
  }, [wcUri]);

  return (
    <Modal onClose={onClose}>
      <ModalSection textAlign="center">
        <ModalTitle>Connect with Canxium Wallet</ModalTitle>

        {isDesktop && wcUri !== '' &&
          <>
            <ModalText>
            Scan on Canxium Wallet
            </ModalText>

            <QrCodeSection>
              <QrCode value={wcUri} size={310} />
            </QrCodeSection>
          </>
        }

        {!isDesktop && wcUri !== '' &&
          <ModalButton variant="primary" onClick={onUseWalletClick} extraMargin>
            Connect with Canxium mobile
          </ModalButton>
        }
      </ModalSection>
    </Modal>
  );
};

export default UseWalletModal;
