import {
  ButtonEdit,
  ButtonGrades,
  ButtonItemList,
  ButtonSend,
} from "../../Atoms/Buttons/Buttons";
import {
  ClassStudentListsFormWrapper,
  RateCircle,
  StudentList,
  StudentText,
} from "../ClassStudentListsForm/ClassStudentListsForm.styles";
import {
  ImgPrograms,
  ProgramsFormWrapper,
  ProgramsHeaderText,
  ProgramsHeaderWrapper,
  ProgramsText,
} from "./ProgramsForm.styles";

const ProgramsForm = () => {
  return (
    <ProgramsFormWrapper>
      <ProgramsHeaderWrapper>
        <ProgramsHeaderText>Klasa 1A</ProgramsHeaderText>
        <ImgPrograms />
        <ProgramsText>Jan Kowalski</ProgramsText>
        <ButtonEdit>Edytuj</ButtonEdit>
      </ProgramsHeaderWrapper>
      <ButtonItemList>Program: Lista Przedmiotów</ButtonItemList>
      <ButtonSend>Wyślij ogłoszenie</ButtonSend>
      <ClassStudentListsFormWrapper>
        <StudentList>
          <RateCircle>2.3</RateCircle>
          <StudentText>Jan Kowalski</StudentText>
          <ButtonGrades>Oceń</ButtonGrades>
          <ButtonGrades>Oceny</ButtonGrades>
        </StudentList>
        <StudentList>
          <RateCircle>2.3</RateCircle>
          <StudentText>Jan Kowalski</StudentText>
          <ButtonGrades>Oceń</ButtonGrades>
          <ButtonGrades>Oceny</ButtonGrades>
        </StudentList>
        <StudentList>
          <RateCircle>2.3</RateCircle>
          <StudentText>Jan Kowalski</StudentText>
          <ButtonGrades>Oceń</ButtonGrades>
          <ButtonGrades>Oceny</ButtonGrades>
        </StudentList>
      </ClassStudentListsFormWrapper>
    </ProgramsFormWrapper>
  );
};

export default ProgramsForm;
