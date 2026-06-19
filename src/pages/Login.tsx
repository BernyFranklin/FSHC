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
    <section className="max-w-md mx-auto bg-white rounded-lg shadow p-6 space-y-4">
      <h1 className="text-2xl font-bold">Log in</h1>
      <p className="text-sm text-slate-600">
        Stub auth — pick a role to continue.
      </p>
      <div className="flex gap-3">
        <button
          onClick={() => pick("player")}
          className="flex-1 rounded-md bg-slate-800 text-white py-2 hover:bg-slate-700"
        >
          Player
        </button>
        <button
          onClick={() => pick("board")}
          className="flex-1 rounded-md bg-emerald-700 text-white py-2 hover:bg-emerald-600"
        >
          Board
        </button>
      </div>
    </section>
  );
}
