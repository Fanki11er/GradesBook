import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { FormButtonOk } from "../../Atoms/Buttons/Buttons";
import { DefaultFormHeader } from "../../Atoms/DefaultFormHeader/DefaultFormHeader";
import useGrades from "../../Hooks/useGrades";
import useLoader from "../../Hooks/useLoader";
import SelectInputField from "../../Molecules/SelectInputField/SelectInputField";
import { SelectOption } from "../../Types/Types";
import { RateStudentFormWrapper } from "./RateStudentForm.styles";

type Props = {
  subjects: SelectOption[];
  grades: SelectOption[];
  studentId: number;
};
type MyFormValues = {
  subjectId: number;
  grade: number;
};

const RateStudentForm = (props: Props) => {
  const { subjects, grades, studentId } = props;
  const { handleRateStudent } = useGrades();
  const {
    handleResetError,
    handleConnect,
    handleFinished,
    handleError,
    isConnecting,
    error,
  } = useLoader();
  const navigate = useNavigate();
  const initialValues: MyFormValues = {
    subjectId: 0,
    grade: 0,
  };

  const validateFormValues = (values: MyFormValues) => {
    handleResetError();
    if (values.subjectId === 0 || values.grade === 0) {
      return false;
    }
    return true;
  };

  const handleSubmit = (values: MyFormValues) => {
    if (validateFormValues(values)) {
      handleConnect();
      handleRateStudent(studentId, {
        Value: values.grade,
        SubjectId: values.subjectId,
      })
        .then(() => {
          handleFinished();
        })
        .catch((e) => {
          handleError(e.message);
          console.log(e.message);
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
          actions.setSubmitting(false);
          navigate(-1);
        }
      }}
    >
      <RateStudentFormWrapper>
        <DefaultFormHeader>Oceń ucznia</DefaultFormHeader>
        <SelectInputField
          label={"Wybierz przedmiot"}
          name={"subjectId"}
          options={subjects}
          placeholder={"Wybierz przedmiot"}
          disabled={false}
        />
        <SelectInputField
          label={"Wybierz ocenę"}
          name={"grade"}
          options={grades}
          placeholder={"Wybierz ocenę"}
          disabled={false}
        />

        <FormButtonOk type={"submit"}>Oceń</FormButtonOk>
      </RateStudentFormWrapper>
    </Formik>
  );
};

export default RateStudentForm;
