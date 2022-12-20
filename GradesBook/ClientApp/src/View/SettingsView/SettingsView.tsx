import ThemeSettingsForm from "../../Organisms/ThemeSettingsForm/ThemeSettingsForm";
import { SettingsViewWrapper } from "./SettingsView.styles";

const SettingsView = () => {
  return (
    <SettingsViewWrapper>
      <ThemeSettingsForm />
    </SettingsViewWrapper>
  );
};

export default SettingsView;
