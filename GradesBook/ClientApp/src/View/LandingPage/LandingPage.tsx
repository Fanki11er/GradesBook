import { LinkButton } from "../../Atoms/Buttons/Buttons";
import { routes } from "../../Routes/routes";
import { LandingPageWrapper } from "./LandingPage.styles";

const LandingPage = () => {
  const { setting, classes, parentView, program, loginPage, registerPage } =
    routes;
  return (
    <LandingPageWrapper>
      <LinkButton to={classes}>Klasy</LinkButton>
      <LinkButton to={setting}>Ustawienia</LinkButton>
      <LinkButton to={parentView}>Rodzice</LinkButton>
      <LinkButton to={program}>Programy</LinkButton>
      <LinkButton to={loginPage}>Logowanie</LinkButton>
      <LinkButton to={registerPage}>Rejestracja</LinkButton>
    </LandingPageWrapper>
  );
};

export default LandingPage;
