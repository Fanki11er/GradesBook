import { useState } from "react";
import { StudentGradesStatistics } from "../../Types/Types";
import SelectStudentsGradesOptionsForm from "../SelectStudentsGradesOptionsForm/SelectStudentsGradesOptionsForm";
import StudentGradesList from "../StudentGradesList/StudentGradesList";
import { StudentsGradesInfoWrapper } from "./StudentsGradesInfo.styles";

const StudentsGradesInfo = () => {
  const [studentGradesStatistics, setStudentGradesStatistics] =
    useState<StudentGradesStatistics | null>(null);

  const handleSetStatistics = (statistics: StudentGradesStatistics) => {
    setStudentGradesStatistics(statistics);
  };
  return (
    <StudentsGradesInfoWrapper>
      <SelectStudentsGradesOptionsForm
        handleSetFunction={handleSetStatistics}
      />
      {studentGradesStatistics ? (
        <StudentGradesList studentGrades={studentGradesStatistics} />
      ) : null}
    </StudentsGradesInfoWrapper>
  );
};

export default StudentsGradesInfo;
