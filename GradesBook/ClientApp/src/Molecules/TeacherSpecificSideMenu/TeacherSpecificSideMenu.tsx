import { useLocation } from "react-router-dom";
import { SideMenuButton } from "../../Atoms/Buttons/Buttons";
import { SpecificOptionsWrapper } from "../../Atoms/SideMenu/SideMenu";
import { routes } from "../../Routes/routes";

const TeacherSpecificSideMenu = () => {
  const { teacherView } = routes;
  const { pathname } = useLocation();
  return (
    <SpecificOptionsWrapper>
      {pathname === teacherView && (
        <SideMenuButton>Stwórz klasę</SideMenuButton>
      )}
    </SpecificOptionsWrapper>
  );
};
export default TeacherSpecificSideMenu;
