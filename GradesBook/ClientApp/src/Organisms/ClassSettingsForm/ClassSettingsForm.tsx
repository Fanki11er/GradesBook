import axios from "axios";
import { useState, useEffect } from "react";
import { ButtonAdded } from "../../Atoms/Buttons/Buttons";
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

const ClassSettingsForm = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios
      .get("https://192.168.1.129:7291/Class")
      .then((d) => {
        console.log(d.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <ClassSettingsFormWrapper>
      <ClassSettingHeaderWrapper>
        <ClassSettingHeaderText>Klasa 1A</ClassSettingHeaderText>
        <TeacherInfoWrapper>
          <ImgClassSetting />
          <ClassSettingText>Jan Kowalski</ClassSettingText>
        </TeacherInfoWrapper>
      </ClassSettingHeaderWrapper>
      <ListsWrapper>
        <StudentSettingsListForm />
        <ButtonWrapper>
          <ButtonAdded></ButtonAdded>
          <ButtonAdded></ButtonAdded>
        </ButtonWrapper>

        <StudentSettingsListForm />
      </ListsWrapper>
    </ClassSettingsFormWrapper>
  );
};

export default ClassSettingsForm;
