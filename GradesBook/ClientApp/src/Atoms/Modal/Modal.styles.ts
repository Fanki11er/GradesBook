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
    props.theme.colors.transparentBlack};
  top: 0;
  left: 0;
  transform: ${(props: Props & StyledTheme) =>
    props.isModalOpened ? "translateX(0)" : "translateX(-150%)"};
  transition: all 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`;
