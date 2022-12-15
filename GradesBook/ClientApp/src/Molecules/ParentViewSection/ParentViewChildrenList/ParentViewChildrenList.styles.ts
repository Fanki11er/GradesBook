import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

export const ParentViewChildrenListWrapper = styled.ul`
  width: 100%;
  height: 400px;
  display: grid;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.menuBackground};
  align-self: center;
  margin: 0;
  list-style: none;
  padding: 15px;
`;

export const ParentViewChildrenListElement = styled.li`
  width: 100%;
  height: 45px;
  background-color: white;
  display: grid;
  grid-template-columns: 40px 1fr 80px;
  grid-column-gap: 10px;
  padding: 0 15px;
  border-radius: 10px;
  border: 2px solid black;
  align-items: center;
`;

export const StudentAverageInfo = styled.span`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
`;

export const StudentNameInfo = styled.span`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
`;
