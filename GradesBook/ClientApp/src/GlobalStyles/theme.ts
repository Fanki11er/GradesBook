const colorsSchemes: ColorsSchemes = {
  light: {
    mainBackground: "rgba(247, 248, 250, 1)",
    menuBackground: "rgba(115, 124, 142, 1)",
    transparentBlack: "rgba(115, 124, 142, 0.8)",
    white: "white",
    lightBorder: "rgba(223, 226, 232, 1)",
    shadow: "rgba(0, 0, 0, 0.05)",
    red: "rgba(203, 133, 129, 1)",
    green: "rgba(143, 203, 128, 1)",
    yellow: "rgba(225, 216, 136, 1)",
    errorRed: "rgba(255, 131, 131, 1)",
  },
  dark: {
    mainBackground: "rgba(47, 46, 65, 1)",
    menuBackground: "gray",
    transparentBlack: "rgba(0, 0, 0, 0.7)",
    white: "white",
    lightBorder: "black",
    shadow: "white",
    red: "",
    green: "",
    yellow: "",
    errorRed: "",
  },
};

export type Colors = {
  mainBackground: string;
  menuBackground: string;
  transparentBlack: string;
  white: string;
  lightBorder: string;
  shadow: string;
  red: string;
  green: string;
  yellow: string;
  errorRed: string;
};

export const theme: Theme = {
  colors: colorsSchemes.light,
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
