import { useEffect, useState } from "react";
import { ViewSideMenu } from "../../Atoms/SideMenu/SideMenu";
import useUserSettings from "../../Hooks/useUserSettings";
import SideMenuNavigation from "../../Molecules/SideMenuNavigation/SideMenuNavigation";
import PersonalDataChangeForm from "../../Organisms/PersonalDataChangeForm/PersonalDataChangeForm";
import ThemeSettingsForm from "../../Organisms/ThemeSettingsForm/ThemeSettingsForm";
import { UserCurrentSettingsDto } from "../../Types/Types";
import {
  SettingsFormsWrapper,
  SettingsViewWrapper,
} from "./SettingsView.styles";

const SettingsView = () => {
  const [currentSettings, setCurrentSettings] =
    useState<UserCurrentSettingsDto | null>(null);
  const { handleGetCurrentUserSettings } = useUserSettings();
  useEffect(() => {
    handleGetCurrentUserSettings().then((response) => {
      setCurrentSettings(response.data);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SettingsViewWrapper>
      <ViewSideMenu>
        <SideMenuNavigation />
      </ViewSideMenu>
      <SettingsFormsWrapper>
        <ThemeSettingsForm />
        {currentSettings && (
          <PersonalDataChangeForm currentSettings={currentSettings} />
        )}
      </SettingsFormsWrapper>
    </SettingsViewWrapper>
  );
};

export default SettingsView;
