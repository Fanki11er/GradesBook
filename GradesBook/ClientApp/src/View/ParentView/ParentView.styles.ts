import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const ParentViewWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.mainBackground};
  display: grid;
  grid-column-gap: 60px;
  grid-template-columns: 220px 0.4fr 0.6fr;
  padding-right: 50px;
`;

export const ParentViewSideMenu = styled.menu`
  display: grid;
  grid-row-gap: 15px;
  grid-auto-columns: 1fr;
  grid-auto-rows: 60px;
  width: 100%;
  height: auto;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.menuBackground};
  justify-items: center;
  margin: 0;
  padding: 40px 0;
`;
