import axios from "axios";
import { useEffect, useState } from "react";
import {
  ButtonEdit,
  //ButtonSend,
  SideMenuButton,
} from "../../Atoms/Buttons/Buttons";
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
import ProgramsImg from "../../Assets/Images/Teacher.png";

//!! Bad route bad content or name
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
        <ImgPrograms src={ProgramsImg} alt="ProgramsImg" />
        <ProgramsText>{`Wychowawca: ${
          data && data.supervisingTeacher
            ? data.supervisingTeacher
            : "Jan Kowalski"
        }`}</ProgramsText>
        <ButtonEdit>Edytuj</ButtonEdit>
      </ProgramsHeaderWrapper>

      <ProgramsHeaderSmall>{`Program: ${
        data && data.programName ? data.programName : ""
      }`}</ProgramsHeaderSmall>

      <SideMenuButton>Wyślij ogłoszenie</SideMenuButton>

      <ClassStudentListsForm
        studentsWithGradesAverages={data ? data.studentsList : []}
      />
    </ProgramsFormWrapper>
  );
};

export default ProgramsForm;
