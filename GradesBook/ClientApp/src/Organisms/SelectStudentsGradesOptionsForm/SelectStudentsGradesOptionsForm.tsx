import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useSubject from "../../Hooks/useSubject";
import CheckboxField from "../../Molecules/CheckboxField/CheckboxField";
import { SelectOption } from "../../Types/Types";
import {
  CheckboxGroupWrapper,
  SelectStudentsGradesOptionsFormWrapper,
} from "./SelectStudentsGradesOptionsForm.styles";
type MyFormValues = {
  subjects: number[];
  startDate: number;
  endDate: number;
};

const SelectStudentsGradesOptionsForm = () => {
  const [subjectsList, setSubjectsLIst] = useState<SelectOption[]>([]);
  const { studentId } = useParams();
  const { handleGetStudentSubjectsList } = useSubject();

  useEffect(() => {
    studentId &&
      handleGetStudentSubjectsList(Number(studentId)).then((response) => {
        const data = response.data as SelectOption[];
        setSubjectsLIst(data);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentId]);
  const initialValues: MyFormValues = {
    subjects: [],
    startDate: new Date().getDate(),
    endDate: new Date().getDate(),
  };

  const handleSubmit = (values: MyFormValues) => {
    console.log(values.startDate);
  };

  const renderCheckboxes = (subjectsList: SelectOption[]) => {
    return subjectsList.map((subject) => {
      const { id, value } = subject;
      return (
        <CheckboxField
          name={"subjects"}
          value={id.toString()}
          label={value}
          key={id}
        />
      );
    });
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        handleSubmit(values);
      }}
    >
      <SelectStudentsGradesOptionsFormWrapper>
        <CheckboxGroupWrapper>
          {renderCheckboxes(subjectsList)}
        </CheckboxGroupWrapper>
      </SelectStudentsGradesOptionsFormWrapper>
    </Formik>
  );
};

export default SelectStudentsGradesOptionsForm;
