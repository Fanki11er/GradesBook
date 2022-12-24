import { AxiosResponse } from "axios";
import { createContext, PropsWithChildren, useEffect, useState } from "react";
import axios from "../Api/axios";
import { endpoints } from "../Api/Endpoints";
import { ColorSchemasTypes, Theme, themes } from "../GlobalStyles/theme";
import useUser from "../Hooks/useUser";

export const UserSettingsContext = createContext({
  theme: themes.light as Theme,
  themeName: "light" as ColorSchemasTypes,
  handleChangeColorsScheme: (scheme: ColorSchemasTypes) => {},
  handleGetCurrentUserSettings: (): Promise<AxiosResponse<any, any>> =>
    new Promise(() => {}) as Promise<AxiosResponse<any, any>>,
});

const UserSettingsProvider = (props: PropsWithChildren) => {
  const { getUserCurrentSettings } = endpoints;
  const { user } = useUser();
  const [themeName, setThemeName] = useState<ColorSchemasTypes>("light");
  const [theme, setTheme] = useState<Theme>(themes[themeName]);

  useEffect(() => {
    if (user) {
      const savedColorScheme = localStorage.getItem(
        `propertiesUser${user.id}`
      ) as ColorSchemasTypes | null;
      if (savedColorScheme && savedColorScheme !== themeName) {
        setThemeName(savedColorScheme);
        setTheme(themes[savedColorScheme]);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const handleGetCurrentUserSettings = async () => {
    return await axios.get(getUserCurrentSettings(user!.role, user!.id));
  };

  const handleChangeColorsScheme = (scheme: ColorSchemasTypes) => {
    user && localStorage.setItem(`propertiesUser${user.id}`, scheme);
    setThemeName(scheme);
    setTheme(themes[scheme]);
  };

  const context = {
    theme,
    themeName,
    handleChangeColorsScheme,
    handleGetCurrentUserSettings,
  };

  return (
    <UserSettingsContext.Provider value={context}>
      {props.children}
    </UserSettingsContext.Provider>
  );
};

export default UserSettingsProvider;
