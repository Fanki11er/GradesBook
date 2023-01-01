import { useContext } from "react";
import { ThemeSettingsContext } from "../Providers/ThemeSettingsProvider";

const useColorScheme = () => {
  return useContext(ThemeSettingsContext);
};

export default useColorScheme;
