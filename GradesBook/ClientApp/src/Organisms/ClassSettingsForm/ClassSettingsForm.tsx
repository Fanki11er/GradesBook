import { ClassWithStudentsAndProgram } from "../../Types/Types";

import {
  ClassSettingHeaderText,
  ClassSettingHeaderWrapper,
  ClassSettingsFormWrapper,
  ClassSettingText,
  ClassStudentsListWrapper,
  ImgClassSetting,
  TeacherInfoWrapper,
} from "./ClassSettingsForm.styles";
import ClassSettingImg from "../../Assets/Images/Teacher.png";
import ClassStudentsList from "../../Molecules/ClassStudentsList/ClassStudentsList";

type Props = {
  classSettings: ClassWithStudentsAndProgram;
};

const ClassSettingsForm = (props: Props) => {
  const { classSettings } = props;

  return (
    <ClassSettingsFormWrapper>
      <ClassSettingHeaderWrapper>
        <ClassSettingHeaderText>
          {`Klasa: ${classSettings.className}`}
        </ClassSettingHeaderText>
        <ClassSettingText>
          {`Program: ${classSettings.programName}`}
        </ClassSettingText>
        <TeacherInfoWrapper>
          <ImgClassSetting src={ClassSettingImg} alt="ClassSettingImg" />
          <ClassSettingText>
            {`Wychowawca: ${classSettings.supervisingTeacher}`}
          </ClassSettingText>
        </TeacherInfoWrapper>
      </ClassSettingHeaderWrapper>
      <ClassStudentsListWrapper>
        <ClassStudentsList studentsList={classSettings.studentsList} />
      </ClassStudentsListWrapper>
    </ClassSettingsFormWrapper>
  );
};

export default ClassSettingsForm;
