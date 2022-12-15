import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const LandingPageWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.mainBackground};
  display: grid;
  grid-template-columns: repeat(12);
`;
