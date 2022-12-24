import { SideMenuButton } from "../../Atoms/Buttons/Buttons";
import { SideMenuNavigationWrapper } from "./SideMenuNavigation.styles";
import { NavLink } from "react-router-dom";
import { routes } from "../../Routes/routes";

const SideMenuNavigation = () => {
  const { parentView, setting } = routes;
  return (
    <SideMenuNavigationWrapper>
      <SideMenuButton as={NavLink} to={parentView} end>
        Panel rodzica
      </SideMenuButton>
      <SideMenuButton as={NavLink} to={setting} end>
        Ustawienia
      </SideMenuButton>
    </SideMenuNavigationWrapper>
  );
};

export default SideMenuNavigation;
