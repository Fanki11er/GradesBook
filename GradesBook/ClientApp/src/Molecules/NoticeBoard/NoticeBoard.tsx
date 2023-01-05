import { DefaultListWrapper } from "../../Atoms/DefaultListWrapper/DefaultListWrapper";
import { GeneralAnnouncement } from "../../Types/Types";
import {
  NoticeBoardContent,
  NoticeBoardContentDate,
  NoticeBoardContentWrapper,
  NoticeBoardList,
  NoticeBoardWrapper,
} from "./NoticeBoard.styles";

type Props = {
  announcements: GeneralAnnouncement[];
};
const NoticeBoard = (props: Props) => {
  const { announcements } = props;

  const renderAnnouncements = (announcements: GeneralAnnouncement[]) => {
    return announcements.map((announcement) => {
      return (
        <NoticeBoardContentWrapper key={announcement.id}>
          <NoticeBoardContentDate>{announcement.date}</NoticeBoardContentDate>
          <NoticeBoardContent>{announcement.value}</NoticeBoardContent>
        </NoticeBoardContentWrapper>
      );
    });
  };
  return (
    <NoticeBoardWrapper>
      <DefaultListWrapper>
        <NoticeBoardList>{renderAnnouncements(announcements)}</NoticeBoardList>
      </DefaultListWrapper>
    </NoticeBoardWrapper>
  );
};

export default NoticeBoard;
