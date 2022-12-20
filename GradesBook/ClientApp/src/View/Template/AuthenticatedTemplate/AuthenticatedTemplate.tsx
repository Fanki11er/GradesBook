import { Navigate, Outlet } from "react-router-dom";
import useUser from "../../../Hooks/useUser";
import Navigation from "../../../Molecules/Navigation/Navigation";
import { routes } from "../../../Routes/routes";
import { AuthenticationTemplateWrapper } from "./AuthenticationTemplate.styles";

const AuthenticatedTemplate = () => {
  const { user } = useUser();
  const { baseRoute } = routes;
  return user && user.token ? (
    <AuthenticationTemplateWrapper>
      <Navigation />
      <Outlet />
    </AuthenticationTemplateWrapper>
  ) : (
    <Navigate to={baseRoute} />
  );
};

export default AuthenticatedTemplate;
