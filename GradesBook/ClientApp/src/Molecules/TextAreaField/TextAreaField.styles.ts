import { Field } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const TextArea = styled(Field)`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.mainBackground};
  resize: none;
  outline: none;
  padding: 15px;
`;

export const TextAreaFieldWrapper = styled.div`
  width: 600px;
  height: 200px;
  display: grid;
  grid-template-rows: 30px 1fr;
  grid-template-columns: 100%;
  grid-row-gap: 10px;
  justify-content: center;
  justify-self: flex-end;
`;

export const TextAreaFieldLabel = styled.label`
  width: 100%;
  height: 100%;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  font-weight: bold;
`;
