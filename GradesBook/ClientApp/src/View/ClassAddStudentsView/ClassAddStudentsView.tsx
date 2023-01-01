import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStudent from "../../Hooks/useStudent";
import AddStudentsToClassForm from "../../Molecules/AddStudentsToClassForm/AddStudentsToClassForm";
import { SelectOption } from "../../Types/Types";
import { ClassAddStudentViewWrapper } from "./ClassAddStudentsView.styles";

const ClassAddStudentsView = () => {
  const [freeStudentsList, setFreeStudentsList] = useState<SelectOption[]>([]);
  const { classId } = useParams();

  const { handleGetFreeStudentsList } = useStudent();

  const getFreeStudentsList = () => {
    handleGetFreeStudentsList()
      .then((response) => {
        const list = response.data;
        setFreeStudentsList(list);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  useEffect(() => {
    getFreeStudentsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ClassAddStudentViewWrapper>
      <AddStudentsToClassForm
        freeStudentsList={freeStudentsList}
        refreshData={getFreeStudentsList}
        classId={Number(classId)}
      />
    </ClassAddStudentViewWrapper>
  );
};

export default ClassAddStudentsView;
/*
<AddTeacherToSubjectsForm
        currentTeacherSubject={userSubject}
        subjects={subjects}
        refreshData={getUserSubject}
      /> */
