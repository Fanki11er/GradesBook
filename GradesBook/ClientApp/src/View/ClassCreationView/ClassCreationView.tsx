import { useEffect, useState } from "react";
import useProgram from "../../Hooks/useProgram";
import useTeacher from "../../Hooks/useTeacher";
import ClassCreationForm from "../../Organisms/ClassCreationForm/ClassCreationForm";
import { SelectOption } from "../../Types/Types";
import { ClassCreationViewWrapper } from "./ClassCreationView.styles";

const ClassCreationView = () => {
  const { handleGetAllPrograms } = useProgram();
  const { handleGetAllTeachers } = useTeacher();
  const [teachers, setTeachers] = useState<SelectOption[]>([]);
  const [programs, setPrograms] = useState<SelectOption[]>([]);
  useEffect(() => {
    handleGetAllPrograms()
      .then((response) => {
        const programs = response.data as SelectOption[];
        setPrograms(programs);
      })
      .catch((e) => {
        console.log(e.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleGetAllTeachers()
      .then((response) => {
        const teachers = response.data as SelectOption[];
        setTeachers(teachers);
      })
      .catch((e) => {
        console.log(e.message);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ClassCreationViewWrapper>
      <ClassCreationForm programs={programs} teachers={teachers} />
    </ClassCreationViewWrapper>
  );
};

export default ClassCreationView;
