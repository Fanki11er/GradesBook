import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const ClassStudentsListElement = styled.li`
  width: 100%;
  height: 100%;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  display: grid;
  grid-template-columns: 1fr 80px;
  column-gap: 10px;
  padding: 0 25px;
  border-bottom: 2px solid
    ${(props: StyledTheme) => props.theme.colors.lightBorder};
  align-items: center;
`;

export const StudentNameInfo = styled.span`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  font-weight: bold;
  color: ${(props: StyledTheme) => props.theme.colors.menuBackground};
`;
