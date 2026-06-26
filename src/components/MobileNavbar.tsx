import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, BOOSTER_CTA } from "./navLinks";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  // Placeholder handler until real routes/actions are wired in.
  const handleNavClick = (label: string) => {
    console.log(`Mobile nav clicked: ${label}`);
    setOpen(false);
  };

  return (
    <nav className="bg-brand-primary text-brand-white lg:hidden">
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

      {/* Slide-down menu panel */}
      <div
        className={`overflow-hidden bg-brand-primaryLight transition-all duration-300 ease-in-out ${
          open ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-4 py-2">
          {NAV_LINKS.map((label) => (
            <li key={label}>
              <button
                type="button"
                onClick={() => handleNavClick(label)}
                className="w-full rounded-md px-2 py-3 text-center text-base font-medium text-brand-tertiary transition-colors hover:bg-brand-secondary/80 hover:text-brand-white"
              >
                {label}
              </button>
            </li>
          ))}
          <li className="pt-2 pb-1">
            <button
              type="button"
              onClick={() => handleNavClick(BOOSTER_CTA)}
              className="w-full rounded-md bg-brand-secondary px-2 py-3 text-center text-base font-bold text-brand-white transition-colors hover:bg-brand-secondary/90"
            >
              {BOOSTER_CTA}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
