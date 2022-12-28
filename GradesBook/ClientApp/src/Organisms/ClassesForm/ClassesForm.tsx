import { useEffect, useState } from "react";
import { endpoints } from "../../Api/Endpoints";
import useAxiosPrivate from "../../Hooks/useAxiosPrivate";

import { ClassNameWithSupervisor } from "../../Types/Types";

import ClassesList from "../ClassesList/ClassesList";
import { ClassesFormWrapper, ClassSectionHeader } from "./ClassesForm.styles";

const ClassesForm = () => {
  const { getClassesList } = endpoints;
  const axiosPrivate = useAxiosPrivate();
  const [data, setData] = useState<ClassNameWithSupervisor[] | null>(null);

  useEffect(() => {
    axiosPrivate
      .get(getClassesList)
      .then((response) => {
        const data = response.data as ClassNameWithSupervisor[];
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ClassesFormWrapper>
      <ClassSectionHeader>Klasy</ClassSectionHeader>
      <ClassesList classList={data ? data : []} />
    </ClassesFormWrapper>
  );
};

export default ClassesForm;
