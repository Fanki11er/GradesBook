import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const NavigationWrapper = styled.nav`
  width: 100%;
  height: 100%;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.mainBackground};
  grid-row: 1/2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border: 2px solid ${(props: StyledTheme) => props.theme.colors.lightBorder};
`;

//export const NavigationImg = styled.img``;

export const NavigationImg = styled.div`
  width: 20px;
  height: 20px;
  background-color: gray;
`;

export const NavigationText = styled.span`
  width: 500px;
`;
