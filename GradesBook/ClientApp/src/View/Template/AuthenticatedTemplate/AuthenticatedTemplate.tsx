import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Navigation from "../../../Molecules/Navigation/Navigation";
import { routes } from "../../../Routes/routes";
import { AuthenticationTemplateWrapper } from "./AuthenticationTemplate.styles";

const AuthenticatedTemplate = () => {
  const { getTokenFromStorage } = useAuth();
  const { login } = routes;
  return getTokenFromStorage() ? (
    <AuthenticationTemplateWrapper>
      <Navigation />
      <Outlet />
    </AuthenticationTemplateWrapper>
  ) : (
    <Navigate to={login} />
  );
};

export default AuthenticatedTemplate;
