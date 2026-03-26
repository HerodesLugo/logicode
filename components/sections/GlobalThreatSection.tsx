import { GLOBE_IMG } from "@/lib/assets";

const globeImg = GLOBE_IMG;

export function GlobalThreatSection() {
  return (
    <section className="relative w-full bg-brand-light-bg pt-28 overflow-hidden">
      <div className="section-container relative flex flex-col items-center justify-center min-h-[700px] lg:min-h-[786px] py-20">
        {/* ── Globe background ──────────────────────────────── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {/* Globe image — replace with final asset */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={globeImg}
            alt=""
            className="w-[1028px] max-w-none h-[783px] object-cover mix-blend-luminosity opacity-30"
          />
        </div>

        {/* ── Centered text content ─────────────────────────── */}
        <div className="relative z-10 flex flex-col items-center text-center gap-4 max-w-[800px]">
          <span className="text-accent text-sm font-medium">Global Reach</span>
          <h2 className="text-heading text-[32px] font-bold leading-tight">
            Global cyber threat intelligence.
          </h2>
          <p className="text-body text-sm leading-relaxed max-w-[609px]">
            Continuous monitoring and event correlation across regions, providing
            real-time support to SOC, DFIR, and intelligence teams operating in
            distributed environments.
          </p>
        </div>

        {/* ── Pin + label + quote (below center) ────────────── */}
        <div className="relative z-10 flex flex-col items-center mt-8 gap-4">
          {/* Dashed line + pin */}
          <div className="flex flex-col items-center">
            <div className="w-px h-16 border-l border-dashed border-accent" />
            <div className="w-2 h-2 rounded-full bg-accent" />
          </div>

          {/* Location badge */}
          <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-accent bg-tag-bg text-accent text-xs font-medium">
            United States of America
          </span>

          {/* Quote */}
          <blockquote className="text-body text-base leading-relaxed max-w-[400px] text-left mt-4">
            &ldquo;Logicode tools are like a powerful lens, clarifying the
            cybersecurity landscape.&rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
