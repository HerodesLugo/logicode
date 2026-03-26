import Image from "next/image";

const logoLightUrl =
  "https://www.figma.com/api/mcp/asset/76caf464-b509-424d-a095-e1d58b8330ba";
const logoDarkUrl =
  "https://www.figma.com/api/mcp/asset/f087081f-cbe1-436b-8bf1-7b6e1f578b29";

const navLinks = ["Platform", "Solutions", "Threat Intelligence", "Company"];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* ── Top bar: logo + search + CTAs ─────────────────── */}
      <div
        className="border-b border-border"
        style={{ background: `linear-gradient(to right, var(--header-top-from), var(--header-top-to))` }}
      >
        <div className="section-container flex h-[92px] items-center justify-between gap-6">
          {/* Logo — light version hidden in dark, dark version hidden in light */}
          <a href="/" className="flex-shrink-0">
            <Image
              src={logoLightUrl}
              alt="Logicode"
              width={175}
              height={40}
              priority
              unoptimized
              className="h-10 w-auto object-contain dark:hidden"
            />
            <Image
              src={logoDarkUrl}
              alt="Logicode"
              width={175}
              height={40}
              priority
              unoptimized
              className="h-10 w-auto object-contain hidden dark:block"
            />
          </a>

          {/* Search + CTAs */}
          <div className="flex items-center gap-4 ml-auto">
            {/* Search — hidden on mobile */}
            <div className="hidden md:flex items-center gap-2 bg-search-bg px-4 py-3 rounded-[20px] w-52 lg:w-72">
              <svg
                className="w-4 h-4 text-body-muted opacity-50 flex-shrink-0"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="text-sm text-body-muted opacity-50">Search...</span>
            </div>

            {/* Login */}
            <button className="hidden sm:flex items-center gap-2 bg-btn-secondary text-white px-8 py-4 rounded-[20px] text-sm font-medium hover:opacity-90 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="5" r="3" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Login
            </button>

            {/* Request Demo */}
            <button className="flex items-center gap-2 bg-accent text-white dark:text-[#101010] px-8 py-4 rounded-[20px] text-sm font-medium hover:opacity-90 transition-colors">
              Request Demo
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Language */}
            <button className="hidden lg:flex items-center gap-2 bg-btn-dark text-white px-6 py-4 rounded-[20px] text-sm font-medium">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" />
                <ellipse cx="8" cy="8" rx="2.5" ry="6" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 8h12" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              Language
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom bar: navigation ─────────────────────────── */}
      <nav className="hidden md:block bg-header-nav-bg">
        <div className="section-container">
          <ul className="flex items-center justify-center gap-9 h-[62px]">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-nav-link text-sm font-medium hover:text-heading transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
