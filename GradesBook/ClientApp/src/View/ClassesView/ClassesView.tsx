import { useEffect, useState } from "react";
import useClasses from "../../Hooks/useClasses";
import ClassesForm from "../../Organisms/ClassesForm/ClassesForm";
import { ClassNameWithSupervisor } from "../../Types/Types";
import { ClassesViewWrapper } from "./ClassesView.styles";

const ClassesView = () => {
  const { handleGetAllClasses } = useClasses();
  const [classes, setClasses] = useState<ClassNameWithSupervisor[]>([]);
  useEffect(() => {
    handleGetAllClasses()
      .then((response) => {
        const data = response.data as ClassNameWithSupervisor[];
        setClasses(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <ClassesViewWrapper>
      <ClassesForm classes={classes} />
    </ClassesViewWrapper>
  );
};

export default ClassesView;
