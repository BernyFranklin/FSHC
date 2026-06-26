import { NAV_LINKS, BOOSTER_CTA } from "./navLinks";

export default function Navbar() {
  // Placeholder handler until real routes/actions are wired in.
  const handleNavClick = (label: string) => {
    console.log(`Mobile nav clicked: ${label}`);
  };

  return (
    <nav className="hidden bg-brand-primary text-brand-white lg:block">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Left: placeholder logo square + league line */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 shrink-0 rounded bg-brand-tertiary" />
          <span className="whitespace-nowrap text-base font-bold tracking-wide text-brand-white">
            ACHA Men's Division 3 Independent
          </span>
        </div>

        {/* Right: nav links + Booster Club CTA */}
        <div className="flex items-center gap-2">
          {NAV_LINKS.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => handleNavClick(label)}
              className="rounded-md px-3 py-2 text-sm font-medium text-brand-tertiary transition-colors hover:bg-brand-secondary/80 hover:text-brand-white"
            >
              {label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNavClick(BOOSTER_CTA)}
            className="whitespace-nowrap rounded-md bg-brand-secondary px-3 py-2 text-sm font-bold text-brand-white transition-colors hover:bg-brand-secondary/90"
          >
            {BOOSTER_CTA}
          </button>
        </div>
      </div>
    </nav>
  );
}
