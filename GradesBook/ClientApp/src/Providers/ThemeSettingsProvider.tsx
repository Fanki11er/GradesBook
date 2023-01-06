import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ColorSchemasTypes, Theme, themes } from "../GlobalStyles/theme";
import { routes } from "../Routes/routes";

export const ThemeSettingsContext = createContext({
  theme: themes.light as Theme,
  themeName: "light" as ColorSchemasTypes,
  handleChangeColorsScheme: (scheme: ColorSchemasTypes, userId: string) => {},
  loadPreferredTheme: (userId: string) => {},
});

const ThemeSettingsProvider = (props: PropsWithChildren) => {
  const { login, register, baseRoute } = routes;
  const [themeName, setThemeName] = useState<ColorSchemasTypes>("light");
  const [theme, setTheme] = useState<Theme>(themes[themeName]);
  const { pathname } = useLocation();

  const loadPreferredTheme = (userId: string) => {
    const savedColorScheme = localStorage.getItem(
      `propertiesUser${userId}`
    ) as ColorSchemasTypes | null;
    if (savedColorScheme && savedColorScheme !== themeName) {
      setThemeName(savedColorScheme);
      setTheme(themes[savedColorScheme]);
    }
  };
  useEffect(() => {
    if (pathname === login || pathname === register || pathname === baseRoute) {
      setThemeName("light");
      setTheme(themes["light"]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleChangeColorsScheme = (
    scheme: ColorSchemasTypes,
    userId: string
  ) => {
    localStorage.setItem(`propertiesUser${userId}`, scheme);
    setThemeName(scheme);
    setTheme(themes[scheme]);
  };

  const context = {
    theme,
    themeName,
    handleChangeColorsScheme,
    loadPreferredTheme,
  };

  return (
    <ThemeSettingsContext.Provider value={context}>
      {props.children}
    </ThemeSettingsContext.Provider>
  );
};

export default ThemeSettingsProvider;
