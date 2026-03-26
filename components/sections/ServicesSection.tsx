import Image from "next/image";
import {
  SERVICE_ICON_DARK_INCIDENTS,
  SERVICE_ICON_DARK_NOTICES,
  SERVICE_ICON_DARK_SOLUTIONS,
  SERVICE_ICON_DARK_REPORTS,
  SERVICE_ICON_DARK_GUIDES,
  SERVICE_ICON_DARK_NATIONAL_SOC,
  SERVICE_ICON_DARK_TRAINING,
} from "@/lib/assets";

const services = [
  {
    name: "Incidents",
    darkIcon: SERVICE_ICON_DARK_INCIDENTS,
    lightIcon: (
      <svg className="w-[70px] h-[70px] text-brand" viewBox="0 0 70 70" fill="none" strokeWidth="2" stroke="currentColor">
        <path d="M35 15L58 55H12L35 15Z" strokeLinejoin="round" />
        <line x1="35" y1="30" x2="35" y2="42" strokeLinecap="round" />
        <circle cx="35" cy="48" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Notices\nand Alerts",
    darkIcon: SERVICE_ICON_DARK_NOTICES,
    lightIcon: (
      <svg className="w-[70px] h-[70px] text-brand" viewBox="0 0 70 70" fill="none" strokeWidth="2" stroke="currentColor">
        <rect x="16" y="12" width="38" height="46" rx="4" />
        <circle cx="35" cy="35" r="6" />
        <line x1="35" y1="29" x2="35" y2="35" strokeLinecap="round" />
        <circle cx="35" cy="39" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Solutions",
    darkIcon: SERVICE_ICON_DARK_SOLUTIONS,
    lightIcon: (
      <svg className="w-[70px] h-[70px] text-brand" viewBox="0 0 70 70" fill="none" strokeWidth="2" stroke="currentColor">
        <path d="M35 18v8M35 44v8M18 35h8M44 35h8" strokeLinecap="round" />
        <path d="M23 23l6 6M41 41l6 6M47 23l-6 6M29 41l-6 6" strokeLinecap="round" />
        <circle cx="35" cy="35" r="5" />
        <circle cx="35" cy="35" r="16" />
      </svg>
    ),
  },
  {
    name: "Reports",
    darkIcon: SERVICE_ICON_DARK_REPORTS,
    lightIcon: (
      <svg className="w-[70px] h-[70px] text-brand" viewBox="0 0 70 70" fill="none" strokeWidth="2" stroke="currentColor">
        <path d="M14 18h32l10 10v24a4 4 0 01-4 4H18a4 4 0 01-4-4V18z" />
        <path d="M46 18v10h10" />
        <line x1="22" y1="34" x2="40" y2="34" strokeLinecap="round" />
        <line x1="22" y1="42" x2="36" y2="42" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Guides",
    darkIcon: SERVICE_ICON_DARK_GUIDES,
    lightIcon: (
      <svg className="w-[70px] h-[70px] text-brand" viewBox="0 0 70 70" fill="none" strokeWidth="2" stroke="currentColor">
        <rect x="18" y="14" width="34" height="42" rx="3" />
        <line x1="26" y1="26" x2="44" y2="26" strokeLinecap="round" />
        <line x1="26" y1="34" x2="44" y2="34" strokeLinecap="round" />
        <line x1="26" y1="42" x2="36" y2="42" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "National SOC\nNetwork",
    darkIcon: SERVICE_ICON_DARK_NATIONAL_SOC,
    lightIcon: (
      <svg className="w-[70px] h-[70px] text-brand" viewBox="0 0 70 70" fill="none" strokeWidth="2" stroke="currentColor">
        <circle cx="35" cy="35" r="18" />
        <circle cx="35" cy="35" r="6" />
        <path d="M35 17v12M35 41v12M17 35h12M41 35h12" strokeLinecap="round" />
        <circle cx="35" cy="26" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Training",
    darkIcon: SERVICE_ICON_DARK_TRAINING,
    lightIcon: (
      <svg className="w-[70px] h-[70px] text-brand" viewBox="0 0 70 70" fill="none" strokeWidth="2" stroke="currentColor">
        <circle cx="35" cy="35" r="18" />
        <circle cx="35" cy="35" r="12" />
        <circle cx="35" cy="35" r="6" />
        <circle cx="35" cy="35" r="2" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <section className="w-full bg-brand-light-bg py-6 lg:py-10">
      <div className="section-container">
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 lg:gap-6 pb-6 pt-2 sm:grid sm:grid-cols-4 md:grid-cols-7 sm:overflow-visible sm:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6 sm:mx-0 sm:px-0">
          {services.map((svc) => (
            <button
              key={svc.name}
              className="snap-center shrink-0 w-[150px] sm:w-auto bg-card-bg dark:bg-[linear-gradient(221deg,#263f64_8%,#0d1521_92%)] rounded-[20px] p-6 lg:p-7 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* Light mode: inline SVG icon */}
              <span className="dark:hidden">{svc.lightIcon}</span>
              {/* Dark mode: Figma asset icon */}
              <Image
                src={svc.darkIcon}
                alt={svc.name.replace("\n", " ")}
                width={70}
                height={70}
                unoptimized
                className="hidden dark:block w-[70px] h-[70px] object-contain"
              />
              <span className="text-heading text-sm text-center whitespace-pre-line leading-tight">
                {svc.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
