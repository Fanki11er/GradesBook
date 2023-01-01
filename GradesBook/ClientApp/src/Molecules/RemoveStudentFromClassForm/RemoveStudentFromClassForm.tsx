import { Formik } from "formik";
import { FormButtonCancel } from "../../Atoms/Buttons/Buttons";
import { DefaultFormHeader } from "../../Atoms/DefaultFormHeader/DefaultFormHeader";
import useHelpers from "../../Hooks/useHelpers";
import useStudent from "../../Hooks/useStudent";
import { SelectOption } from "../../Types/Types";
import CheckboxField from "../CheckboxField/CheckboxField";
import {
  CheckBoxesWrapper,
  RemoveStudentFromClassFormWrapper,
} from "./RemoveStudentFromClassForm.styles";

type Props = {
  classStudentsList: SelectOption[];
  classId: number;
  refreshData: () => void;
};

type MyFormValues = {
  removedStudents: string[];
};

const RemoveStudentFromClassForm = (props: Props) => {
  const { classStudentsList, refreshData, classId } = props;
  const { handleRemoveStudentsFromClass } = useStudent();
  const { transformStringToNumbers } = useHelpers();

  const renderStudentsList = (studentsList: SelectOption[]) => {
    return studentsList.map((student) => {
      return (
        <CheckboxField
          key={student.id}
          label={student.value}
          name={"removedStudents"}
          value={student.id.toString()}
        />
      );
    });
  };

  const handleSubmit = (values: MyFormValues) => {
    if (values.removedStudents.length > 0) {
      handleRemoveStudentsFromClass(
        classId,
        transformStringToNumbers(values.removedStudents)
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
    removedStudents: [],
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        handleSubmit(values);
        actions.setSubmitting(false);
      }}
    >
      <RemoveStudentFromClassFormWrapper>
        <DefaultFormHeader>Wybierz uczniów</DefaultFormHeader>
        <CheckBoxesWrapper>
          {renderStudentsList(classStudentsList)}
        </CheckBoxesWrapper>
        <FormButtonCancel type={"submit"}>Usuń</FormButtonCancel>
      </RemoveStudentFromClassFormWrapper>
    </Formik>
  );
};

export default RemoveStudentFromClassForm;
