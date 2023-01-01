import { DefaultListWrapper } from "../../Atoms/DefaultListWrapper/DefaultListWrapper";
import {
  NoticeBoardContent,
  NoticeBoardList,
  NoticeBoardWrapper,
} from "./NoticeBoard.styles";

const NoticeBoard = () => {
  return (
    <NoticeBoardWrapper>
      <DefaultListWrapper>
        <NoticeBoardList>
          <NoticeBoardContent>Hello World</NoticeBoardContent>
        </NoticeBoardList>
      </DefaultListWrapper>
    </NoticeBoardWrapper>
  );
};

export default NoticeBoard;
