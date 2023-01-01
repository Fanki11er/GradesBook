import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useStudent from "../../Hooks/useStudent";
import RemoveStudentFromClassForm from "../../Molecules/RemoveStudentFromClassForm/RemoveStudentFromClassForm";
import { SelectOption } from "../../Types/Types";
import { ClassRemoveStudentViewWrapper } from "./ClassRemoveStudentView.styles";

const ClassRemoveStudentView = () => {
  const [classStudents, setClassStudentsList] = useState<SelectOption[]>([]);
  const { classId } = useParams();

  const { handleGetClassStudentsList } = useStudent();

  const getClassStudentsList = () => {
    handleGetClassStudentsList(Number(classId))
      .then((response) => {
        const list = response.data;
        setClassStudentsList(list);
      })
      .catch((e) => {
        console.log(e.message);
      });
  };
  useEffect(() => {
    getClassStudentsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ClassRemoveStudentViewWrapper>
      <RemoveStudentFromClassForm
        classStudentsList={classStudents}
        refreshData={getClassStudentsList}
        classId={Number(classId)}
      />
    </ClassRemoveStudentViewWrapper>
  );
};

export default ClassRemoveStudentView;
