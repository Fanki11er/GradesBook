import { useLocation, useNavigate } from "react-router-dom";
import { SideMenuButton } from "../../Atoms/Buttons/Buttons";
import { SpecificOptionsWrapper } from "../../Atoms/SideMenu/SideMenu";
import { routes } from "../../Routes/routes";

const TeacherSpecificSideMenu = () => {
  const { teacherView, addClass } = routes;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <SpecificOptionsWrapper>
      {pathname === teacherView && (
        <SideMenuButton onClick={() => navigate(addClass)}>
          Stwórz klasę
        </SideMenuButton>
      )}
    </SpecificOptionsWrapper>
  );
};
export default TeacherSpecificSideMenu;
