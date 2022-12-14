import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const ParentViewSectionWrapper = styled.section`
  display: grid;
  grid-template-rows: 40px 1fr;
  grid-row-gap: 15px;
  margin: 0;
  padding: 0;
  align-self: center;
`;

export const ParentViewSectionHeader = styled.h2`
  font-weight: bold;
  font-size: 20px;
  color: ${(props: StyledTheme) => props.theme.colors.header};
`;
