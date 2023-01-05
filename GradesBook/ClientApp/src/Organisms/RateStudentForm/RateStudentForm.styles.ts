import { Form } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const RateStudentFormWrapper = styled(Form)`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 40px 25px;
  grid-auto-rows: 80px;
  grid-template-columns: 1fr;
  width: 450px;
  height: fit-content;
  max-height: 550px;
  border-radius: 10px;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  color: ${(props: StyledTheme) => props.theme.colors.menuBackground};
  row-gap: 40px;
  box-shadow: -5px 5px 5px 1px
    ${(props: StyledTheme) => props.theme.colors.shadow};
`;
