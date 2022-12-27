import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const LoginFormWrapper = styled.form`
  display: grid;
  grid-row-gap: 15px;
  grid-auto-columns: 1fr;
  grid-auto-rows: 60px;
  justify-items: center;
  width: fit-content;
  height: auto;
  padding: 30px 50px;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  border-radius: 10px;
`;

export const LoginHeader = styled.h2`
  color: ${(props: StyledTheme) => props.theme.colors.transparentBlack};
`;

export const ButtonLoginWrapper = styled.div`
  margin-top: 20px;
`;
