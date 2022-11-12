import { Routes, Route, Outlet } from "react-router-dom";
import { routes } from "./Routes/routes";
import ClassesView from "./View/ClassesView/ClassesView";
import ClassSettings from "./View/ClassSettings/ClassSettings";
import ParentView from "./View/ParentView/ParentView";
import ProgramsView from "./View/ProgramsView/ProgramsView";

const App = () => {
  const {
    baseRoute,
    loginPage,
    registerPage,
    classes,
    program,
    setting,
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
        <Route index path={baseRoute} element={<div>Landing page</div>} />
        <Route path={classes} element={<ClassesView />} />
        <Route path={program} element={<ProgramsView />} />
        <Route path={setting} element={<ClassSettings />} />
        <Route path={parentView} element={<ParentView />} />
        <Route path={loginPage} element={<div>Login page</div>} />
        <Route path={registerPage} element={<div>RegisterPage</div>} />
        <Route path={"*"} element={<div>LandingPage</div>} />
      </Route>
    </Routes>
  );
};

export default App;
