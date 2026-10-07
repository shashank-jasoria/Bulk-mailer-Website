import { Navigate, Outlet } from "react-router-dom";

export default function PublicOnlyRoute({ user, authLoading }) {
  if (authLoading) {
    return null;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
