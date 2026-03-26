const services = [
  {
    name: "Incidents",
    icon: (
      <svg className="w-[70px] h-[70px] text-brand" viewBox="0 0 70 70" fill="none" strokeWidth="2" stroke="currentColor">
        <path d="M35 15L58 55H12L35 15Z" strokeLinejoin="round" />
        <line x1="35" y1="30" x2="35" y2="42" strokeLinecap="round" />
        <circle cx="35" cy="48" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Notices\nand Alerts",
    icon: (
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
    icon: (
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
    icon: (
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
    icon: (
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
    icon: (
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
    icon: (
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
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-4 lg:gap-6">
          {services.map((svc) => (
            <button
              key={svc.name}
              className="bg-white rounded-[20px] p-7 flex flex-col items-center justify-center gap-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              {svc.icon}
              <span className="text-gray-950 text-sm text-center whitespace-pre-line leading-tight">
                {svc.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
