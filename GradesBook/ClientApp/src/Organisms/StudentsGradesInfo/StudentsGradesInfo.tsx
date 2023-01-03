import { useState } from "react";
import { StudentGradesStatistics } from "../../Types/Types";
import SelectStudentsGradesOptionsForm from "../SelectStudentsGradesOptionsForm/SelectStudentsGradesOptionsForm";
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
    </StudentsGradesInfoWrapper>
  );
};

export default StudentsGradesInfo;
