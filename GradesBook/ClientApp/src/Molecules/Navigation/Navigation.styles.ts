import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  width: 100%;
  height: 100%;
  background-color: rgba(217, 217, 217, 1);
  grid-row: 1/2;
  display: grid;
  grid-template-columns: 100px 1fr 100px;
  grid-auto-rows: auto;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 55px;
  height: 55px;
  margin: 2px 0 0 10px;
`;

export const RoleImg = styled.img`
  width: 35px;
  height: 35px;
  margin: 0 10px 0 0;
`;

export const NameImg = styled.img`
  width: 30px;
  height: 30px;
  margin: 0 10px 0 0;
`;

export const NavigationText = styled.span`
  width: 500px;
`;

export const RoleAndTextNavigationWrapper = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
`;
