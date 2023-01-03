import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useGrades from "../../Hooks/useGrades";
import useLoader from "../../Hooks/useLoader";
import useSubject from "../../Hooks/useSubject";
import RateStudentForm from "../../Organisms/RateStudentForm/RateStudentForm";
import { SelectOption } from "../../Types/Types";
import { RateStudentViewWrapper } from "./RateStudentView.styles";

const RateStudentView = () => {
  const [subjects, setSubjects] = useState<SelectOption[]>([]);
  const [grades, setGrades] = useState<SelectOption[]>([]);
  const { handleError, error } = useLoader();
  const { studentId } = useParams();
  const { handleGetStudentSubjectsList } = useSubject();
  const { handleGetPossibleGrades } = useGrades();

  useEffect(() => {
    handleGetStudentSubjectsList(studentId ? Number(studentId) : 0)
      .then((response) => {
        const data = response.data as SelectOption[];
        setSubjects(data);
      })
      .catch((e) => {
        handleError(e.message);
        console.log(e.message);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    handleGetPossibleGrades()
      .then((response) => {
        const data = response.data as SelectOption[];
        setGrades(data);
      })
      .catch((e) => {
        handleError(e.message);
        console.log(e.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <RateStudentViewWrapper>
      {subjects.length && grades.length ? (
        <RateStudentForm
          subjects={subjects}
          grades={grades}
          studentId={Number(studentId)}
        />
      ) : null}
      {!error && (!subjects.length || !grades.length) ? (
        <div>Loading</div>
      ) : null}
      {error ? <div>{error}</div> : null}
    </RateStudentViewWrapper>
  );
};

export default RateStudentView;
