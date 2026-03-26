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
  { src: PARTNER_LOGO_1,        alt: "Partner 1",         width: 82  },
  { src: PARTNER_LOGO_CSIRT,    alt: "CSIRT.es",          width: 82  },
  { src: PARTNER_LOGO_FIRST,    alt: "FIRST",             width: 82  },
  { src: PARTNER_LOGO_TF_CSIRT, alt: "TF-CSIRT",         width: 82  },
  { src: PARTNER_LOGO_5,        alt: "Partner 5",         width: 82  },
  { src: PARTNER_LOGO_RED_SOC,  alt: "Red Nacional de SOC", width: 82 },
  { src: PARTNER_LOGO_EGC,      alt: "EGC group",         width: 169 },
];

export function PartnersMarquee() {
  /* Duplicate the set 3× so there's always enough content visible */
  const logos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  return (
    <section className="w-full overflow-hidden py-3 bg-brand-light-bg">
      <div className="marquee-track">
        {logos.map((logo, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={logo.src}
            alt={logo.alt}
            className="h-[47px] object-contain mx-[100px] flex-shrink-0 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            style={{ width: logo.width }}
          />
        ))}
      </div>
    </section>
  );
}
