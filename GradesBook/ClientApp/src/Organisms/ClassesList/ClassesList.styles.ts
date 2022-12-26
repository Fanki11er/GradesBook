import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const ListRowClass = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 40px 120px 30px 1fr;
  justify-items: center;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  list-style: none;
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  column-gap: 10px;
  padding: 0 15px;
  border-bottom: 2px solid
    ${(props: StyledTheme) => props.theme.colors.lightBorder};
  align-items: center;
  transition: all 0.3s;

  :hover {
    background-color: ${(props: StyledTheme) => props.theme.colors.green};
    border-radius: 10px;
    cursor: pointer;
  }
`;

export const ListText = styled.span`
  font-size: ${(props: StyledTheme) => props.theme.fontSizes.medium};
`;

//export const ImgList = styled.img``;

export const ImgList = styled.img`
  width: 25px;
  height: 25px;
`;
