import { Routes, Route } from "react-router-dom";
import { routes } from "./Routes/routes";
import ClassesView from "./View/ClassesView/ClassesView";
import ClassSettings from "./View/ClassSettings/ClassSettings";
import LoginView from "./View/LoginView/LoginView";
import LandingPage from "./View/LandingPage/LandingPage";
import ParentView from "./View/ParentView/ParentView";
import ProgramsView from "./View/ProgramsView/ProgramsView";
import RegistrationView from "./View/RegistrationView/RegistrationView";
import Template from "./View/Template/Template";
import AuthenticatedTemplate from "./View/Template/AuthenticatedTemplate/AuthenticatedTemplate";

const App = () => {
  const { baseRoute, classes, program, setting, register, login, parentView } =
    routes;
  return (
    <Routes>
      <Route element={<Template />}>
        <Route index path={baseRoute} element={<LandingPage />} />
        <Route path={login} element={<LoginView />} />
        <Route path={register} element={<RegistrationView />} />
        <Route element={<AuthenticatedTemplate />}>
          <Route path={classes} element={<ClassesView />} />
          <Route path={program} element={<ProgramsView />} />
          <Route path={setting} element={<ClassSettings />} />
          <Route path={parentView} element={<ParentView />} />
        </Route>
        <Route path={"*"} element={<LandingPage />} />
      </Route>
    </Routes>
  );
};

export default App;
