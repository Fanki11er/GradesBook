import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FormButtonOk } from "../../Atoms/Buttons/Buttons";
import useGrades from "../../Hooks/useGrades";
import useLoader from "../../Hooks/useLoader";
import useSubject from "../../Hooks/useSubject";
import useUser from "../../Hooks/useUser";
import CheckboxField from "../../Molecules/CheckboxField/CheckboxField";
import DateInputField from "../../Molecules/DateInputField/DateInputField";
import { SelectOption, StudentGradesStatistics } from "../../Types/Types";
import {
  ButtonWrapper,
  CheckboxesHeader,
  CheckboxGroupWrapper,
  DateFieldsWrapper,
  SelectStudentsGradesOptionsFormWrapper,
} from "./SelectStudentsGradesOptionsForm.styles";
type Props = {
  handleSetFunction: (statistics: StudentGradesStatistics) => void;
};

type MyFormValues = {
  subjects: number[];
  startDate: string;
  endDate: string;
};

const SelectStudentsGradesOptionsForm = (props: Props) => {
  const { handleSetFunction } = props;
  const [subjectsList, setSubjectsLIst] = useState<SelectOption[]>([]);
  const { studentId } = useParams();
  const { user } = useUser();
  const { handleGetStudentSubjectsList } = useSubject();
  const { handleGetStudentGradesFromPeriod } = useGrades();
  const { handleConnect, handleFinished, handleError, handleResetError } =
    useLoader();

  useEffect(() => {
    if (studentId || user?.id) {
      handleConnect();
      handleGetStudentSubjectsList(
        user?.role === "Student" ? user.id : Number(studentId)
      )
        .then((response) => {
          const data = response.data as SelectOption[];
          setSubjectsLIst(data);
          handleFinished();
        })
        .catch((e) => {
          handleError(e.message);
          console.log(e.message);
        });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [studentId]);
  const formatDate = (date: Date) => {
    let month = "" + (date.getMonth() + 1);
    let day = "" + (date.getDay() + 1);
    const year = date.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };
  const initialValues: MyFormValues = {
    subjects: [],
    startDate: formatDate(new Date()),
    endDate: formatDate(new Date()),
  };
  const validateForm = (values: MyFormValues) => {
    handleResetError();
    if (values.startDate > values.endDate) {
      handleError("Błędnie wybrany okres");
      return false;
    }
    if (values.subjects.length === 0) {
      handleError("Nie wybrano przemiotów");
      return false;
    }
    return true;
  };

  const handleSubmit = (values: MyFormValues) => {
    if (validateForm(values)) {
      handleGetStudentGradesFromPeriod(
        user?.role === "Student" ? user.id : Number(studentId),
        {
          StartDate: values.startDate,
          EndDate: values.endDate,
          Subjects: values.subjects.map((subject) => {
            return Number(subject);
          }),
        }
      )
        .then((response) => {
          const data = response.data as StudentGradesStatistics;
          handleSetFunction(data);
          handleFinished();
        })
        .catch((e) => {
          handleError(e.message);
          console.log(e.message);
        });
    }
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
          <CheckboxesHeader>Przedmioty</CheckboxesHeader>
          {renderCheckboxes(subjectsList)}
        </CheckboxGroupWrapper>
        <DateFieldsWrapper>
          <CheckboxesHeader>Okres</CheckboxesHeader>
          <DateInputField name={"startDate"} label={"Od:"} />
          <DateInputField name={"endDate"} label={"Do:"} />
        </DateFieldsWrapper>
        <ButtonWrapper>
          <FormButtonOk type={"submit"}>Generuj</FormButtonOk>
        </ButtonWrapper>
      </SelectStudentsGradesOptionsFormWrapper>
    </Formik>
  );
};

export default SelectStudentsGradesOptionsForm;
