import { LinkButton, SideMenuButton } from "../../Atoms/Buttons/Buttons";
import { routes } from "../../Routes/routes";
import {
  ButtonLogOutWrapper,
  LandingPageHeader,
  LandingPageLogo,
  LandingPageOptions,
  LandingPageWrapper,
} from "./LandingPage.styles";
import LogoLandingPage from "../../Assets/Images/BigLogo.svg";

const LandingPage = () => {
  const { setting, classes, parentView, program, login, register } = routes;
  return (
    <LandingPageWrapper>
      <LandingPageHeader>GRADES BOOK</LandingPageHeader>
      <LandingPageLogo src={LogoLandingPage} alt="LogoLandingPage" />
      <ButtonLogOutWrapper>
        <SideMenuButton>Logowanie</SideMenuButton>
        <SideMenuButton>Rejestracja</SideMenuButton>
      </ButtonLogOutWrapper>

      <LandingPageOptions>
        <LinkButton to={classes}>Klasy</LinkButton>
        <LinkButton to={setting}>Ustawienia</LinkButton>
        <LinkButton to={parentView}>Rodzice</LinkButton>
        <LinkButton to={program}>Programy</LinkButton>
        <LinkButton to={login}>Logowanie</LinkButton>
        <LinkButton to={register}>Rejestracja</LinkButton>
      </LandingPageOptions>
    </LandingPageWrapper>
  );
};

export default LandingPage;
