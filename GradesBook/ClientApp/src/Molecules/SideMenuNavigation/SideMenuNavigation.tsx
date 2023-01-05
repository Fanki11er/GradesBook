import { SideMenuButton } from "../../Atoms/Buttons/Buttons";
import { SideMenuNavigationWrapper } from "./SideMenuNavigation.styles";
import { NavLink, useLocation } from "react-router-dom";
import { routes } from "../../Routes/routes";
import useAuth from "../../Hooks/useAuth";

const SideMenuNavigation = () => {
  const location = useLocation();
  const { getUserFromStorage } = useAuth();
  const user = getUserFromStorage();

  const {
    parentView,
    setting,
    grades,
    teacherView,
    programs,
    studentView,
    addAnnouncement,
  } = routes;
  return (
    <SideMenuNavigationWrapper>
      {user?.role === "Parent" && (
        <SideMenuButton as={NavLink} to={parentView} end>
          Panel rodzica
        </SideMenuButton>
      )}
      {user?.role === "Student" && (
        <SideMenuButton as={NavLink} to={studentView} end>
          Oceny
        </SideMenuButton>
      )}
      {user?.role === "Teacher" && (
        <SideMenuButton as={NavLink} to={teacherView} end>
          Klasy
        </SideMenuButton>
      )}

      <SideMenuButton as={NavLink} to={setting} end>
        Ustawienia
      </SideMenuButton>

      {user?.role === "Teacher" && (
        <SideMenuButton as={NavLink} to={programs} end>
          Listy przedmiotów
        </SideMenuButton>
      )}

      {user?.role === "Teacher" && (
        <SideMenuButton as={NavLink} to={addAnnouncement} end>
          Ogłoszenie
        </SideMenuButton>
      )}
      {location.pathname.match(grades) && (
        <SideMenuButton className="active">Oceny</SideMenuButton>
      )}
    </SideMenuNavigationWrapper>
  );
};

export default SideMenuNavigation;
