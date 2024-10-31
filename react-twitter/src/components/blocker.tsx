import { Navigate, Outlet } from "react-router-dom";

export const RequireLogin = () => {
  const userId = localStorage.getItem("userId");
  return userId ? <Outlet /> : <Navigate to={"/"} />;
};

export const AfterLogin = () => {
  const userId = localStorage.getItem("userId");
  return userId ? <Navigate to={"/beranda"} /> : <Outlet />;
};
