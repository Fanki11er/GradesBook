import useAnnouncement from "../../Hooks/useAnnouncement";
import AddAnnouncementForm from "../../Organisms/AddAnnouncementForm/AddAnnouncementForm";
import { AddAnnouncementToMainPageWrapper } from "./AddAnnouncementToMainPage.styles";

const AddAnnouncementToMainPage = () => {
  const { handleAddAnnouncementToMainPage } = useAnnouncement();
  return (
    <AddAnnouncementToMainPageWrapper>
      <AddAnnouncementForm submitFunction={handleAddAnnouncementToMainPage} />
    </AddAnnouncementToMainPageWrapper>
  );
};

export default AddAnnouncementToMainPage;
