import { Form } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const RegisterChildFormWrapper = styled(Form)`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 40px 25px;
  grid-auto-rows: auto;
  width: 450px;
  height: auto;
  border-radius: 10px;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  color: ${(props: StyledTheme) => props.theme.colors.menuBackground};
  row-gap: 40px; ;
`;

export const RegisterChildFormInputsWrapper = styled.div`
  width: 70%;
  min-width: 200px;
  height: 100%;
  display: grid;
  grid-auto-rows: auto;
  row-gap: 10px;
  grid-template-columns: 100%;
  justify-self: center;
`;
