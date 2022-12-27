import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

type Props = {
  isSelected: boolean;
  image: string;
};

export const ThemeSettingsFormWrapper = styled.section`
  width: 100%;
  max-width: 500px;
  height: fit-content;
  display: grid;
  grid-column: 100%;
  grid-template-rows: 30px 60px 50px;
  row-gap: 20px;
  justify-items: center;
  align-items: center;
  padding: 20px;
  box-shadow: -5px 5px 5px 1px
    ${(props: StyledTheme) => props.theme.colors.shadow};
  background-color: ${(props: StyledTheme) => props.theme.colors.white};
  border-radius: 10px;
`;

export const ThemeSettingsFormHeader = styled.h3`
  display: flex;
  width: 100%;
  height: 100%;
  color: ${(props: StyledTheme) => props.theme.colors.menuBackground};
  font-size: ${(props: StyledTheme) => props.theme.fontSizes.medium};
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const SkinsWrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
  column-gap: 50px;
  justify-content: space-around;
  align-items: center;
`;

export const SkinSelector = styled.div`
  width: 45px;
  height: 45px;
  background-image: url(${(props: StyledTheme & Props) => props.image});
  border: 2px solid
    ${(props: StyledTheme & Props) =>
      props.isSelected
        ? props.theme.colors.green
        : props.theme.colors.transparent};
  box-shadow: 0px 0px 5px 5px
    ${(props: StyledTheme & Props) =>
      props.isSelected
        ? props.theme.colors.green
        : props.theme.colors.transparent};
  border-radius: 50%;
  transition: all 0.5s;
  background-size: 105%;
  background-repeat: no-repeat;
  background-position: center;
  :hover {
    border: 2px solid ${(props: StyledTheme) => props.theme.colors.green};
    box-shadow: 0px 0px 5px 5px
      ${(props: StyledTheme) => props.theme.colors.green};
    cursor: pointer;
  }
`;
