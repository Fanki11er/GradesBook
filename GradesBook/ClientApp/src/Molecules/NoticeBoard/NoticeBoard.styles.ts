import styled from "styled-components";
import BoardImg from "../../Assets/Images/Board.svg";

export const NoticeBoardWrapper = styled.div`
  width: 500px;
  height: fit-content;
  display: flex;
  justify-self: center;
`;
export const NoticeBoardList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: auto;
  row-gap: 20px;
`;

export const NoticeBoardContentWrapper = styled.li`
  background-image: url(${BoardImg});
  height: 220px;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 30px;
  color: white;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 30px 1fr;
  row-gap: 20px;
`;

export const NoticeBoardContent = styled.p`
  height: 100%;
  margin: 0;
`;

export const NoticeBoardContentDate = styled.span``;
