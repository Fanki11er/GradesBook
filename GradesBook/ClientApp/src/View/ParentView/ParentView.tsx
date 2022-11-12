import { SideMenuButton } from "../../Atoms/Buttons/Buttons";
import ParentViewChildrenList from "../../Molecules/ParentViewSection/ParentViewChildrenList/ParenViewChildrenList";
import ParentViewSection from "../../Molecules/ParentViewSection/ParentViewSection";
import ParentViewAnnouncementsList from "../../Molecules/ParenViewAnnouncementsList/ParentViewAnnoucementsList";
import { ParentViewSideMenu, ParentViewWrapper } from "./ParentView.styles";

const ParentView = () => {
  return (
    <ParentViewWrapper>
      <ParentViewSideMenu>
        <SideMenuButton>Edytuj konto</SideMenuButton>
        <SideMenuButton>Zarejestruj dziecko</SideMenuButton>
      </ParentViewSideMenu>
      <ParentViewSection label={"Zarejestrowane dzieci"}>
        <ParentViewChildrenList childrenList={[]} />
      </ParentViewSection>
      <ParentViewSection label={"Tablica ogłoszeń"}>
        <ParentViewAnnouncementsList />
      </ParentViewSection>
    </ParentViewWrapper>
  );
};

export default ParentView;
