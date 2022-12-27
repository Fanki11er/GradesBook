import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const ClassStudentListsFormWrapper = styled.ul`
  width: 100%;
  height: 100%;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
`;

export const StudentList = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 40px;
  list-style: none;
  margin-bottom: 15px;
  margin-top: 15px;
`;

export const RateCircle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 2px solid black;
`;

export const StudentText = styled.span``;
