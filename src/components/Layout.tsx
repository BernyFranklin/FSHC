import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

export default function Layout() {
  return (
    <div className="min-h-screen bg-brand-tertiary/40 text-brand-primary">
      <Navbar />
      <MobileNavbar />
      <main className="mx-auto max-w-6xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
