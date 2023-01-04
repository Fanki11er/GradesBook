import { Link } from "react-router-dom";
import { ButtonGrades } from "../../Atoms/Buttons/Buttons";
import { DefaultListWrapper } from "../../Atoms/DefaultListWrapper/DefaultListWrapper";
import { EmptyListInfo } from "../../Atoms/EmptyListInfo/EmptyListInfo";
import { routes } from "../../Routes/routes";
import { SelectOption } from "../../Types/Types";
import {
  ClassStudentsListElement,
  StudentNameInfo,
} from "./ClassStudentsList.styles";

type Props = {
  studentsList: SelectOption[];
};

const ClassStudentsList = (props: Props) => {
  const { rateStudent, grades } = routes;
  const { studentsList } = props;
  const renderChildrenList = (childrenList: SelectOption[]) => {
    return childrenList.map((student) => {
      return (
        <ClassStudentsListElement key={student.id}>
          <StudentNameInfo>{student.value}</StudentNameInfo>

          <ButtonGrades as={Link} to={`${rateStudent}/${student.id}`}>
            Oceń
          </ButtonGrades>
          <ButtonGrades as={Link} to={`${grades}/${student.id}`}>
            Oceny
          </ButtonGrades>
        </ClassStudentsListElement>
      );
    });
  };
  return (
    <DefaultListWrapper>
      {studentsList.length ? (
        renderChildrenList(studentsList)
      ) : (
        <EmptyListInfo>No students in class</EmptyListInfo>
      )}
    </DefaultListWrapper>
  );
};

export default ClassStudentsList;
