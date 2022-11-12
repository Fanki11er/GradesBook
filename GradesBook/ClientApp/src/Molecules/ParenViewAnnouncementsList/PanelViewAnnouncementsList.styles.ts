import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const ParentViewAnnouncementsListWrapper = styled.ul`
  width: 100%;
  height: 400px;
  display: grid;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.menuBackground};
  align-self: center;
  margin: 0;
  list-style: none;
  padding: 10px;
`;

//Todo: Add announcement element
