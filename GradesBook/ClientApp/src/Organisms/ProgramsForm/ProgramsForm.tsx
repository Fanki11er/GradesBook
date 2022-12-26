import { Formik } from "formik";
import { FormButtonOk } from "../../Atoms/Buttons/Buttons";
import CheckboxField from "../../Molecules/CheckboxField/CheckboxField";
import InputField from "../../Molecules/InputField/InputField";
import { SelectOption } from "../../Types/Types";

import {
  AddProgramFormHeader,
  AddProgramFormInputsWrapper,
  AddProgramFormWrapper,
} from "./ProgramsForm.styles";

type Props = {
  subjects: SelectOption[];
};

type MyFormValues = {
  programName: string;
  addedSubjects: number[];
};

const ProgramsForm = (props: Props) => {
  const { subjects } = props;

  const initialValues: MyFormValues = {
    programName: "",
    addedSubjects: [],
  };

  const renderSubjectsList = (subjects: SelectOption[]) => {
    return subjects.map((subject) => {
      return (
        <CheckboxField
          key={subject.id}
          label={subject.value}
          name={"addedSubjects"}
          value={subject.id.toString()}
        />
      );
    });
  };

  const handleSubmit = (values: MyFormValues) => {
    console.log(values);
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      <AddProgramFormWrapper>
        <AddProgramFormHeader>Nowa lista</AddProgramFormHeader>
        <AddProgramFormInputsWrapper>
          <InputField
            label={"Nazwa listy"}
            name={"programName"}
            placeholder={"Nazwa listy"}
          />
          {renderSubjectsList(subjects)}
        </AddProgramFormInputsWrapper>
        <FormButtonOk type={"submit"}>Stwórz</FormButtonOk>
      </AddProgramFormWrapper>
    </Formik>
  );
};

export default ProgramsForm;

/*
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
*/
