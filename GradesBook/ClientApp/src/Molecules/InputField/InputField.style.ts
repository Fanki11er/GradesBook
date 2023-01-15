import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const InputFieldWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20px 35px;
  row-gap: 5px;
`;

export const InputLabel = styled.label`
  font-size: 16px;
  color: ${(props: StyledTheme) => props.theme.colors.labelNameList};
  font-weight: bold;
`;
