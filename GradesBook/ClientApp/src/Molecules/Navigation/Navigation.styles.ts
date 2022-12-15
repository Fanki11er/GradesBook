import styled from "styled-components";

export const NavigationWrapper = styled.nav`
  width: 100%;
  height: 100%;
  background-color: rgba(217, 217, 217, 1);
  grid-row: 1/2;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

//export const NavigationImg = styled.img``;

export const NavigationImg = styled.div`
  width: 20px;
  height: 20px;
  background-color: gray;
`;

export const NavigationText = styled.span`
  width: 500px;
`;
