"use client";

import { useState } from "react";

const garboLogo =
  "https://www.figma.com/api/mcp/asset/ca7533bc-510a-4857-90d4-1bf2112bc570";

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
        <div className="relative flex items-center gap-6">
          {/* Left arrow */}
          <button
            onClick={() =>
              setCurrent((p) => (p - 1 + solutions.length) % solutions.length)
            }
            className="flex-shrink-0 w-12 h-12 rounded-full bg-card-bg flex items-center justify-center hover:opacity-80 transition-colors"
            aria-label="Previous"
          >
            <svg className="w-6 h-6 text-body-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Card */}
          <div className="w-[367px] flex flex-col rounded-xl overflow-hidden">
            {/* Logo area */}
            <div className="bg-card-bg rounded-t-xl p-8 flex items-center justify-center min-h-[122px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sol.logo}
                alt=""
                className="h-[58px] w-auto object-contain"
              />
            </div>
            {/* Description */}
            <div className="bg-card-bg-muted rounded-b-xl px-7 py-8">
              <p className="text-body text-xs leading-relaxed text-center">
                {sol.description}
              </p>
            </div>
          </div>

          {/* Right arrow */}
          <button
            onClick={() =>
              setCurrent((p) => (p + 1) % solutions.length)
            }
            className="flex-shrink-0 w-12 h-12 rounded-full bg-card-bg flex items-center justify-center hover:opacity-80 transition-colors"
            aria-label="Next"
          >
            <svg className="w-6 h-6 text-body-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
