import { Field } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const InputWrapper = styled(Field)`
  border: 2px solid ${(props: StyledTheme) => props.theme.colors.buttonsGray};
  border-radius: 10px;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  outline: none;
  width: 250px;
  height: 100%;
  box-shadow: -2px 4px 10px 0
    ${(props: StyledTheme) => props.theme.colors.shadow};
  padding: 0 20px;
  color: ${(props: StyledTheme) => props.theme.colors.inputGray};
`;
