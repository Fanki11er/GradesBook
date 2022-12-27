import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const ClassesFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 500px;
  height: auto;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  border-radius: 10px;
`;

export const ClassesText = styled.h2`
  color: ${(props: StyledTheme) => props.theme.colors.transparentBlack};
`;
