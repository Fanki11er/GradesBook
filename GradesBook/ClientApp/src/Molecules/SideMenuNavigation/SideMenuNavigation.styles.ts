import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const SideMenuNavigationWrapper = styled.nav`
  width: 100%;
  height: fit-content;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  row-gap: 20px;
  background-color: ${(props: StyledTheme) => props.theme.colors.transparent};
  border-bottom: 2px solid ${(props: StyledTheme) => props.theme.colors.white};
  padding-bottom: 25px;
`;
