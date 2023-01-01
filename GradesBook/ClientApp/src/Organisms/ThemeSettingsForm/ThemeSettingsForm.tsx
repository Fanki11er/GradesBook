import { useContext, useEffect, useState } from "react";
import { FormButtonOk } from "../../Atoms/Buttons/Buttons";
import { ColorSchemasTypes } from "../../GlobalStyles/theme";
import { UserSettingsContext } from "../../Providers/UserSettingsProvider";
import LightThemeImage from "../../Assets/Images/SkinsWhite.svg";
import NightThemeImage from "../../Assets/Images/SkinsNight.svg";
import PinkThemeImage from "../../Assets/Images/SkinsPink.svg";
import {
  SkinSelector,
  SkinsWrapper,
  ThemeSettingsFormHeader,
  ThemeSettingsFormWrapper,
} from "./ThemeSettingsForm.styles";

const ThemeSettingsForm = () => {
  const { handleChangeColorsScheme, themeName } =
    useContext(UserSettingsContext);
  const [selectedSkin, setSelectedSkin] =
    useState<ColorSchemasTypes>(themeName);

  useEffect(() => {
    setSelectedSkin(themeName);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeName]);
  return (
    <ThemeSettingsFormWrapper>
      <ThemeSettingsFormHeader>Wybierz skórkę</ThemeSettingsFormHeader>
      <SkinsWrapper>
        <SkinSelector
          isSelected={selectedSkin === "light" ? true : false}
          onClick={() => setSelectedSkin("light")}
          image={LightThemeImage}
        />
        <SkinSelector
          isSelected={selectedSkin === "dark" ? true : false}
          onClick={() => setSelectedSkin("dark")}
          image={NightThemeImage}
        />
        <SkinSelector
          isSelected={selectedSkin === "pink" ? true : false}
          image={PinkThemeImage}
          onClick={() => setSelectedSkin("pink")}
        />
      </SkinsWrapper>
      <FormButtonOk onClick={() => handleChangeColorsScheme(selectedSkin)}>
        Zmień
      </FormButtonOk>
    </ThemeSettingsFormWrapper>
  );
};

export default ThemeSettingsForm;
