"use client";

import { useState } from "react";
import { SOLUTIONS_GARBO_LOGO } from "@/lib/assets";

const garboLogo = SOLUTIONS_GARBO_LOGO;

type Solution = {
  logo: string;
  description: string;
};

const solutions: Solution[] = [
  {
    logo: garboLogo,
    description:
      "It is the first European high-performance ARM-on-ARM mobile virtualization platform. It allows the creation of thousands of virtual devices with full control for critical security, cyber intelligence, and defense tasks.",
  },
];

export function SolutionsSection() {
  const [current, setCurrent] = useState(0);
  const sol = solutions[current];

  return (
    <section className="w-full bg-brand-light-bg py-10 lg:py-14">
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
          {/* Left arrow */}
          <button
            onClick={() =>
              setCurrent((p) => (p - 1 + solutions.length) % solutions.length)
            }
            className="absolute -left-6 md:-left-16 top-1/2 -translate-y-1/2 shrink-0 flex items-center justify-center hover:opacity-70 transition-colors z-10"
            aria-label="Previous"
          >
            <svg className="w-8 h-8 text-accent dark:text-body-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Cards container */}
          <div className="flex gap-6 overflow-hidden w-full">
            {/* Card */}
            <div className="w-[367px] flex flex-col rounded-[20px] overflow-hidden">
              {/* Logo area */}
              <div className="bg-card-bg p-8 flex items-center justify-center min-h-[140px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={sol.logo}
                  alt="Garbo Logo"
                  className="h-[48px] w-auto object-contain dark:brightness-0 dark:invert transition-all duration-300"
                />
              </div>
              {/* Description */}
              <div className="bg-card-bg-muted px-8 py-8 flex-1">
                <p className="text-body text-[13px] leading-[1.6]">
                  {sol.description}
                </p>
              </div>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() =>
              setCurrent((p) => (p + 1) % solutions.length)
            }
            className="absolute -right-6 md:-right-16 top-1/2 -translate-y-1/2 shrink-0 flex items-center justify-center hover:opacity-70 transition-colors z-10"
            aria-label="Next"
          >
            <svg className="w-8 h-8 text-accent dark:text-body-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
