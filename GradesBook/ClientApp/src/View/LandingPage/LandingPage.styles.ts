import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const LandingPageWrapper = styled.div`
  width: 100%;
  height: 100%;
  /*background-color: ${(props: StyledTheme) =>
    props.theme.colors.mainBackground};*/
  background-color: rgba(47, 46, 65, 1);
  display: grid;
  grid-template-columns: repeat(12);
`;
