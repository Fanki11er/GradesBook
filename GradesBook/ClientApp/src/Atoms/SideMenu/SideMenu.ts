import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const ViewSideMenu = styled.menu`
  display: grid;
  grid-row-gap: 20px;
  grid-auto-columns: 1fr;
  grid-template-rows: auto 1fr;
  align-items: flex-start;
  width: 100%;
  height: auto;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.menuBackground};
  justify-items: center;
  margin: 0;
  padding: 40px 0;
`;

export const SpecificOptionsWrapper = styled.div`
  display: grid;
  grid-row-gap: 15px;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
`;
