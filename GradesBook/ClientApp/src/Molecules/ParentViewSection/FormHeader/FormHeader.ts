import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const FormHeader = styled.h2`
  width: 100%;
  height: 100%;
  margin: 0;
  color: ${(props: StyledTheme) => props.theme.colors.registerChildrenHeader};
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
`;
