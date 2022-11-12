import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const RegisterChildrenFormWrapper = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  padding: 25px;
  grid-template-rows: 1fr 50px;
  width: 450px;
  height: 450px;
  border-radius: 10px;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.menuBackground};
`;
