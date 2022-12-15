import { Routes, Route, Outlet } from "react-router-dom";
import { routes } from "./Routes/routes";
import ClassesView from "./View/ClassesView/ClassesView";
import ClassSettings from "./View/ClassSettings/ClassSettings";
import LoginView from "./View/LoginView/LoginView";
import LandingPage from "./View/LandingPage/LandingPage";
import ParentView from "./View/ParentView/ParentView";
import ProgramsView from "./View/ProgramsView/ProgramsView";
import RegistrationView from "./View/RegistrationView/RegistrationView";
import Template from "./View/Template/Template";

const App = () => {
  const {
    baseRoute,
    classes,
    program,
    setting,
    register,
    login,
    template,
    parentView,
  } = routes;
  return (
    <Routes>
      <Route
        element={
          <div>
            <Outlet />
          </div>
        }
      >
        <Route index path={baseRoute} element={<LandingPage />} />
        <Route path={classes} element={<ClassesView />} />
        <Route path={program} element={<ProgramsView />} />
        <Route path={setting} element={<ClassSettings />} />
        <Route path={register} element={<RegistrationView />} />
        <Route path={login} element={<LoginView />} />
        <Route path={template} element={<Template />} />
        <Route path={parentView} element={<ParentView />} />

        <Route path={"*"} element={<LandingPage />} />
      </Route>
    </Routes>
  );
};

export default App;
