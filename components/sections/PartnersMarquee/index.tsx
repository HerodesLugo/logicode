import Image from "next/image";
import { partnerLogos } from "./data";

export function PartnersMarquee() {
  /* Duplicate the set 3× so there's always enough content visible */
  const marqueeLogos = [
    ...partnerLogos,
    ...partnerLogos,
    ...partnerLogos,
  ];

  return (
    <section className="w-full overflow-hidden py-10 md:py-24 bg-brand-light-bg">
      <div className="section-container">
        {/* Mobile — static grid */}
        <div className="grid grid-cols-3 gap-x-8 gap-y-12 items-center justify-items-center md:hidden">
          {partnerLogos.slice(0, 6).map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={42}
              unoptimized
              className="h-[36px] sm:h-[42px] w-auto object-contain dark:opacity-100 opacity-70 grayscale dark:brightness-0 dark:invert"
            />
          ))}
          {/* EGC logo centered at the bottom */}
          <div className="col-span-2 sm:col-span-3 flex justify-center pt-4">
            <Image
              src={partnerLogos[6].src}
              alt={partnerLogos[6].alt}
              width={partnerLogos[6].width}
              height={42}
              unoptimized
              className="h-[36px] sm:h-[42px] w-auto object-contain dark:opacity-100 opacity-70 grayscale dark:brightness-0 dark:invert"
            />
          </div>
        </div>

        {/* Desktop — scrolling marquee */}
        <div className="max-md:hidden! md:block marquee-track">
          {marqueeLogos.map((logo, i) => (
            <Image
              key={i}
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={47}
              unoptimized
              className="h-[47px] w-auto object-contain mx-6 md:mx-[100px] shrink-0 dark:opacity-100 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 dark:brightness-0 dark:invert transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
