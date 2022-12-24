import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const SettingsViewWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.mainBackground};
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-auto-rows: auto;
  justify-items: center;
`;

export const SettingsFormsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  justify-self: center;
  justify-items: center;
`;
