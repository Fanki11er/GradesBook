import axios from "axios";
import { useEffect, useState } from "react";
import { ButtonEdit, ButtonSend } from "../../Atoms/Buttons/Buttons";
import { ClassWithStudentsAndProgram } from "../../Types/Types";
import ClassStudentListsForm from "../ClassStudentListsForm/ClassStudentListsForm";

import {
  ImgPrograms,
  ProgramsFormWrapper,
  ProgramsHeaderSmall,
  ProgramsHeaderText,
  ProgramsHeaderWrapper,
  ProgramsText,
} from "./ProgramsForm.styles";

const ProgramsForm = () => {
  const [data, setData] = useState<ClassWithStudentsAndProgram | null>(null);

  useEffect(() => {
    axios
      .get("https://localhost:7291/Class/ClassStudentsInfo/1")
      .then((response) => {
        const data = response.data as ClassWithStudentsAndProgram;
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <ProgramsFormWrapper>
      <ProgramsHeaderWrapper>
        <ProgramsHeaderText>{`Klasa: ${
          data ? data.className : ""
        }`}</ProgramsHeaderText>
        <ImgPrograms />
        <ProgramsText>{`Wychowawca: ${
          data && data.supervisingTeacher
            ? data.supervisingTeacher
            : "Jan KOwalski"
        }`}</ProgramsText>
        <ButtonEdit>Edytuj</ButtonEdit>
      </ProgramsHeaderWrapper>

      <ProgramsHeaderSmall>{`Program: ${
        data && data.programName ? data.programName : ""
      }`}</ProgramsHeaderSmall>

      <ButtonSend>Wyślij ogłoszenie</ButtonSend>

      <ClassStudentListsForm
        studentsWithGradesAverages={data ? data.studentsList : []}
      />
    </ProgramsFormWrapper>
  );
};

export default ProgramsForm;
