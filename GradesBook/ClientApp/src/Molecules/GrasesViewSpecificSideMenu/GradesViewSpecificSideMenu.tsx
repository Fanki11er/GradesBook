import { useLocation, useNavigate } from "react-router-dom";
import { SideMenuButton } from "../../Atoms/Buttons/Buttons";
import { SpecificOptionsWrapper } from "../../Atoms/SideMenu/SideMenu";

const GradesViewSpecificSideMenu = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <SpecificOptionsWrapper>
      {pathname.match(/\/Grades\/\d/) && (
        <SideMenuButton onClick={() => navigate(-1)}>Powrót</SideMenuButton>
      )}
    </SpecificOptionsWrapper>
  );
};

export default GradesViewSpecificSideMenu;
