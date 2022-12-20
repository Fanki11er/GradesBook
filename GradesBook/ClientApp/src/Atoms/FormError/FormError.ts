import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const FormError = styled.span`
  width: 100%;
  border: 2px solid ${(props: StyledTheme) => props.theme.colors.errorRed};
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-weight: bold;
  color: ${(props: StyledTheme) => props.theme.colors.errorRed};
`;
