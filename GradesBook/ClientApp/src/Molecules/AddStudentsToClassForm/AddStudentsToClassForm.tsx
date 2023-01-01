import { Formik } from "formik";
import { FormButtonOk } from "../../Atoms/Buttons/Buttons";
import { DefaultFormHeader } from "../../Atoms/DefaultFormHeader/DefaultFormHeader";
import useHelpers from "../../Hooks/useHelpers";
import useStudent from "../../Hooks/useStudent";
import { SelectOption } from "../../Types/Types";
import CheckboxField from "../CheckboxField/CheckboxField";
import {
  AddStudentsToClassFormWrapper,
  CheckBoxesWrapper,
} from "./AddStudentsToClassForm.styles";

type Props = {
  freeStudentsList: SelectOption[];
  classId: number;
  refreshData: () => void;
};

type MyFormValues = {
  newStudents: string[];
};

const AddStudentsToClassForm = (props: Props) => {
  const { freeStudentsList, refreshData, classId } = props;
  const { handleAddStudentsToClass } = useStudent();
  const { transformStringToNumbers } = useHelpers();

  const renderStudentsList = (studentsList: SelectOption[]) => {
    return studentsList.map((student) => {
      return (
        <CheckboxField
          key={student.id}
          label={student.value}
          name={"newStudents"}
          value={student.id.toString()}
        />
      );
    });
  };

  const handleSubmit = (values: MyFormValues) => {
    if (values.newStudents.length > 0) {
      handleAddStudentsToClass(
        classId,
        transformStringToNumbers(values.newStudents)
      )
        .then(() => {
          refreshData();
        })
        .catch((e) => {
          console.log(e.message);
        });
    }
  };

  const initialValues: MyFormValues = {
    newStudents: [],
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      <AddStudentsToClassFormWrapper>
        <DefaultFormHeader>Wybierz uczniów</DefaultFormHeader>
        <CheckBoxesWrapper>
          {renderStudentsList(freeStudentsList)}
        </CheckBoxesWrapper>
        <FormButtonOk type={"submit"}>Dodaj</FormButtonOk>
      </AddStudentsToClassFormWrapper>
    </Formik>
  );
};

export default AddStudentsToClassForm;
