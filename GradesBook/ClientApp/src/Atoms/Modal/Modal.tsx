import { ModalWrapper } from "./Modal.styles";
import { PropsWithChildren } from "react";

type Props = {
  isModalOpened: boolean;
};

const Modal = (props: Props & PropsWithChildren) => {
  const { isModalOpened } = props;

  return (
    <ModalWrapper isModalOpened={isModalOpened}>{props.children}</ModalWrapper>
  );
};

export default Modal;
