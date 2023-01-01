import { useLocation, useNavigate } from "react-router-dom";
import { SideMenuButton } from "../../Atoms/Buttons/Buttons";
import { SpecificOptionsWrapper } from "../../Atoms/SideMenu/SideMenu";
import { routes } from "../../Routes/routes";

const TeacherSpecificSideMenu = () => {
  const { teacherView, teacherSubjects } = routes;
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <SpecificOptionsWrapper>
      {pathname === teacherView && (
        <SideMenuButton>Stwórz klasę</SideMenuButton>
      )}
      {pathname === teacherView && (
        <SideMenuButton onClick={() => navigate(teacherSubjects)}>
          Edytuj przedmioty
        </SideMenuButton>
      )}
      {pathname.match(/\/Teacher\/Class\/\d/) && (
        <SideMenuButton onClick={() => navigate(teacherSubjects)}>
          Dodaj uczniów
        </SideMenuButton>
      )}
      {pathname.match(/\/Teacher\/Class\/\d/) && (
        <SideMenuButton onClick={() => navigate(teacherSubjects)}>
          Usuń uczniów
        </SideMenuButton>
      )}
      {pathname.match(/\/Teacher\/Class\/\d/) && (
        <SideMenuButton onClick={() => navigate(teacherSubjects)}>
          Wiadomość klasowa
        </SideMenuButton>
      )}
    </SpecificOptionsWrapper>
  );
};
export default TeacherSpecificSideMenu;
