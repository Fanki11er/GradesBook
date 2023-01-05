import { StudentGrades, StudentGradesStatistics } from "../../Types/Types";
import {
  ItemName,
  StudentGrade,
  StudentGradesListContainer,
  StudentGradesListElement,
  StudentGradesListWrapper,
} from "./StudentGradesList.styles";

type Props = {
  studentGrades: StudentGradesStatistics;
};

const StudentGradesList = (props: Props) => {
  const { studentGrades } = props;

  const renderGrades = (grades: number[]) => {
    return grades.map((grade, index) => {
      return (
        <StudentGrade grade={grade} key={index}>
          {grade}
        </StudentGrade>
      );
    });
  };
  const renderListElements = (studentGrades: StudentGrades[]) => {
    return studentGrades.map((grades, index) => {
      return (
        <StudentGradesListElement key={index}>
          <ItemName>{grades.subjectName}</ItemName>
          {renderGrades(grades.grades)}
        </StudentGradesListElement>
      );
    });
  };
  return (
    <StudentGradesListWrapper>
      <ItemName>{studentGrades.studentName}</ItemName>
      <StudentGradesListContainer>
        {renderListElements(studentGrades.studentGrades)}
      </StudentGradesListContainer>
    </StudentGradesListWrapper>
  );
};

export default StudentGradesList;
