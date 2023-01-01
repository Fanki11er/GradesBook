import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Navigation from "../../../Molecules/Navigation/Navigation";
import UserProvider from "../../../Providers/UserProvider";
import UserSettingsProvider from "../../../Providers/UserSettingsProvider";
import { routes } from "../../../Routes/routes";
import { AuthenticationTemplateWrapper } from "./AuthenticationTemplate.styles";

const AuthenticatedTemplate = () => {
  const { getTokenFromStorage } = useAuth();
  const { login } = routes;
  return getTokenFromStorage() ? (
    <AuthenticationTemplateWrapper>
      <UserProvider>
        <UserSettingsProvider>
          <Navigation />
          <Outlet />
        </UserSettingsProvider>
      </UserProvider>
    </AuthenticationTemplateWrapper>
  ) : (
    <Navigate to={login} />
  );
};

export default AuthenticatedTemplate;
