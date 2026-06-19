import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { role, logout } = useAuth();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive ? "bg-slate-900 text-white" : "text-slate-200 hover:bg-slate-700"
    }`;

  return (
    <nav className="bg-slate-800 text-white">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-lg font-bold tracking-wide">
          FSHC
        </Link>
        <div className="flex items-center gap-2">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          {(role === "player" || role === "board") && (
            <NavLink to="/team" className={linkClass}>
              Team
            </NavLink>
          )}
          {role === "board" && (
            <NavLink to="/management" className={linkClass}>
              Management
            </NavLink>
          )}
          {role ? (
            <button
              onClick={logout}
              className="ml-2 px-3 py-2 rounded-md text-sm bg-slate-700 hover:bg-slate-600"
            >
              Log out ({role})
            </button>
          ) : (
            <NavLink to="/login" className={linkClass}>
              Log in
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
}
