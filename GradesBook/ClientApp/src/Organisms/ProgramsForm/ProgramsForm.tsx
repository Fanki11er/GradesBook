import { Formik } from "formik";
import { FormButtonOk } from "../../Atoms/Buttons/Buttons";
import useLoader from "../../Hooks/useLoader";
import useProgram from "../../Hooks/useProgram";
import CheckboxField from "../../Molecules/CheckboxField/CheckboxField";
import InputField from "../../Molecules/InputField/InputField";
import { NewProgramDto, SelectOption } from "../../Types/Types";

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
  addedSubjects: string[];
};

const ProgramsForm = (props: Props) => {
  const { subjects } = props;
  const { handleConnect, handleError, handleFinished, error, isConnecting } =
    useLoader();
  const { handleAddNewProgram } = useProgram();

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

  const validateValues = (values: MyFormValues) => {
    if (values.programName.length < 3) {
      return false;
    }
    if (!values.addedSubjects.length) {
      return false;
    }
    return true;
  };

  const convertValuesToDto = (values: MyFormValues): NewProgramDto => {
    return {
      Name: values.programName,
      SubjectsIds: values.addedSubjects.map((subject) => {
        return Number(subject);
      }),
    };
  };

  const handleSubmit = (values: MyFormValues) => {
    if (validateValues(values)) {
      handleConnect();
      const dto = convertValuesToDto(values);
      handleAddNewProgram(dto)
        .then(() => {
          handleFinished();
        })
        .catch((e) => {
          console.log(e);
          handleError(e.message);
        });
    }
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        if (!isConnecting && !error) {
          actions.resetForm();
        }
        actions.setSubmitting(false);
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
