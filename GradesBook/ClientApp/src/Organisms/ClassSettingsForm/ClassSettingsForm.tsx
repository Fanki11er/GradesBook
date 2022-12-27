import axios from "axios";
import { useState, useEffect } from "react";
import { ButtonAdded } from "../../Atoms/Buttons/Buttons";
import { ClassStudentsSettings } from "../../Types/Types";
import StudentSettingsListForm from "../StudentSettingsListForm/StudentSettingsListForm";

import {
  ButtonWrapper,
  ClassSettingHeaderText,
  ClassSettingHeaderWrapper,
  ClassSettingsFormWrapper,
  ClassSettingText,
  ImgClassSetting,
  ListsWrapper,
  TeacherInfoWrapper,
} from "./ClassSettingsForm.styles";
import ClassSettingImg from "../../Assets/Images/Teacher.png";

const ClassSettingsForm = () => {
  const [data, setData] = useState<ClassStudentsSettings | null>(null);

  useEffect(() => {
    axios
      .get("https://localhost:7291/Class/Settings/1")
      .then((response) => {
        const data = response.data as ClassStudentsSettings;
        console.log(data);
        setData(data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <ClassSettingsFormWrapper>
      <ClassSettingHeaderWrapper>
        <ClassSettingHeaderText>
          {data ? `Klasa: ${data.name}` : "Klasa: "}
        </ClassSettingHeaderText>
        <TeacherInfoWrapper>
          <ImgClassSetting src={ClassSettingImg} alt="ClassSettingImg" />
          <ClassSettingText>
            {data?.supervisingTeacherName
              ? `Wychowawca: ${data.supervisingTeacherName}`
              : "Wychowawca: Jan Kowalski"}
          </ClassSettingText>
        </TeacherInfoWrapper>
      </ClassSettingHeaderWrapper>
      <ListsWrapper>
        <StudentSettingsListForm students={data ? data.students : []} />
        <ButtonWrapper>
          <ButtonAdded></ButtonAdded>
          <ButtonAdded></ButtonAdded>
        </ButtonWrapper>
        <StudentSettingsListForm students={data ? data.freeStudent : []} />
      </ListsWrapper>
    </ClassSettingsFormWrapper>
  );
};

export default ClassSettingsForm;
