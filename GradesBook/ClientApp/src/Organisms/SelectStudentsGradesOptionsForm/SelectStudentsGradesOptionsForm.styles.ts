import { Form } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const SelectStudentsGradesOptionsFormWrapper = styled(Form)`
  width: 100%;
  max-width: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: auto;
`;

export const CheckboxGroupWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row-gap: 5px;
  justify-items: flex-end;
  align-content: center;
  justify-self: center;
  padding: 15px 10px;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  border-radius: 10px;
  grid-column: 1/3;
`;
