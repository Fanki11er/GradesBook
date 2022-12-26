import { useEffect, useState } from "react";
import axios from "../../Api/axios";
import { endpoints } from "../../Api/Endpoints";

import { ClassNameWithSupervisor } from "../../Types/Types";

import ClassesList from "../ClassesList/ClassesList";
import { ClassesFormWrapper, ClassSectionHeader } from "./ClassesForm.styles";

const ClassesForm = () => {
  const { getClassesList } = endpoints;
  const [data, setData] = useState<ClassNameWithSupervisor[] | null>(null);

  useEffect(() => {
    axios
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
