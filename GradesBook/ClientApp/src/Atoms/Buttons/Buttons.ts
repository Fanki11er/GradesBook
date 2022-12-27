import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledTheme } from "../../GlobalStyles/theme";

export const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: inherit;
  background-color: rgba(217, 217, 217, 1);
  transition: all 0.5s;
  outline: none;
  :hover {
    //border: 2px solid orange;
    background-color: ${(props: StyledTheme) =>
      props.theme.colors.menuBackground};
    color: ${(props: StyledTheme) => props.theme.colors.white};
    font-weight: bold;
    cursor: pointer;
  }
`;

export const ButtonEdit = styled(Button)`
  width: 100px;
  height: 30px;
  border: inherit;
  :hover {
    background-color: ${(props: StyledTheme) => props.theme.colors.green};
    color: ${(props: StyledTheme) => props.theme.colors.white};
    font-weight: bold;
  }
`;

export const ButtonItemList = styled(Button)`
  width: 300px;
  height: 30px;
`;

export const ButtonSend = styled(Button)`
  height: 30px;
`;

export const ButtonGrades = styled(Button)`
  width: 60px;
  height: 30px;
  border-radius: 8px;
  border: 2px solid transparent;
  background-color: ${(props: StyledTheme) => props.theme.colors.buttonsGray};
  color: ${(props: StyledTheme) => props.theme.colors.white};
`;

export const ButtonAdded = styled.button`
  width: 60px;
  height: 60px;
  background-color: rgba(217, 217, 217, 1);
  border-radius: 10px;
  border: inherit;

  :hover {
    background-color: ${(props: StyledTheme) => props.theme.colors.green};
    color: ${(props: StyledTheme) => props.theme.colors.white};
    font-weight: bold;
  }
`;

export const ButtonLogOut = styled(Button)`
  width: 100px;
  height: 30px;
  border: inherit;

  :hover {
    background-color: ${(props: StyledTheme) => props.theme.colors.green};
    color: ${(props: StyledTheme) => props.theme.colors.white};
    font-weight: bold;
  }
`;

export const SideMenuButton = styled(Button)`
  width: 170px;
  height: 40px;
  border: none;
  text-decoration: none;
  color: inherit;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background-color: ${(props: StyledTheme) => props.theme.colors.green};
    color: ${(props: StyledTheme) => props.theme.colors.white};
    font-weight: bold;
  }
  &.active {
    background-color: ${(props: StyledTheme) => props.theme.colors.transparent};
    color: ${(props: StyledTheme) => props.theme.colors.white};
    font-weight: bold;
    border: 2px solid ${(props: StyledTheme) => props.theme.colors.buttonsGray};
    cursor: not-allowed;
  }
`;

export const LinkButton = styled(Link)`
  width: 120px;
  height: 35px;
  border-radius: 8px;
  border: 2px solid orange;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: orange;
`;

export const FormButtonOk = styled(Button)`
  width: 150px;
  height: 35px;
  text-align: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid transparent;
  background-color: ${(props: StyledTheme) => props.theme.colors.green};
  color: ${(props: StyledTheme) => props.theme.colors.white};
  font-weight: bold;
`;

export const FormButtonCancel = styled(FormButtonOk)`
  background-color: ${(props: StyledTheme) => props.theme.colors.red};
`;
