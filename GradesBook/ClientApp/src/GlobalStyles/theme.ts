const colorsSchemes: ColorsSchemes = {
  light: {
    mainBackground: "rgba(247, 248, 250, 1)",
    menuBackground: "rgba(115, 124, 142, 1)",
    buttonAddHover: "rgba(131,179,59,1)",
    buttonAdd: "rgba(192, 199, 214, 1)",
    transparentBlack: "rgba(115, 124, 142, 0.8)",
    white: "rgba(255,255,255,1)",
    lightBorder: "rgba(223, 226, 232, 1)",
    shadow: "rgba(0, 0, 0, 0.05)",
    red: "rgba(203, 133, 129, 1)",
    green: "rgba(143, 203, 128, 1)",
    yellow: "rgba(225, 216, 136, 1)",
    errorRed: "rgba(255, 131, 131, 1)",
    buttonsGray: "rgba(192, 199, 214, 1)",
    purple: "rgba(63, 61, 86)",
    transparent: "transparent",
    navigationText: "black",
    footerText: "rgba(115, 124, 142, 1)",
    footerLine: "rgba(223, 226, 232, 1)",
    textHeader: "rgba(115, 124, 142, 1)",
  },
  dark: {
    mainBackground: "rgba(1,13,38, 1)",
    menuBackground: "rgba(1,13,38, 1)",
    buttonAddHover: "rgba(131,179,59,1)",
    buttonAdd: "rgba(19,179,242,1)",
    transparentBlack: "rgba(19,179,242,1)",
    white: "rgba(2,40,115,1)",
    lightBorder: "rgba(19,179,242,1)",
    shadow: "rgba(2,31,89,1)",
    red: "",
    green: "rgba(131,179,59,1)",
    yellow: "",
    errorRed: "",
    buttonsGray: "rgba(19,179,242,1)",
    purple: "",
    transparent: "transparent",
    navigationText: "rgba(131,179,59,1)",
    footerText: "rgba(115, 124, 142, 1)",
    footerLine: "rgba(19,179,242,1)",
    textHeader: "rgba(19,179,242,1)",
  },
  pink: {
    mainBackground: "rgba(202,166,166,1)",
    menuBackground: "rgba(200,151,151,1)",
    buttonAddHover: "rgba(200,151,151,1)",
    buttonAdd: "rgba(201,132,132,1)",
    transparentBlack: "rgba(115, 124, 142, 1)",
    white: "rgba(217, 217, 217, 1)",
    lightBorder: "",
    shadow: "rgba(201,132,132,0.3)",
    red: "",
    green: "rgba(201,132,132,1)",
    yellow: "",
    errorRed: "",
    buttonsGray: "",
    purple: "rgba(63, 61, 86)",
    transparent: "transparent",
    navigationText: "black",
    footerText: "rgba(115, 124, 142, 1)",
    footerLine: "rgba(217, 217, 217, 1)",
    textHeader: "rgba(115, 124, 142, 1)",
  },
};

const fontSizes = {
  normal: "16px",
  medium: "20px",
  large: "26px",
};

const devices = {
  medium: `min-width: 640px`,
  large: `min-width: 1000px`,
  veryLarge: "min-width: 2500px",
};

export const lightTheme: Theme = {
  colors: colorsSchemes.light,
  fontSizes,
  devices,
};

export const darkTheme: Theme = {
  colors: colorsSchemes.dark,
  fontSizes,
  devices,
};

export const pinkTheme: Theme = {
  colors: colorsSchemes.pink,
  fontSizes,
  devices,
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
  buttonsGray: string;
  transparent: string;
  purple: string;
  navigationText: string;
  footerText: string;
  footerLine: string;
  textHeader: string;
  buttonAddHover: string;
  buttonAdd: string;
};

export let selectedColorScheme: ColorSchemasTypes = "light";

/*export const theme: Theme = {
  colors: colorsSchemes[selectedColorScheme],
  fontSizes: {
    normal: "16px",
    medium: "20px",
  },

  devices: {
    medium: `min-width: 640px`,
    large: `min-width: 1000px`,
    veryLarge: "min-width: 2500px",
  },
};*/

export type Theme = {
  colors: Colors;
  fontSizes: {
    normal: string;
    medium: string;
    large: string;
  };

  devices: {
    medium: string;
    large: string;
    veryLarge: string;
  };
};

export const themes = {
  light: lightTheme,
  dark: darkTheme,
  pink: pinkTheme,
};

export type StyledTheme = {
  theme: Theme;
};

export type ColorsSchemes = {
  light: Colors;
  dark: Colors;
  pink: Colors;
};

export type ColorSchemasTypes = "light" | "dark" | "pink";
