import {
  StudentSettingsCheckbox,
  StudentSettingsList,
  StudentSettingsListFormWrapper,
  StudentSettingsListText,
} from "./StudentSettingsListForm.styles";

const StudentSettingsListForm = () => {
  return (
    <StudentSettingsListFormWrapper>
      <StudentSettingsList>
        <StudentSettingsListText>Jan Kowalski</StudentSettingsListText>
        <StudentSettingsCheckbox type={"checkbox"} />
      </StudentSettingsList>
    </StudentSettingsListFormWrapper>
  );
};

export default StudentSettingsListForm;
