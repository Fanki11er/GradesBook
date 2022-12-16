import { DefaultListWrapper } from "../../Atoms/DefaultListWrapper/DefaultListWrapper";
import { EmptyListInfo } from "../../Atoms/EmptyListInfo/EmptyListInfo";

const ParentViewAnnouncementsList = () => {
  return (
    <DefaultListWrapper>
      <EmptyListInfo>Brak ogłoszeń</EmptyListInfo>
    </DefaultListWrapper>
  );
};

export default ParentViewAnnouncementsList;
