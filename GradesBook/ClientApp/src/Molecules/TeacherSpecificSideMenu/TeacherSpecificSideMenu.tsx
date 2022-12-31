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
    </SpecificOptionsWrapper>
  );
};
export default TeacherSpecificSideMenu;
