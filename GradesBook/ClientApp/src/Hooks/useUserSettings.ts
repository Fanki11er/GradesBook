import { useContext } from "react";
import { UserSettingsContext } from "../Providers/UserSettingsProvider";

const useUserSettings = () => {
  return useContext(UserSettingsContext);
};

export default useUserSettings;
