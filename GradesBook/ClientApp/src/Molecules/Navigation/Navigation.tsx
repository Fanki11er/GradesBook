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
import { routes } from "../../Routes/routes";
import useUser from "../../Hooks/useUser";

const Navigation = () => {
  const { baseRoute } = routes;
  const navigate = useNavigate();
  const { handleDeleteAuth } = useAuth();
  //const user = getUserFromStorage();
  const { user } = useUser();

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
          navigate(baseRoute);
        }}
      >
        Wyloguj
      </ButtonLogOut>
    </NavigationWrapper>
  );
};

export default Navigation;
