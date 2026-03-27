import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { FooterBrand } from "./FooterBrand";
import { navColumns, legalLinks } from "./data";

export function Footer() {
  return (
    <footer className="w-full bg-footer-bg border-t border-footer-border">
      <div className="section-container py-20 flex flex-col gap-20">
        {/* ── Main columns ── */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          <FooterBrand />

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

        {/* ── Bottom bar ── */}
        <div className="border-t border-footer-border pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <span className="text-footer-link text-sm">
            © 2025 Logicode Technologies, Inc. All rights reserved.
          </span>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {legalLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-footer-link text-sm hover:text-heading transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="mt-2 sm:mt-0">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
