import { Field } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const CheckBoxFieldWrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 30px;
  grid-template-rows: 1fr;
  column-gap: 5px;
  align-items: center;
  padding: 10px;
  border: 2px solid ${(props: StyledTheme) => props.theme.colors.lightBorder};
  border-radius: 10px;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.backgroundCheckbox};
  :hover {
    background-color: ${(props: StyledTheme) => props.theme.colors.green};
  }
`;

export const CheckboxFieldLabel = styled.label`
  color: ${(props: StyledTheme) => props.theme.colors.labelCheckbox};

  :hover {
    color: ${(props: StyledTheme) => props.theme.colors.hoverLabelCheckbox};
  }
`;

export const CheckboxInput = styled(Field)`
  width: 25px;
  height: 25px;
  display: flex;
  border-radius: 5px;
  justify-self: center;
  align-self: center;
`;
