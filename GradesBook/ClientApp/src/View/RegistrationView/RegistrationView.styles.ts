import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const RegistrationViewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.mainBackground};
`;
