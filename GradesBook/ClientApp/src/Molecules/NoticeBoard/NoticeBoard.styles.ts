import styled from "styled-components";
import BoardImg from "../../Assets/Images/Board.svg";

export const NoticeBoardWrapper = styled.div`
  width: 500px;
  height: fit-content;
  display: flex;
  justify-self: center;
`;
export const NoticeBoardList = styled.li``;

export const NoticeBoardContent = styled.p`
  background-image: url(${BoardImg});
  min-height: 500px;
  background-size: contain;
  background-repeat: no-repeat;
  padding: 30px;
  color: white;
`;
