import { Formik } from "formik";
import { FormButtonOk } from "../../Atoms/Buttons/Buttons";
import { DefaultFormHeader } from "../../Atoms/DefaultFormHeader/DefaultFormHeader";
import useTeacher from "../../Hooks/useTeacher";
import RadioField from "../../Molecules/RadioField/RadioField";
import { SelectOption } from "../../Types/Types";
import {
  AddTeacherToSubjectsFormWrapper,
  RadioFieldsWrapper,
} from "./AddTeacherToSubjectsForm.styles";

type Props = {
  currentTeacherSubject: SelectOption | null;
  subjects: SelectOption[];
  refreshData: () => void;
};

type MyFormValues = {
  selectedSubject: string;
};

const filterSubjects = (subjects: SelectOption[], subjectId: number) => {
  return subjects.filter((subject) => {
    return subject.id !== subjectId;
  });
};

const AddTeacherToSubjectsForm = (props: Props) => {
  const { currentTeacherSubject, subjects, refreshData } = props;
  const { handleSetNewTeacherSubject } = useTeacher();

  const renderSubjectsList = (subjects: SelectOption[]) => {
    return subjects.map((subject) => {
      return (
        <RadioField
          key={subject.id}
          label={subject.value}
          name={"selectedSubject"}
          value={subject.id.toString()}
        />
      );
    });
  };

  const handleSubmit = (values: MyFormValues) => {
    if (values.selectedSubject !== "-1") {
      handleSetNewTeacherSubject(Number(values.selectedSubject))
        .then(() => {
          refreshData();
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  };

  const initialValues: MyFormValues = {
    selectedSubject: "-1",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      <AddTeacherToSubjectsFormWrapper>
        <DefaultFormHeader>
          {`Obecny przedmiot: ${
            currentTeacherSubject ? currentTeacherSubject.value : "Brak"
          }`}
        </DefaultFormHeader>
        <RadioFieldsWrapper>
          {renderSubjectsList(
            currentTeacherSubject
              ? filterSubjects(subjects, currentTeacherSubject.id)
              : subjects
          )}
        </RadioFieldsWrapper>
        <FormButtonOk type={"submit"}>Edytuj</FormButtonOk>
      </AddTeacherToSubjectsFormWrapper>
    </Formik>
  );
};

export default AddTeacherToSubjectsForm;

/*const convertValuesToDto = (values: MyFormValues): NewProgramDto => {
        return {
          Name: values.programName,
          SubjectsIds: values.addedSubjects.map((subject) => {
            return Number(subject);
          }),
        };
      };*/
