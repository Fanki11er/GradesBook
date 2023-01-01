import { Navigate, Outlet } from "react-router-dom";
import { ViewSideMenu } from "../../Atoms/SideMenu/SideMenu";
import useUser from "../../Hooks/useUser";
import SideMenuNavigation from "../../Molecules/SideMenuNavigation/SideMenuNavigation";
import TeacherSpecificSideMenu from "../../Molecules/TeacherSpecificSideMenu/TeacherSpecificSideMenu";
import { TeacherViewWrapper } from "./TeacherView.styles";

const TeacherView = () => {
  const { user } = useUser();

  if (user && user.role !== "Teacher") {
    return <Navigate to={`/${user.role}`} />;
  }
  return (
    user && (
      <TeacherViewWrapper>
        <ViewSideMenu>
          <SideMenuNavigation />
          <TeacherSpecificSideMenu />
        </ViewSideMenu>
        <Outlet />
      </TeacherViewWrapper>
    )
  );
};

export default TeacherView;
