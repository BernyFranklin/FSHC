import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Role = "player" | "board";

type AuthState = {
  role: Role | null;
  login: (role: Role) => void;
  logout: () => void;
};

const STORAGE_KEY = "fshc.role";
const AuthContext = createContext<AuthState | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role | null>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "player" || stored === "board" ? stored : null;
  });

  useEffect(() => {
    if (role) localStorage.setItem(STORAGE_KEY, role);
    else localStorage.removeItem(STORAGE_KEY);
  }, [role]);

  const value = useMemo<AuthState>(
    () => ({
      role,
      login: (r) => setRole(r),
      logout: () => setRole(null),
    }),
    [role]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
