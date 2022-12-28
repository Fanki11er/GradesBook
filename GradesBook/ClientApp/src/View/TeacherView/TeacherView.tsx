import { Navigate, Outlet } from "react-router-dom";
import { ViewSideMenu } from "../../Atoms/SideMenu/SideMenu";
import useAuth from "../../Hooks/useAuth";
import SideMenuNavigation from "../../Molecules/SideMenuNavigation/SideMenuNavigation";
import TeacherSpecificSideMenu from "../../Molecules/TeacherSpecificSideMenu/TeacherSpecificSideMenu";
import { routes } from "../../Routes/routes";
import { TeacherViewWrapper } from "./TeacherView.styles";

const TeacherView = () => {
  const { getUserFromStorage } = useAuth();
  const { login } = routes;
  const user = getUserFromStorage();

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
