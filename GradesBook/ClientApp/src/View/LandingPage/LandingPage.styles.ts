import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const LandingPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.mainBackground};
  display: grid;
  padding-top: 30px;
  row-gap: 30px;
`;

export const LandingPageOptions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;

export const LandingPageLogo = styled.img`
  width: 450px;
  display: flex;
  justify-self: center;
  align-self: center;
`;

export const LandingPageHeader = styled.h1`
  color: ${(props: StyledTheme) => props.theme.colors.purple};
  font-size: ${(props: StyledTheme) => props.theme.fontSizes.large};
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const ButtonLogOutWrapper = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 30px;
  justify-content: center;
  align-items: center;
  justify-self: center;
  padding: 50px 20px;
`;
