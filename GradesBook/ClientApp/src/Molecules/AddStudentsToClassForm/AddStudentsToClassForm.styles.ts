import { Form } from "formik";
import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const AddStudentsToClassFormWrapper = styled(Form)`
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 40px 25px;
  grid-template-rows: 30px 1fr 30px;
  grid-template-columns: 1fr;
  width: 500px;
  height: fit-content;
  max-height: 505px;
  border-radius: 10px;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  color: ${(props: StyledTheme) => props.theme.colors.menuBackground};
  row-gap: 40px;
  box-shadow: -5px 5px 5px 1px
    ${(props: StyledTheme) => props.theme.colors.shadow};
`;

export const CheckBoxesWrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 60px;
  row-gap: 10px;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  align-self: center;
  margin: 0;
  list-style: none;
  padding: 15px;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 20px;
    background-color: ${(props: StyledTheme) => props.theme.colors.white};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props: StyledTheme) =>
      props.theme.colors.menuBackground};
    border-radius: 15px;
    border: 1px solid;
  }
`;
