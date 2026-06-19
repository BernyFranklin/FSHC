import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth, type Role } from "./AuthContext";

type Props = { allow: Role[] };

export default function ProtectedRoute({ allow }: Props) {
  const { role } = useAuth();
  const location = useLocation();

  if (!role) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
  if (!allow.includes(role)) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}
