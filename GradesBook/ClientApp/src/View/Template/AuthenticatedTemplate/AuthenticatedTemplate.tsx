import { Navigate, Outlet } from "react-router-dom";
import Navigation from "../../../Molecules/Navigation/Navigation";
import { routes } from "../../../Routes/routes";
import { AuthenticationTemplateWrapper } from "./AuthenticationTemplate.styles";

const AuthenticatedTemplate = () => {
  const { baseRoute } = routes;
  return true ? (
    <AuthenticationTemplateWrapper>
      <Navigation />
      <Outlet />
    </AuthenticationTemplateWrapper>
  ) : (
    <Navigate to={baseRoute} />
  );
};

export default AuthenticatedTemplate;
