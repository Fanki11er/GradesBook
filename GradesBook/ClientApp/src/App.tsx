import { Routes, Route, Outlet } from "react-router-dom";
import { routes } from "./Routes/routes";

const App = () => {
  const { baseRoute, loginPage, registerPage } = routes;
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
        <Route path={loginPage} element={<div>Login page</div>} />
        <Route path={registerPage} element={<div>RegisterPage</div>} />
        <Route path={"*"} element={<div>LandingPage</div>} />
      </Route>
    </Routes>
  );
};

export default App;
