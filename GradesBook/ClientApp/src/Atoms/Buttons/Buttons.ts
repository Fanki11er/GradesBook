import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: 2px solid black;
  background-color: rgba(217, 217, 217, 1);
  transition: all 0.5s;
  :hover {
    border: 2px solid orange;
    cursor: pointer;
  }
`;

export const ButtonEdit = styled(Button)`
  width: 100px;
  height: 30px;
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
`;

export const ButtonAdded = styled.button`
  width: 60px;
  height: 60px;
  background-color: rgba(217, 217, 217, 1);
`;

export const SideMenuButton = styled(Button)`
  width: 170px;
  height: 40px;
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
