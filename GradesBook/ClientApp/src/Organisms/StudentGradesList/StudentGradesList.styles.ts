import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

type Props = {
  grade: number;
};

const setGardeColor = (
  grade: number,
  colorGreen: string,
  colorYellow: string,
  colorRed: string
) => {
  if (grade < 3) {
    return colorRed;
  } else if (grade < 4) {
    return colorYellow;
  } else {
    return colorGreen;
  }
};

export const StudentGradesListWrapper = styled.div`
  width: 100%;
  height: fit-content;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  row-gap: 20px;
  box-shadow: -5px 5px 5px 1px
    ${(props: StyledTheme) => props.theme.colors.shadow};
  border-radius: 5px;
`;

export const StudentGradesListContainer = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  row-gap: 15px;
  padding: 0; ;
`;

export const StudentGradesListElement = styled.li`
  display: flex;
  flex-flow: wrap row;
  row-gap: 5px;
  column-gap: 5px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  border-bottom: 2px solid
    ${(props: StyledTheme) => props.theme.colors.lightBorder};
`;

export const ItemName = styled.span`
  font-weight: bold;
  width: 150px;
`;

export const StudentGrade = styled.span`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props: StyledTheme & Props) => props.theme.colors.white};
  background-color: ${(props: StyledTheme & Props) =>
    setGardeColor(
      props.grade,
      props.theme.colors.green,
      props.theme.colors.yellow,
      props.theme.colors.red
    )};
`;
