import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const ClassSettingsWrapper = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.mainBackground};
`;
