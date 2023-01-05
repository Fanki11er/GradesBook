import { useEffect, useState } from "react";
import { EmptyListInfo } from "../../Atoms/EmptyListInfo/EmptyListInfo";
import useAnnouncement from "../../Hooks/useAnnouncement";
import useLoader from "../../Hooks/useLoader";
import useUser from "../../Hooks/useUser";
import { ClassAnnouncement } from "../../Types/Types";
import {
  ParentViewAnnouncementsListParagraph,
  ParentViewAnnouncementsListSpan,
  ParentViewAnnouncementsListWrapper,
  StyledListWrapper,
} from "./ParentViewAnnouncementsList.styles";

const ParentViewAnnouncementsList = () => {
  const { user } = useUser();
  const [announcements, setAnnouncement] = useState<ClassAnnouncement[]>([]);
  const { handleGetClassAnnouncements } = useAnnouncement();
  const { handleConnect, handleFinished, handleError } = useLoader();

  useEffect(() => {
    handleConnect();
    handleGetClassAnnouncements(user!.id)
      .then((response) => {
        const data = response.data as ClassAnnouncement[];
        setAnnouncement(data);
        handleFinished();
        console.log(data);
      })
      .catch((e) => {
        handleError(e.message);
        console.log(e.message);
      });
  }, []);

  const renderAnnouncements = (announcements: ClassAnnouncement[]) => {
    return announcements.map((announcement, id) => {
      return (
        <ParentViewAnnouncementsListWrapper key={id}>
          <ParentViewAnnouncementsListSpan>
            {`Klasa: ${announcement.className}`}
          </ParentViewAnnouncementsListSpan>
          <ParentViewAnnouncementsListSpan>
            {`Data: ${announcement.date}`}
          </ParentViewAnnouncementsListSpan>
          <ParentViewAnnouncementsListParagraph>{`${announcement.value}`}</ParentViewAnnouncementsListParagraph>
        </ParentViewAnnouncementsListWrapper>
      );
    });
  };
  return (
    <StyledListWrapper>
      {!announcements.length ? (
        <EmptyListInfo>Brak ogłoszeń</EmptyListInfo>
      ) : (
        renderAnnouncements(announcements)
      )}
    </StyledListWrapper>
  );
};

export default ParentViewAnnouncementsList;
