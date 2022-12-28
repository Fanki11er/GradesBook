import { useEffect, useState } from "react";
import { SideMenuButton } from "../../Atoms/Buttons/Buttons";
import ParentViewChildrenList from "../../Molecules/ParentViewSection/ParentViewChildrenList/ParenViewChildrenList";
import ParentViewSection from "../../Molecules/ParentViewSection/ParentViewSection";
import ParentViewAnnouncementsList from "../../Molecules/ParenViewAnnouncementsList/ParentViewAnnoucementsList";
import { ParentViewWrapper, SectionsWrapper } from "./ParentView.styles";
import { StudentsWithClassAndGradesAverage } from "../../Types/Types";
import Modal from "../../Atoms/Modal/Modal";
import useModal from "../../Hooks/useModal";
import RegisterChildForm from "../../Molecules/RegisterChildForm/RegisterChildForm";
import { endpoints } from "../../Api/Endpoints";
import useLoader from "../../Hooks/useLoader";
import SmallLoader from "../../Molecules/SmallLoader/SmallLoader";
import { AxiosError } from "axios";
import {
  SpecificOptionsWrapper,
  ViewSideMenu,
} from "../../Atoms/SideMenu/SideMenu";
import SideMenuNavigation from "../../Molecules/SideMenuNavigation/SideMenuNavigation";
import { Navigate } from "react-router-dom";
import { routes } from "../../Routes/routes";
import useAuth from "../../Hooks/useAuth";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";

const ParentView = () => {
  const { getParentsChildren } = endpoints;
  const { login } = routes;
  const { getUserFromStorage } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const user = getUserFromStorage();

  const { error, isConnecting, handleConnect, handleError, handleFinished } =
    useLoader();
  const [childrenList, setChildrenList] = useState<
    StudentsWithClassAndGradesAverage[]
  >([]);
  const { isOpened, handleToggleModal } = useModal();

  const getData = () => {
    handleConnect();
    axiosPrivate
      .get(`${getParentsChildren}/${user?.id}`)
      .then((response) => {
        const data = response.data as StudentsWithClassAndGradesAverage[];
        setChildrenList(data);
        handleFinished();
      })
      .catch((e: AxiosError) => {
        handleError(e.message);
      });
  };

  useEffect(() => {
    user && getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return user && user?.role === "Parent" ? (
    <ParentViewWrapper>
      <ViewSideMenu>
        <SideMenuNavigation />
        <SpecificOptionsWrapper>
          <SideMenuButton onClick={handleToggleModal}>
            Zarejestruj dziecko
          </SideMenuButton>
        </SpecificOptionsWrapper>
      </ViewSideMenu>
      <SectionsWrapper>
        <ParentViewSection label={"Zarejestrowane dzieci"}>
          {isConnecting && <SmallLoader />}
          {error && <div>Error</div>}
          {!isConnecting && !error && (
            <ParentViewChildrenList childrenList={childrenList} />
          )}
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
  ) : (
    <Navigate to={user ? `/${user.role}` : login} />
  );
};

export default ParentView;
