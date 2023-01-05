import { Form } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const SelectStudentsGradesOptionsFormWrapper = styled(Form)`
  width: 100%;
  max-width: 700px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 20px;
  grid-auto-rows: auto;
  justify-items: center;
`;

export const ButtonWrapper = styled.div`
  grid-column: 1 /3;
  display: grid;
  justify-content: center;
  margin-top: 30px;
`;

export const CheckboxesHeader = styled.h2`
  width: 100%;
  height: 50px;
  margin: 0;
  color: ${(props: StyledTheme) => props.theme.colors.menuBackground};
  font-weight: 700;
  display: flex;
  align-items: center;
  grid-column: 1/4;
`;
export const CheckboxGroupWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  display: grid;
  grid-template-columns: 200px 200px 200px;
  grid-auto-rows: auto;
  gap: 15px;
  justify-items: flex-end;
  align-content: center;
  justify-self: center;
  padding: 20px;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  border-radius: 10px;
  grid-column: 1/3;
  box-shadow: -5px 5px 5px 1px
    ${(props: StyledTheme) => props.theme.colors.shadow};
`;

export const DateFieldsWrapper = styled.div`
  width: 670px;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  padding: 20px;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  border-radius: 10px;
  grid-column: 1/3;
  box-shadow: -5px 5px 5px 1px
    ${(props: StyledTheme) => props.theme.colors.shadow};
  justify-self: center;
`;
