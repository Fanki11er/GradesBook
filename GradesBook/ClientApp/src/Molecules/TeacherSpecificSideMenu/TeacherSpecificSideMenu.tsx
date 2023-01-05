import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SideMenuButton } from "../../Atoms/Buttons/Buttons";
import { SpecificOptionsWrapper } from "../../Atoms/SideMenu/SideMenu";
import { routes } from "../../Routes/routes";

const TeacherSpecificSideMenu = () => {
  const {
    teacherView,
    teacherSubjects,
    classAddStudents,
    classRemoveStudents,
    classSettings,
    addClass,
    addClassAnnouncement,
  } = routes;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { classId } = useParams();
  return (
    <SpecificOptionsWrapper>
      {pathname === teacherView && (
        <SideMenuButton onClick={() => navigate(addClass)}>
          Stwórz klasę
        </SideMenuButton>
      )}
      {pathname === teacherView && (
        <SideMenuButton onClick={() => navigate(teacherSubjects)}>
          Edytuj przedmioty
        </SideMenuButton>
      )}
      {pathname.match(/\/Teacher\/Class\/\d/) && (
        <SideMenuButton
          onClick={() => navigate(`${classAddStudents}/${classId}`)}
        >
          Dodaj uczniów
        </SideMenuButton>
      )}
      {pathname.match(/\/Teacher\/Class\/\d/) && (
        <SideMenuButton
          onClick={() => navigate(`${classRemoveStudents}/${classId}`)}
        >
          Usuń uczniów
        </SideMenuButton>
      )}
      {pathname.match(/\/Teacher\/Class\/Students\/.*/) && (
        <SideMenuButton onClick={() => navigate(`${classSettings}/${classId}`)}>
          Powrót
        </SideMenuButton>
      )}
      {pathname.match(/\/Teacher\/Class\/\d/) && (
        <SideMenuButton
          onClick={() => navigate(`${addClassAnnouncement}/${classId}`)}
        >
          Wiadomość klasowa
        </SideMenuButton>
      )}
    </SpecificOptionsWrapper>
  );
};
export default TeacherSpecificSideMenu;
