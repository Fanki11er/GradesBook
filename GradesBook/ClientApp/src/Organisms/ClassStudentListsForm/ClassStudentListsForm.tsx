import { ButtonGrades } from "../../Atoms/Buttons/Buttons";
import { StudentsWithGradesAverage } from "../../Types/Types";
import {
  ClassStudentListsFormWrapper,
  RateCircle,
  StudentList,
  StudentText,
} from "./ClassStudentListsForm.styles";

type Props = {
  studentsWithGradesAverages: StudentsWithGradesAverage[];
};

const ClassStudentListsForm = (props: Props) => {
  const { studentsWithGradesAverages } = props;

  const renderStudentsList = (studentsList: StudentsWithGradesAverage[]) => {
    return studentsList.map((student) => {
      return (
        <StudentList key={student.studentId}>
          <RateCircle>{student.gradesAverage}</RateCircle>
          <StudentText>{student.studentName}</StudentText>
          <ButtonGrades>Oceń</ButtonGrades>
          <ButtonGrades>Oceny</ButtonGrades>
        </StudentList>
      );
    });
  };

  return (
    <ClassStudentListsFormWrapper>
      {renderStudentsList(studentsWithGradesAverages)}
    </ClassStudentListsFormWrapper>
  );
};

export default ClassStudentListsForm;
