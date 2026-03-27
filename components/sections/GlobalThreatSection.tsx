"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { GLOBE_IMG, GLOBE_IMG_DARK, GLOBE_DASHED_LINE } from "@/lib/assets";

/* ── Hydration-safe mounted check (same pattern as HeroSection) ── */
const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

export function GlobalThreatSection() {
  const { resolvedTheme } = useTheme();
  const mounted = useIsMounted();

  const isDark = mounted && resolvedTheme === "dark";
  const globeSrc = isDark ? GLOBE_IMG_DARK : GLOBE_IMG;

  return (
    <section className="relative w-full bg-section-bg overflow-hidden pt-16 md:pt-28 transition-colors duration-500">
      {/* Container: Taller on mobile, fixed aspect on desktop */}
      <div className="relative w-full max-w-[1200px] mx-auto min-h-[660px] md:min-h-0 md:aspect-1024/779">
        {/* ── Globe background (fills container) ── */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
            isDark ? "opacity-100" : "opacity-[0.64]"
          }`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={globeSrc}
            alt=""
            className="w-full h-full object-cover md:object-contain"
          />
        </div>

        {/* ── Centered text content ──────── */}
        <div className="absolute inset-x-0 top-[6%] md:top-[9.8%] z-10 flex flex-col items-center text-center gap-3 lg:gap-[22px] px-6">
          <span className="text-accent text-sm lg:text-base font-medium">
            Global Reach
          </span>
          <h2 className="text-heading text-[32px] md:text-[28px] lg:text-[44px] font-bold leading-tight max-w-[80%] md:max-w-none">
            Global cyber threat intelligence.
          </h2>
          <p className="text-body text-sm md:text-sm lg:text-base leading-relaxed max-w-[837px]">
            Continuous monitoring and event correlation across regions, providing
            real-time support to SOC, DFIR, and intelligence teams operating in
            distributed environments.
          </p>
        </div>

        {/* ── Pin marker ───────────────────── */}
        <div className="absolute z-10 w-[12px] h-[12px] md:w-[1.2%] md:h-[1.6%] left-[48%] top-[66.4%] md:left-[40.3%] md:top-[64.6%]">
          <div className="w-full h-full rounded-full bg-accent shadow-[0_0_15px_rgba(40,240,106,0.6)]" />
        </div>

        {/* ── Dashed line from pin to badge ──────────────────────── */}
        <div className="absolute z-10 left-[28%] top-[68%] md:left-[27.5%] md:top-[66.2%] w-[20%] md:w-[12.7%] h-[12%] md:h-[17.5%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={GLOBE_DASHED_LINE}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>

        {/* ── Location badge ───────────────────────────────────────── */}
        <div className="absolute z-10 left-[24%] top-[80%] md:left-[23.8%] md:top-[83.8%] inline-flex items-center px-4 py-1.5 rounded-full border border-accent bg-[rgba(40,240,106,0.12)] text-accent text-xs lg:text-base font-bold">
          SPAIN
        </div>

        {/* ── Quote ─────────────────────────────────────────────── */}
        <blockquote
          className={`absolute z-10 left-6 md:left-[12.3%] bottom-10 md:top-[90.4%] text-sm md:text-sm lg:text-[22px] leading-relaxed max-w-[80%] md:max-w-[55%] ${
            isDark ? "text-white" : "text-body"
          }`}
        >
          &ldquo;Logicode tools are like a powerful lens, clarifying the
          cybersecurity landscape.&rdquo;
        </blockquote>
      </div>
    </section>
  );
}
