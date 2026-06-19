import { useNavigate, useLocation } from "react-router-dom";
import { useAuth, type Role } from "../auth/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as { from?: string } | null)?.from ?? "/";

  function pick(role: Role) {
    login(role);
    navigate(from, { replace: true });
  }

  return (
    <section className="max-w-md mx-auto bg-brand-white rounded-lg shadow p-6 space-y-4">
      <h1 className="text-2xl font-bold text-brand-primary">Log in</h1>
      <p className="text-sm text-brand-primary/70">
        Stub auth — pick a role to continue.
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => pick("player")}
          className="flex-1 rounded-md bg-brand-primary text-brand-white py-2 hover:bg-brand-primary/90"
        >
          Player
        </button>
        <button
          onClick={() => pick("board")}
          className="flex-1 rounded-md bg-brand-secondary text-brand-white py-2 hover:bg-brand-secondary/90"
        >
          Board
        </button>
      </div>
    </section>
  );
}
