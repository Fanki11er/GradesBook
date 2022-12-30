import { useEffect, useState } from "react";
import { FormButtonOk } from "../../Atoms/Buttons/Buttons";
import { ColorSchemasTypes } from "../../GlobalStyles/theme";
import LightThemeImage from "../../Assets/Images/LightTheme.svg";

import {
  SkinSelector,
  SkinsWrapper,
  ThemeSettingsFormHeader,
  ThemeSettingsFormWrapper,
} from "./ThemeSettingsForm.styles";
import useColorScheme from "../../Hooks/useColorScheme";
import useUser from "../../Hooks/useUser";

const ThemeSettingsForm = () => {
  const { handleChangeColorsScheme, themeName } = useColorScheme();
  const [selectedSkin, setSelectedSkin] =
    useState<ColorSchemasTypes>(themeName);
  const { user } = useUser();
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
          image={LightThemeImage}
        />
        <SkinSelector isSelected={false} image={LightThemeImage} />
      </SkinsWrapper>
      <FormButtonOk
        onClick={() => handleChangeColorsScheme(selectedSkin, user!.id)}
      >
        Zmień
      </FormButtonOk>
    </ThemeSettingsFormWrapper>
  );
};

export default ThemeSettingsForm;
