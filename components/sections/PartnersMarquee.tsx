import {
  PARTNER_LOGO_1,
  PARTNER_LOGO_CSIRT,
  PARTNER_LOGO_FIRST,
  PARTNER_LOGO_TF_CSIRT,
  PARTNER_LOGO_5,
  PARTNER_LOGO_RED_SOC,
  PARTNER_LOGO_EGC,
} from "@/lib/assets";

const partnerLogos = [
  { src: PARTNER_LOGO_1, alt: "Partner 1", width: 82 },
  { src: PARTNER_LOGO_CSIRT, alt: "CSIRT.es", width: 82 },
  { src: PARTNER_LOGO_FIRST, alt: "FIRST", width: 82 },
  { src: PARTNER_LOGO_TF_CSIRT, alt: "TF-CSIRT", width: 82 },
  { src: PARTNER_LOGO_5, alt: "Partner 5", width: 82 },
  { src: PARTNER_LOGO_RED_SOC, alt: "Red Nacional de SOC", width: 82 },
  { src: PARTNER_LOGO_EGC, alt: "EGC group", width: 169 },
];

export function PartnersMarquee() {
  /* Duplicate the set 3× so there's always enough content visible for the marquee */
  const marqueeLogos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="w-full overflow-hidden py-10 md:py-24 bg-brand-light-bg">
      <div className="section-container">
        {/* Mobile Grid Layout */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-12 items-center justify-items-center md:hidden">
          {partnerLogos.slice(0, 6).map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-[36px] sm:h-[42px] object-contain dark:opacity-100 opacity-70 grayscale dark:brightness-0 dark:invert"
              style={{ width: logo.width }}
            />
          ))}
          {/* EGC logo centered at the bottom on mobile */}
          <div className="col-span-2 sm:col-span-3 flex justify-center pt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={partnerLogos[6].src}
              alt={partnerLogos[6].alt}
              className="h-[36px] sm:h-[42px] object-contain dark:opacity-100 opacity-70 grayscale dark:brightness-0 dark:invert"
              style={{ width: partnerLogos[6].width }}
            />
          </div>
        </div>

        {/* Desktop Marquee Layout */}
        <div className="max-md:!hidden md:block marquee-track">
          {marqueeLogos.map((logo, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={logo.src}
              alt={logo.alt}
              className="h-[47px] object-contain mx-6 md:mx-[100px] shrink-0 dark:opacity-100 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 dark:brightness-0 dark:invert transition-all duration-300"
              style={{ width: logo.width }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
