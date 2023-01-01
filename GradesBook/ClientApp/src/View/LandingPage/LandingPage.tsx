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
import { useEffect } from "react";

const LandingPage = () => {
  const { handleDeleteAuth } = useAuth();
  useEffect(() => {
    handleDeleteAuth();

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
      <NoticeBoard />
    </LandingPageWrapper>
  );
};

export default LandingPage;
