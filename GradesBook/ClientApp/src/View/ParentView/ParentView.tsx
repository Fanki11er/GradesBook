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
import { StudentsWithClassAndGradesAverage } from "../../Types/Types";
import Modal from "../../Atoms/Modal/Modal";
import useModal from "../../Hooks/useModal";
import RegisterChildForm from "../../Molecules/RegisterChildForm/RegisterChildForm";
import axios from "../../Api/axios";
import { endpoints } from "../../Api/Endpoints";

const ParentView = () => {
  const { getParentsChildren } = endpoints;
  const [childrenList, setChildrenList] = useState<
    StudentsWithClassAndGradesAverage[]
  >([]);
  const { isOpened, handleToggleModal } = useModal();

  const getData = () => {
    axios
      .get(getParentsChildren)
      .then((response) => {
        const data = response.data as StudentsWithClassAndGradesAverage[];

        setChildrenList(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    //!!!!!!!!!!!!!!!! Change to axios Private
    getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        <RegisterChildForm
          handleModalToggle={handleToggleModal}
          refreshData={getData}
        />
      </Modal>
    </ParentViewWrapper>
  );
};

export default ParentView;
