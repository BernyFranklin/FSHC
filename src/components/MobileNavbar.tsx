import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-brand-primary text-brand-white md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Left: placeholder logo square + club name */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 shrink-0 rounded bg-brand-tertiary" />
          <span className="whitespace-nowrap text-base font-bold tracking-wide text-brand-white">
            Fresno State Hockey Club
          </span>
        </div>

        {/* Right: animated hamburger / close toggle */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="relative h-6 w-6 shrink-0 text-brand-white"
        >
          <Menu
            className={`absolute inset-0 transition-all duration-300 ${
              open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
            }`}
          />
          <X
            className={`absolute inset-0 transition-all duration-300 ${
              open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
            }`}
          />
        </button>
      </div>
    </nav>
  );
}
