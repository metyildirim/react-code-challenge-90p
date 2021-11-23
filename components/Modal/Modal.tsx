import { StyledModal } from "./Modal.style";

export type ModalProps = {
  children: JSX.Element;
};

const Modal = ({ children }: ModalProps) => {
  return <StyledModal>{children}</StyledModal>;
};

export default Modal;
