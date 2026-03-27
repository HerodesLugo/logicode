"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { GLOBE_IMG, GLOBE_IMG_DARK } from "@/lib/assets";
import { useIsMounted } from "@/lib/hooks/useIsMounted";

export function GlobalThreatSection() {
  const { resolvedTheme } = useTheme();
  const mounted = useIsMounted();

  const isDark = mounted && resolvedTheme === "dark";
  const globeSrc = isDark ? GLOBE_IMG_DARK : GLOBE_IMG;

  return (
    <section className="relative w-full bg-section-bg overflow-hidden pt-16 md:pt-28 transition-colors duration-500">
      {/* Container: taller on mobile, fixed aspect ratio on desktop */}
      <div className="relative w-full max-w-[1200px] mx-auto min-h-[660px] md:min-h-0 md:aspect-1024/779">
        {/* ── Globe background ── */}
        <div
          className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${
            isDark ? "opacity-100" : "opacity-[0.64]"
          }`}
        >
          <Image
            src={globeSrc}
            alt=""
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover md:object-contain"
          />
        </div>

        {/* ── Centered text content ── */}
        <div className="absolute inset-x-0 top-[6%] md:top-[9.8%] z-10 flex flex-col items-center text-center gap-3 lg:gap-[22px] px-6">
          <span className="text-accent text-sm lg:text-base font-medium">
            Global Reach
          </span>
          <h2 className="text-heading text-[32px] md:text-[28px] lg:text-[44px] font-bold leading-tight max-w-[80%] md:max-w-none">
            Global cyber threat intelligence.
          </h2>
          <p className="text-body text-sm lg:text-base leading-relaxed max-w-[837px]">
            Continuous monitoring and event correlation across regions, providing
            real-time support to SOC, DFIR, and intelligence teams operating in
            distributed environments.
          </p>
        </div>

        {/* ── Quote ── */}
        <blockquote
          className={`absolute z-10 left-6 md:left-[12.3%] bottom-10 md:top-[90.4%] text-sm lg:text-[22px] leading-relaxed max-w-[80%] md:max-w-[55%] ${
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
