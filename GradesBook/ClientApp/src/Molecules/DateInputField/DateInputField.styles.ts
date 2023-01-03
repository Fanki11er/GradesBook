import { Field } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const DateInput = styled(Field)`
  height: 30px;
  padding: 20px;
  transition: all 0.3s;
`;

export const DateInputFieldWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  border: 2px solid ${(props: StyledTheme) => props.theme.colors.lightBorder};
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 20px;
  align-items: center;
  transition: all 0.3s;
  :hover {
    background-color: ${(props: StyledTheme) => props.theme.colors.green};
    ${DateInput} {
      background-color: ${(props: StyledTheme) => props.theme.colors.green};
    }
  }
`;

export const DateInputLabel = styled.label`
  width: 100%;
`;
