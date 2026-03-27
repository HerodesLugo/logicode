import Image from "next/image";
import { FOOTER_LOGO_LIGHT, FOOTER_LOGO_DARK } from "@/lib/assets";
import { socialLinks } from "./data";

/** Brand column: logo, tagline, and social icons. */
export function FooterBrand() {
  return (
    <div className="flex flex-col gap-6 max-w-[260px]">
      {/* Dual logo — CSS-driven light/dark swap */}
      <Image
        src={FOOTER_LOGO_LIGHT}
        alt="Logicode"
        width={175}
        height={40}
        unoptimized
        className="h-16 w-auto dark:hidden"
      />
      <Image
        src={FOOTER_LOGO_DARK}
        alt="Logicode"
        width={175}
        height={40}
        unoptimized
        className="h-16 w-auto hidden dark:block"
      />

      <p className="text-footer-link text-sm leading-relaxed">
        Next-generation digital forensics and probabilistic link analysis
        platform for enterprise cyber teams, law enforcement, and intelligence
        agencies.
      </p>

      {/* Social links */}
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
  );
}
