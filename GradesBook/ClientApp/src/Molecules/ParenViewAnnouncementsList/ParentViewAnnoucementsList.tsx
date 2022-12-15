import { DefaultListWrapper } from "../../Atoms/DefaultListWrapper/DefaultListWrapper";
import { EmptyListInfo } from "../../Atoms/EmptyListInfo/EmptyListInfo";

const ParentViewAnnouncementsList = () => {
  return (
    <DefaultListWrapper>
      <EmptyListInfo>No news to read</EmptyListInfo>
    </DefaultListWrapper>
  );
};

export default ParentViewAnnouncementsList;
