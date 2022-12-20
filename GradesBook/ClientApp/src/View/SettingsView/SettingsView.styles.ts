import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const SettingsViewWrapper = styled.div`
  padding: 50px;
  width: 100%;
  height: 100%;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.mainBackground};
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  justify-items: center;
`;
