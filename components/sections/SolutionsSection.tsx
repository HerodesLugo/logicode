"use client";

import Image from "next/image";
import { SOLUTIONS_GARBO_LOGO } from "@/lib/assets";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

const garboLogo = SOLUTIONS_GARBO_LOGO;

type Solution = {
  logo: string;
  description: string;
};

const solutions: Solution[] = [
  {
    logo: garboLogo,
    description: "It is the first European high-performance ARM-on-ARM mobile virtualization platform. It allows the creation of thousands of virtual devices with full control for critical security, cyber intelligence, and defense tasks.",
  },
  {
    logo: garboLogo,
    description: "It is the first European high-performance ARM-on-ARM mobile virtualization platform. It allows the creation of thousands of virtual devices with full control for critical security, cyber intelligence, and defense tasks.",
  },
  {
    logo: garboLogo,
    description: "It is the first European high-performance ARM-on-ARM mobile virtualization platform. It allows the creation of thousands of virtual devices with full control for critical security, cyber intelligence, and defense tasks.",
  },
];

export function SolutionsSection() {
  return (
    <section className="w-full bg-brand-light-bg py-10 lg:py-14 overflow-hidden">
      <div className="section-container flex flex-col gap-8">
        {/* ── Section header ──────────────────────────────── */}
        <div className="flex flex-col gap-2">
          <span className="text-accent text-sm font-medium">
            Investigation workflow
          </span>
          <h2 className="text-heading text-[32px] font-bold">
            Cybersecurity Solutions
          </h2>
        </div>

        {/* ── Carousel ────────────────────────────────────── */}
        <div className="relative w-full">
          {/* Left arrow (hidden mobile) */}
          <button
            className="absolute -left-6 lg:-left-16 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center hover:opacity-70 transition-colors z-10"
            aria-label="Previous"
          >
            <ChevronLeftIcon className="w-8 h-8 text-accent" />
          </button>

          {/* Cards container - Snap carousel mobile, scrollable container */}
          <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6 lg:mx-0 lg:px-0 lg:overflow-visible">
            {solutions.map((sol, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-[88%] sm:w-[400px] lg:w-[367px] flex flex-col rounded-[25px] overflow-hidden bg-card-bg transition-opacity duration-300"
              >
                {/* Logo area */}
                <div className="p-10 flex items-center justify-center min-h-[160px]">
                  <Image
                    src={sol.logo}
                    alt="Garbo Logo"
                    width={169}
                    height={56}
                    unoptimized
                    className="h-[56px] w-auto object-contain dark:brightness-0 dark:invert transition-all duration-300"
                  />
                </div>
                {/* Description */}
                <div className="px-10 pb-10 flex-1">
                  <p className="text-body dark:text-white text-[14px] max-md:text-xs leading-relaxed text-center opacity-90">
                    {sol.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right arrow (hidden mobile) */}
          <button
            className="absolute -right-6 lg:-right-16 top-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center hover:opacity-70 transition-colors z-10"
            aria-label="Next"
          >
            <ChevronRightIcon className="w-8 h-8 text-accent" />
          </button>
        </div>
      </div>
    </section>
  );
}
