import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

type Props = {
  isModalOpened: boolean;
};

export const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.registerChildWrapper};
  top: 0;
  left: 0;
  transform: ${(props: Props & StyledTheme) =>
    props.isModalOpened ? "translateX(0)" : "translateX(-150%)"};
  opacity: ${(props: Props & StyledTheme) => (props.isModalOpened ? 1 : 0)};
  transition: translate 0.5s ease-in-out, opacity 0.7s;
  display: flex;
  justify-content: center;
  align-items: center;
`;
