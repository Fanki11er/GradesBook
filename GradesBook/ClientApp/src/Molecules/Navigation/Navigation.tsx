import { ButtonLogOut } from "../../Atoms/Buttons/Buttons";
import {
  NavigationImg,
  NavigationText,
  NavigationWrapper,
} from "./Navigation.styles";

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationImg />
      <NavigationImg />
      <NavigationText>Krzysztof</NavigationText>
      <NavigationImg />
      <NavigationText>(Nauczyciel)</NavigationText>
      <ButtonLogOut>Wyloguj</ButtonLogOut>
    </NavigationWrapper>
  );
};

export default Navigation;
