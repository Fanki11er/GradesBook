import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const DefaultListWrapper = styled.ul`
  width: 100%;
  height: 400px;
  display: grid;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  align-self: center;
  margin: 0;
  list-style: none;
  padding: 15px;
  box-shadow: -5px 5px 5px 1px
    ${(props: StyledTheme) => props.theme.colors.shadow};
  border-radius: 5px;
`;