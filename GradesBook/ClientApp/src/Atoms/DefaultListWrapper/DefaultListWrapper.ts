import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const DefaultListWrapper = styled.ul`
  width: 100%;
  height: 428px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 60px;
  row-gap: 10px;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  align-self: center;
  margin: 0;
  list-style: none;
  padding: 15px;
  box-shadow: -5px 5px 5px 1px
    ${(props: StyledTheme) => props.theme.colors.shadow};
  border-radius: 5px;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 20px;
    background-color: ${(props: StyledTheme) => props.theme.colors.white};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props: StyledTheme) =>
      props.theme.colors.menuBackground};
    border-radius: 15px;
    border: 1px solid;
  }
`;
