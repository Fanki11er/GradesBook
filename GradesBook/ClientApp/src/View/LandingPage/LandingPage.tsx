import { /*LinkButton,*/ SideMenuButton } from "../../Atoms/Buttons/Buttons";
import { routes } from "../../Routes/routes";
import {
  ButtonLogOutWrapper,
  LandingPageHeader,
  LandingPageLogo,
  // LandingPageOptions,
  LandingPageWrapper,
} from "./LandingPage.styles";
import LogoLandingPage from "../../Assets/Images/BigLogo.svg";
import NoticeBoard from "../../Molecules/NoticeBoard/NoticeBoard";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import useAnnouncement from "../../Hooks/useAnnouncement";
import { GeneralAnnouncement } from "../../Types/Types";

const LandingPage = () => {
  const { handleDeleteAuth } = useAuth();
  const [announcements, setAnnouncements] = useState<GeneralAnnouncement[]>([]);
  const { handleGetMainPageAnnouncements } = useAnnouncement();
  useEffect(() => {
    handleDeleteAuth();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleGetMainPageAnnouncements()
      .then((response) => {
        const data = response.data as GeneralAnnouncement[];
        setAnnouncements(data);
      })
      .catch((e) => {
        console.log(e.message);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { /*setting, classes, parentView, program,*/ login, register } = routes;
  return (
    <LandingPageWrapper>
      <LandingPageHeader>GRADES BOOK</LandingPageHeader>
      <LandingPageLogo src={LogoLandingPage} alt="LogoLandingPage" />
      <ButtonLogOutWrapper>
        <SideMenuButton as={Link} to={login}>
          Logowanie
        </SideMenuButton>
        <SideMenuButton as={Link} to={register}>
          Rejestracja
        </SideMenuButton>
      </ButtonLogOutWrapper>
      <NoticeBoard announcements={announcements} />
    </LandingPageWrapper>
  );
};

export default LandingPage;
