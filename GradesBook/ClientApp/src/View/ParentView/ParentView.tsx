import { useEffect, useState } from "react";
import { SideMenuButton } from "../../Atoms/Buttons/Buttons";
import ParentViewChildrenList from "../../Molecules/ParentViewSection/ParentViewChildrenList/ParenViewChildrenList";
import ParentViewSection from "../../Molecules/ParentViewSection/ParentViewSection";
import ParentViewAnnouncementsList from "../../Molecules/ParenViewAnnouncementsList/ParentViewAnnoucementsList";
import {
  ParentViewSideMenu,
  ParentViewWrapper,
  SectionsWrapper,
} from "./ParentView.styles";
import { StudentsWithGradesAverage } from "../../Types/Types";
import axios from "axios";
import Modal from "../../Atoms/Modal/Modal";
import useModal from "../../Hooks/useModal";
import RegisterChildForm from "../../Molecules/RegisterChildForm/RegisterChildForm";

const ParentView = () => {
  const [childrenList, setChildrenList] = useState<StudentsWithGradesAverage[]>(
    []
  );
  const { isOpened, handleToggleModal } = useModal();

  useEffect(() => {
    axios
      .get("https://localhost:7291/Student/1")
      .then((response) => {
        const data = response.data as StudentsWithGradesAverage[];

        setChildrenList(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <ParentViewWrapper>
      <ParentViewSideMenu>
        <SideMenuButton>Edytuj konto</SideMenuButton>
        <SideMenuButton onClick={handleToggleModal}>
          Zarejestruj dziecko
        </SideMenuButton>
      </ParentViewSideMenu>
      <SectionsWrapper>
        <ParentViewSection label={"Zarejestrowane dzieci"}>
          <ParentViewChildrenList childrenList={childrenList} />
        </ParentViewSection>
        <ParentViewSection label={"Tablica ogłoszeń"}>
          <ParentViewAnnouncementsList />
        </ParentViewSection>
      </SectionsWrapper>

      <Modal isModalOpened={isOpened}>
        <RegisterChildForm handleModalToggle={handleToggleModal} />
      </Modal>
    </ParentViewWrapper>
  );
};

export default ParentView;
