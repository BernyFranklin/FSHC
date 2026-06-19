import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ProtectedRoute from "./auth/ProtectedRoute";
import Home from "./pages/Home";
import Login from "./pages/Login";
import TeamHome from "./pages/team/TeamHome";
import Todos from "./pages/team/Todos";
import Dues from "./pages/team/Dues";
import Uniforms from "./pages/team/Uniforms";
import ManagementHome from "./pages/management/ManagementHome";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />

        <Route element={<ProtectedRoute allow={["player", "board"]} />}>
          <Route path="team" element={<TeamHome />} />
          <Route path="team/todos" element={<Todos />} />
          <Route path="team/dues" element={<Dues />} />
          <Route path="team/uniforms" element={<Uniforms />} />
        </Route>

        <Route element={<ProtectedRoute allow={["board"]} />}>
          <Route path="management" element={<ManagementHome />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
