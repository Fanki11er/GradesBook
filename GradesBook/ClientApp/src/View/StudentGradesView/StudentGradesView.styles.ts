import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const StudentGradesViewWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${(props: StyledTheme) =>
    props.theme.colors.mainBackground};
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-auto-rows: 1fr;
  justify-items: center;
`;
