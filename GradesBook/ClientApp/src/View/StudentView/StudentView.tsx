import { Navigate, Outlet } from "react-router-dom";
import { ViewSideMenu } from "../../Atoms/SideMenu/SideMenu";
import useUser from "../../Hooks/useUser";
import SideMenuNavigation from "../../Molecules/SideMenuNavigation/SideMenuNavigation";
import { StudentViewWrapper } from "./StudentView.styles";

const StudentView = () => {
  const { user } = useUser();

  if (user && user.role !== "Student") {
    return <Navigate to={`/${user.role}`} />;
  }
  return (
    user && (
      <StudentViewWrapper>
        <ViewSideMenu>
          <SideMenuNavigation />
        </ViewSideMenu>
        <Outlet />
      </StudentViewWrapper>
    )
  );
};

export default StudentView;
