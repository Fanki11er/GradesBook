import { LightStudent } from "../../Types/Types";
import {
  StudentSettingsCheckbox,
  StudentSettingsList,
  StudentSettingsListFormWrapper,
  StudentSettingsListText,
} from "./StudentSettingsListForm.styles";

type Props = {
  students: LightStudent[];
};
const StudentSettingsListForm = (props: Props) => {
  const { students } = props;

  const renderStudents = (students: LightStudent[]) => {
    return (
      students &&
      students.map((student, index) => {
        return (
          <StudentSettingsList key={index}>
            <StudentSettingsListText>{student.name}</StudentSettingsListText>
            <StudentSettingsCheckbox type={"checkbox"} />
          </StudentSettingsList>
        );
      })
    );
  };
  return (
    <StudentSettingsListFormWrapper>
      {renderStudents(students)}
    </StudentSettingsListFormWrapper>
  );
};

export default StudentSettingsListForm;
