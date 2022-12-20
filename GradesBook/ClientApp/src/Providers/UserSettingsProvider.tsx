import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { ColorSchemasTypes, Theme, themes } from "../GlobalStyles/theme";
import useUser from "../Hooks/useUser";

export const UserSettingsContext = createContext({
  theme: themes.light as Theme,
  themeName: "light" as ColorSchemasTypes,
  handleChangeColorsScheme: (scheme: ColorSchemasTypes) => {},
});

const UserSettingsProvider = (props: PropsWithChildren) => {
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

  const handleChangeColorsScheme = (scheme: ColorSchemasTypes) => {
    user && localStorage.setItem(`propertiesUser${user.id}`, scheme);
    setThemeName(scheme);
    setTheme(themes[scheme]);
  };

  const context = {
    theme,
    themeName,
    handleChangeColorsScheme,
  };

  return (
    <UserSettingsContext.Provider value={context}>
      {props.children}
    </UserSettingsContext.Provider>
  );
};

export default UserSettingsProvider;
