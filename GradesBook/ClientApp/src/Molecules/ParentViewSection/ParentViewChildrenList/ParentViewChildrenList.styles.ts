import styled from "styled-components";
import { StyledTheme } from "../../../GlobalStyles/theme";

type Props = {
  average: number;
};

const setAverageColor = (
  average: number,
  colorGreen: string,
  colorYellow: string,
  colorRed: string
) => {
  if (average === 0) {
    return colorGreen;
  } else if (average < 3) {
    return colorRed;
  } else if (average < 4) {
    return colorYellow;
  } else {
    return colorGreen;
  }
};

export const ParentViewChildrenListElement = styled.li`
  width: 100%;
  height: 100%;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  display: grid;
  grid-template-columns: 40px 1fr 100px 80px;
  grid-column-gap: 10px;
  padding: 0 15px;
  border-bottom: 2px solid
    ${(props: StyledTheme) => props.theme.colors.lightBorder};
  align-items: center;
`;

export const StudentAverageInfo = styled.span`
  border-radius: 50%;
  height: 35px;
  width: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props: StyledTheme & Props) => props.theme.colors.white};
  background-color: ${(props: StyledTheme & Props) =>
    setAverageColor(
      props.average,
      props.theme.colors.green,
      props.theme.colors.yellow,
      props.theme.colors.red
    )};
`;

export const StudentNameInfo = styled.span`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  font-weight: bold;
  color: ${(props: StyledTheme) => props.theme.colors.menuBackground};
`;

export const StudentClassInfo = styled(StudentNameInfo)``;
