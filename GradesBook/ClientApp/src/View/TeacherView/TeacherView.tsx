import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ViewSideMenu } from "../../Atoms/SideMenu/SideMenu";
import useUser from "../../Hooks/useUser";
import SideMenuNavigation from "../../Molecules/SideMenuNavigation/SideMenuNavigation";
import TeacherSpecificSideMenu from "../../Molecules/TeacherSpecificSideMenu/TeacherSpecificSideMenu";
import { routes } from "../../Routes/routes";
import { TeacherViewWrapper } from "./TeacherView.styles";

const TeacherView = () => {
  const { user } = useUser();
  const { login } = routes;

  return user && user.role === "Teacher" ? (
    <TeacherViewWrapper>
      <ViewSideMenu>
        <SideMenuNavigation />
        <TeacherSpecificSideMenu />
      </ViewSideMenu>
      <Outlet />
    </TeacherViewWrapper>
  ) : (
    <Navigate to={user ? `/${user.role}` : login} />
  );
};

export default TeacherView;
