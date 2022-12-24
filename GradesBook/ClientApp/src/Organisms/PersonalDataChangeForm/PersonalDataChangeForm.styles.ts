import { Form } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const PersonalDataChangeFormWrapper = styled(Form)`
  width: 100%;
  max-width: 500px;
  height: fit-content;
  display: grid;
  grid-column: 100%;
  grid-auto-rows: auto;
  row-gap: 40px;
  justify-items: center;
  align-items: center;
  padding: 30px 20px;
  box-shadow: -5px 5px 5px 1px
    ${(props: StyledTheme) => props.theme.colors.shadow};
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  border-radius: 10px;
  color: ${(props: StyledTheme) => props.theme.colors.menuBackground};
`;

export const PersonalDataChangeFormHeader = styled.h3`
  display: flex;
  width: 100%;
  height: 100%;
  color: ${(props: StyledTheme) => props.theme.colors.menuBackground};
  font-size: ${(props: StyledTheme) => props.theme.fontSizes.medium};
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const PersonalDataChangeFormInputsWrapper = styled.div`
  width: 70%;
  min-width: 200px;
  max-width: 250px;
  height: 100%;
  display: grid;
  grid-auto-rows: auto;
  row-gap: 20px;
  grid-template-columns: 100%;
  justify-self: center;
`;
