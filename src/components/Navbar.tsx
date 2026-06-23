import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

export default function Navbar() {
  const { role, logout } = useAuth();

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${
      isActive
        ? "bg-brand-secondary text-brand-white"
        : "text-brand-tertiary hover:bg-brand-secondary/80 hover:text-brand-white"
    }`;

  return (
    <nav className="hidden bg-brand-primary text-brand-white md:block">
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
              className="ml-2 px-3 py-2 rounded-md text-sm bg-brand-secondary text-brand-white hover:bg-brand-secondary/90"
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
