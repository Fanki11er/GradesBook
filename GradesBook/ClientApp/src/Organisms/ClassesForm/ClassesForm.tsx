import axios from "axios";
import { useEffect, useState } from "react";
import { SideMenuButton } from "../../Atoms/Buttons/Buttons";
import { ClassNameWithSupervisor } from "../../Types/Types";
import ClassesList from "../ClassesList/ClassesList";
import { ButtonLoginWrapper } from "../LoginForm/LoginForm.styles";
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
      <ButtonLoginWrapper>
        <SideMenuButton>Utwórz nową</SideMenuButton>
      </ButtonLoginWrapper>

      <ClassesList classList={data ? data : []} />
    </ClassesFormWrapper>
  );
};

export default ClassesForm;
