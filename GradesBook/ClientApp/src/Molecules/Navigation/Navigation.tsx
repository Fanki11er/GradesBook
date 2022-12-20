import { ButtonLogOut } from "../../Atoms/Buttons/Buttons";
import {
  LogoImg,
  NameImg,
  NavigationText,
  NavigationWrapper,
  RoleAndTextNavigationWrapper,
  RoleImg,
} from "./Navigation.styles";
import ImgLogo from "../../Assets/Images/Logo.svg";
import ImgStudent from "../../Assets/Images/Student.png";
//import ImgTeacher from "../../Assets/Images/Teacher.png";
import ImgName from "../../Assets/Images/User.png";

const Navigation = () => {
  return (
    <NavigationWrapper>
      <LogoImg src={ImgLogo} alt="ImgLogo" />
      <RoleAndTextNavigationWrapper>
        <NameImg src={ImgName} />
        <NavigationText>Krzysztof Dziedzic</NavigationText>
        <RoleImg src={ImgStudent} alt="ImgStudent" />
        <NavigationText>Uczeń</NavigationText>
      </RoleAndTextNavigationWrapper>

      <ButtonLogOut>Wyloguj</ButtonLogOut>
    </NavigationWrapper>
  );
};

export default Navigation;
