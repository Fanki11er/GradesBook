import styled from "styled-components";
import { Form } from "formik";
import { StyledTheme } from "../../GlobalStyles/theme";

export const RegistrationFormWrapper = styled(Form)`
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

export const RegistrationHeader = styled.h2`
  color: ${(props: StyledTheme) => props.theme.colors.transparentBlack};
`;
