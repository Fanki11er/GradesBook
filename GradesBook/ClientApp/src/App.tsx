import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes/routes";
import ClassesView from "./View/ClassesView/ClassesView";
//import ClassSettings from "./View/ClassSettings/ClassSettings";
import LoginView from "./View/LoginView/LoginView";
import LandingPage from "./View/LandingPage/LandingPage";
import ParentView from "./View/ParentView/ParentView";
import ProgramsView from "./View/ProgramsView/ProgramsView";
import RegistrationView from "./View/RegistrationView/RegistrationView";
import Template from "./View/Template/Template";
import AuthenticatedTemplate from "./View/Template/AuthenticatedTemplate/AuthenticatedTemplate";
import SettingsView from "./View/SettingsView/SettingsView";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles/GlobalStyle";
import { useContext } from "react";
import { UserSettingsContext } from "./Providers/UserSettingsProvider";

const App = () => {
  const { baseRoute, classes, program, setting, register, login, parentView } =
    routes;
  const { theme } = useContext(UserSettingsContext);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route element={<Template />}>
          <Route index path={baseRoute} element={<LandingPage />} />
          <Route path={login} element={<LoginView />} />
          <Route path={register} element={<RegistrationView />} />
          <Route element={<AuthenticatedTemplate />}>
            <Route path={classes} element={<ClassesView />} />
            <Route path={program} element={<ProgramsView />} />
            <Route path={setting} element={<SettingsView />} />
            <Route path={parentView} element={<ParentView />} />
          </Route>
          <Route path={"*"} element={<LandingPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
