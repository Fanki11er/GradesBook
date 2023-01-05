import { ViewSideMenu } from "../../Atoms/SideMenu/SideMenu";
import GradesViewSpecificSideMenu from "../../Molecules/GrasesViewSpecificSideMenu/GradesViewSpecificSideMenu";
import SideMenuNavigation from "../../Molecules/SideMenuNavigation/SideMenuNavigation";
import StudentsGradesInfo from "../../Organisms/StudentsGradesInfo/StudentsGradesInfo";
import { StudentGradesViewWrapper } from "./StudentGradesView.styles";

const StudentGradesView = () => {
  return (
    <StudentGradesViewWrapper>
      <ViewSideMenu>
        <SideMenuNavigation />
        <GradesViewSpecificSideMenu />
      </ViewSideMenu>
      <StudentsGradesInfo />
    </StudentGradesViewWrapper>
  );
};

export default StudentGradesView;
