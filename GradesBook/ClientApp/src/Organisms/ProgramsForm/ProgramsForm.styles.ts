import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const ProgramsFormWrapper = styled.div`
  display: grid;
  grid-template-rows: 70px 70px 70px 70px;
  grid-template-columns: 1fr;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: auto;
`;

export const ProgramsHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 0 70px 0 0;
`;
export const ProgramsHeaderText = styled.h2``;

export const ImgPrograms = styled.img`
  width: 30px;
  height: 30px;
`;

export const ProgramsText = styled.span`
  //color: white;
`;

export const ProgramsHeaderSmall = styled.h3`
  //color: white;
`;
