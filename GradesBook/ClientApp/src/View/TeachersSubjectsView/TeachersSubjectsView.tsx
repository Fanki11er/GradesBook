import { useEffect, useState } from "react";
import useSubject from "../../Hooks/useSubject";
import useTeacher from "../../Hooks/useTeacher";
import AddTeacherToSubjectsForm from "../../Organisms/AddTeacherToSubjectsForm/AddTeacherToSubjectsForm";
import { SelectOption } from "../../Types/Types";
import { TeachersSubjectsViewWrapper } from "./TeachersSubjectsView.styles";

const TeachersSubjectsView = () => {
  const [userSubject, setUserSubject] = useState<SelectOption | null>(null);
  const [subjects, setSubjects] = useState<SelectOption[]>([]);
  const { handleGetUserSubject } = useTeacher();
  const { handleGetAllSubjects } = useSubject();

  const getUserSubject = () => {
    handleGetUserSubject()
      .then((response) => {
        const subject = response.data;
        setUserSubject(subject);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  useEffect(() => {
    getUserSubject();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleGetAllSubjects()
      .then((response) => {
        const subjects = response.data as SelectOption[];
        setSubjects(subjects);
      })
      .catch((e) => {
        console.log(e.message);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <TeachersSubjectsViewWrapper>
      <AddTeacherToSubjectsForm
        currentTeacherSubject={userSubject}
        subjects={subjects}
        refreshData={getUserSubject}
      />
    </TeachersSubjectsViewWrapper>
  );
};

export default TeachersSubjectsView;
