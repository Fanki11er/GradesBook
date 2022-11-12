import styled from "styled-components";

export const ClassesListWrapper = styled.ul`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ListRowClass = styled.li`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 400px;
  height: 40px;
  list-style: none;
  border: 2px solid black;
  margin-bottom: 15px;
`;

export const ListText = styled.span`
  color: black;
`;

//export const ImgList = styled.img``;

export const ImgList = styled.div`
  width: 25px;
  height: 25px;
  display: flex;
  background-color: gray;
`;
