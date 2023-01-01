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
  }, []);

  return (
    <ClassCreationViewWrapper>
      <ClassCreationForm
        programs={[
          { id: 1, value: "test1" },
          { id: 2, value: "test2" },
        ]}
        teachers={[
          { id: 1, value: "test1" },
          { id: 2, value: "test2" },
        ]}
      />
    </ClassCreationViewWrapper>
  );
};

export default ClassCreationView;
