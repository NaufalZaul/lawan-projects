import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute({ state }) {
  return state !== null ? <Outlet /> : <Navigate to="/" state={{ defaultUrl: 'homepage' }} replace />;
}
