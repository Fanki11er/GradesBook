import { Form } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const ClassCreationFormWrapper = styled(Form)`
  width: 500px;
  height: auto;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  display: grid;
  grid-gap: 20px;
  padding: 30px;
  border-radius: 10px;
`;

export const FormButtonOkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
