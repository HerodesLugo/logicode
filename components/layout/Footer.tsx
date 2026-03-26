import Image from "next/image";

const logoUrl =
  "https://www.figma.com/api/mcp/asset/521726db-20ef-4179-b228-a7ea6c971457";
const moonIcon =
  "https://www.figma.com/api/mcp/asset/d7a5eff6-6110-48da-a04e-5d202e05a173";

type NavColumn = {
  heading: string;
  links: string[];
};

const navColumns: NavColumn[] = [
  {
    heading: "Platform",
    links: ["Link Analysis", "Data Integration", "Case Management", "Security & Compliance", "Pricing"],
  },
  {
    heading: "Solutions",
    links: ["Digital Forensics (DFIR)", "Law Enforcement", "Financial Crime", "Threat Intelligence", "Public Sector"],
  },
  {
    heading: "Resources",
    links: ["Documentation", "API Reference", "Blog", "Case Studies", "Help Center"],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "Partners", "Contact", "Press"],
  },
];

export function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-50">
      <div className="section-container py-20 flex flex-col gap-20">
        {/* ── Main columns ────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Brand column */}
          <div className="flex flex-col gap-6 max-w-[260px]">
            <Image
              src={logoUrl}
              alt="Logicode"
              width={175}
              height={40}
              unoptimized
              className="h-10 w-auto object-contain"
            />
            <p className="text-gray-700 text-sm leading-relaxed">
              Next-generation digital forensics and probabilistic link analysis
              platform for enterprise cyber teams, law enforcement, and
              intelligence agencies.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              {/* Twitter/X */}
              <a
                href="#"
                aria-label="Twitter"
                className="w-10 h-10 rounded-md flex items-center justify-center bg-[rgba(32,166,76,0.2)] border border-[rgba(32,166,76,0.2)] hover:bg-[rgba(32,166,76,0.3)] transition-colors"
              >
                <svg className="w-5 h-5 text-brand" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.5 3.75 11.25 10.83 18.33 18.33h-3.33L10 12.5l-5 5.83H1.67L8.33 10 1.67 3.75h3.33L10 9.17l5-5.42z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-md flex items-center justify-center bg-[rgba(32,166,76,0.2)] border border-[rgba(32,166,76,0.2)] hover:bg-[rgba(32,166,76,0.3)] transition-colors"
              >
                <svg className="w-5 h-5 text-brand" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M5 7h-3v10h3V7zM3.5 5.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5zM18 17h-3v-4.5c0-1.38-.56-2.5-2-2.5s-2 1.12-2 2.5V17H8V7h3v1.5c.57-.9 1.7-1.5 3-1.5 2.2 0 4 1.8 4 4.5V17z" />
                </svg>
              </a>
              {/* GitHub */}
              <a
                href="#"
                aria-label="GitHub"
                className="w-10 h-10 rounded-md flex items-center justify-center bg-[rgba(32,166,76,0.2)] border border-[rgba(32,166,76,0.2)] hover:bg-[rgba(32,166,76,0.3)] transition-colors"
              >
                <svg className="w-5 h-5 text-brand" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M10 2a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38v-1.32c-2.23.48-2.7-1.07-2.7-1.07-.37-.93-.9-1.18-.9-1.18-.73-.5.06-.49.06-.49.81.06 1.24.83 1.24.83.72 1.24 1.9.88 2.36.67.07-.52.28-.88.51-1.08-1.78-.2-3.65-.89-3.65-3.96 0-.87.31-1.59.83-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82A7.66 7.66 0 0 1 10 7.3a7.65 7.65 0 0 1 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.52.56.83 1.28.83 2.15 0 3.08-1.87 3.76-3.66 3.96.29.25.54.74.54 1.49v2.21c0 .21.15.46.55.38A8 8 0 0 0 10 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {navColumns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-5">
                <span className="text-[#16211b] text-sm font-medium">
                  {col.heading}
                </span>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-600 text-sm hover:text-gray-950 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ──────────────────────────────────── */}
        <div className="border-t border-gray-50 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="text-gray-600 text-sm">
            © 2025 Logicode Technologies, Inc. All rights reserved.
          </span>

          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 text-sm hover:text-gray-950 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-950 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-600 text-sm hover:text-gray-950 transition-colors">
              Cookie Settings
            </a>
            {/* Theme toggle */}
            <button
              aria-label="Toggle theme"
              className="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-[rgba(32,166,76,0.08)] hover:bg-[rgba(32,166,76,0.15)] transition-colors"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={moonIcon} alt="" className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
