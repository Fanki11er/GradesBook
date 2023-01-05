import useAnnouncement from "../../Hooks/useAnnouncement";
import AddAnnouncementForm from "../../Organisms/AddAnnouncementForm/AddAnnouncementForm";
import { AddAnnouncementToClassWrapper } from "./AddAnnouncementToClass.styles";

const AddAnnouncementToClass = () => {
  const { handleAddAnnouncementToClass } = useAnnouncement();
  return (
    <AddAnnouncementToClassWrapper>
      <AddAnnouncementForm submitFunction={handleAddAnnouncementToClass} />
    </AddAnnouncementToClassWrapper>
  );
};

export default AddAnnouncementToClass;
