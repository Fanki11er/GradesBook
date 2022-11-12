import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "../../Atoms/Buttons/Buttons";
import { ClassNameWithSupervisor } from "../../Types/Types";
import ClassesList from "../ClassesList/ClassesList";
import { ClassesFormWrapper, ClassesText } from "./ClassesForm.styles";

const ClassesForm = () => {
  const [data, setData] = useState<ClassNameWithSupervisor[] | null>(null);

  useEffect(() => {
    axios
      .get("https://localhost:7291/Class/LightClassInfo")
      .then((response) => {
        const data = response.data as ClassNameWithSupervisor[];
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <ClassesFormWrapper>
      <ClassesText>Klasy</ClassesText>
      <Button>Utwórz nową</Button>
      <ClassesList classList={data ? data : []} />
    </ClassesFormWrapper>
  );
};

export default ClassesForm;
