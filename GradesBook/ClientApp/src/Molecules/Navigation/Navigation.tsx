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
import useAuth from "../../Hooks/useAuth";
import { Roles } from "../../Types/Types";
import { useNavigate } from "react-router-dom";
import { endpoints } from "../../Api/Endpoints";

const Navigation = () => {
  const { baseUrl } = endpoints;
  const navigate = useNavigate();
  const { getUserFromStorage, handleDeleteAuth } = useAuth();
  const user = getUserFromStorage();

  const convertRole = (role: Roles) => {
    switch (role) {
      case "Parent": {
        return "Rodzic";
      }
      case "Teacher": {
        return "Nauczyciel";
      }
      case "Student": {
        return "Uczeń";
      }
      default: {
        return "";
      }
    }
  };
  return (
    <NavigationWrapper>
      <LogoImg src={ImgLogo} alt="ImgLogo" />
      <RoleAndTextNavigationWrapper>
        <NameImg src={ImgName} />
        <NavigationText>{user ? user.name : ""}</NavigationText>
        <RoleImg src={ImgStudent} alt="ImgStudent" />
        <NavigationText>{user && convertRole(user.role)}</NavigationText>
      </RoleAndTextNavigationWrapper>

      <ButtonLogOut
        onClick={() => {
          handleDeleteAuth();
          navigate(baseUrl);
        }}
      >
        Wyloguj
      </ButtonLogOut>
    </NavigationWrapper>
  );
};

export default Navigation;
