import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const ClassesFormWrapper = styled.section`
  width: 500px;
  display: grid;
  grid-template-rows: 40px 1fr;
  grid-row-gap: 15px;
  margin: 0;
  padding: 0;
  align-self: center;
  max-height: 400px;
  justify-items: center;
  color: ${(props: StyledTheme) => props.theme.colors.textHeader};
`;

export const ClassSectionHeader = styled.h2`
  justify-self: flex-start;
  margin: 0;
  font-weight: bold;
  font-size: ${(props: StyledTheme) => props.theme.fontSizes.large};
`;
