import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import { Layout } from "@/components/layout/Layout";
import { Home } from "@/pages/Home";
import { Login } from "@/pages/Login";
import { useAuth } from "@/state/auth";

function NonAuthedRoute() {
  const { isAuth } = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/" />;
}

function AuthedRoute() {
  const { isAuth } = useAuth();
  return !isAuth ? <Outlet /> : <Navigate to="/" />;
}

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { AppRoutes };
