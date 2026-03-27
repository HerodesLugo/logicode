import Image from "next/image";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { FOOTER_LOGO_LIGHT, FOOTER_LOGO_DARK } from "@/lib/assets";
import { TwitterXIcon, LinkedInIcon, GitHubIcon } from "@/components/icons";

const logoLightUrl = FOOTER_LOGO_LIGHT;
const logoDarkUrl = FOOTER_LOGO_DARK;

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

const socialLinks = [
  { label: "Twitter", icon: TwitterXIcon },
  { label: "LinkedIn", icon: LinkedInIcon },
  { label: "GitHub", icon: GitHubIcon },
];

export function Footer() {
  return (
    <footer className="w-full bg-footer-bg border-t border-footer-border">
      <div className="section-container py-20 flex flex-col gap-20">
        {/* ── Main columns ────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Brand column */}
          <div className="flex flex-col gap-6 max-w-[260px]">
            {/* Logo — light version hidden in dark, dark version hidden in light */}
            <Image
              src={logoLightUrl}
              alt="Logicode"
              width={175}
              height={40}
              unoptimized
              className="h-16 w-auto  dark:hidden"
            />
            <Image
              src={logoDarkUrl}
              alt="Logicode"
              width={175}
              height={40}
              unoptimized
              className="h-16 w-auto  hidden dark:block"
            />
            <p className="text-footer-link text-sm leading-relaxed">
              Next-generation digital forensics and probabilistic link analysis
              platform for enterprise cyber teams, law enforcement, and
              intelligence agencies.
            </p>
            {/* Social icons */}
            <div className="flex gap-4">
              {socialLinks.map(({ label, icon: Icon }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 rounded-md flex items-center justify-center bg-footer-social-bg border border-footer-social-bdr hover:opacity-80 transition-colors"
                >
                  <Icon className="w-5 h-5 text-accent dark:text-footer-link" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {navColumns.map((col) => (
              <div key={col.heading} className="flex flex-col gap-5">
                <span className="text-footer-heading text-sm font-medium">
                  {col.heading}
                </span>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-footer-link text-sm hover:text-heading transition-colors"
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
        <div className="border-t border-footer-border pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <span className="text-footer-link text-sm">
            © 2025 Logicode Technologies, Inc. All rights reserved.
          </span>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <div className="flex flex-wrap gap-4 sm:gap-6">
              <a href="#" className="text-footer-link text-sm hover:text-heading transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-footer-link text-sm hover:text-heading transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-footer-link text-sm hover:text-heading transition-colors">
                Cookie Settings
              </a>
            </div>
            {/* Theme toggle */}
            <div className="mt-2 sm:mt-0">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
