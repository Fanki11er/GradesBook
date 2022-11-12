const colorsSchemes: ColorsSchemes = {
  light: {
    mainBackground: "white",
    menuBackground: "rgba(217, 217, 217, 1)",
  },
  dark: {
    mainBackground: "rgba(47, 46, 65, 1)",
    menuBackground: "gray",
  },
};

export type Colors = {
  mainBackground: string;
  menuBackground: string;
};

export const theme: Theme = {
  colors: colorsSchemes.dark,
  fontSizes: {},

  devices: {
    medium: `min-width: 640px`,
    large: `min-width: 1000px`,
    veryLarge: "min-width: 2500px",
  },
};

export type Theme = {
  colors: Colors;
  fontSizes: {};

  devices: {
    medium: string;
    large: string;
    veryLarge: string;
  };
};

export type StyledTheme = {
  theme: Theme;
};

export type ColorsSchemes = {
  light: Colors;
  dark: Colors;
};

type ColorSchemasTypes = "light" | "dark";

export const setColorsSchema = (scheme: ColorSchemasTypes) => {
  theme.colors = colorsSchemes[scheme];
};

//setColorsSchema("dark");
