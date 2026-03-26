import { CTA_BG_IMG } from "@/lib/assets";

const bgImage = CTA_BG_IMG;

export function CTABannerSection() {
  return (
    <section className="w-full bg-brand-light-bg py-10 lg:py-14">
      <div className="section-container">
        <div className="relative rounded-[25px] overflow-hidden min-h-[309px]">
          {/* ── Background image + overlay ──────────────── */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={bgImage}
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />
          <div className="absolute inset-0 bg-[rgba(49,70,73,0.22)]" />

          {/* ── Content grid ────────────────────────────── */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-6 p-8 lg:p-11 items-center min-h-[309px]">
            {/* Left text */}
            <div className="flex flex-col gap-4">
              <span className="text-[#28f06a] text-sm font-medium">
                Explore the Platform
              </span>
              <h2 className="text-[#eefff2] text-2xl lg:text-[32px] font-bold leading-tight max-w-[685px]">
                Uncover threats, accelerate investigations, and produce reliable
                reports.
              </h2>
              <p className="text-white text-sm leading-relaxed max-w-[636px]">
                Schedule a personalized demo of Cyberscout for your team and
                discover how our platform enhances triage, strengthens
                attribution, and streamlines complex investigations with
                probabilistic link analysis.
              </p>
            </div>

            {/* Right CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-start lg:justify-end w-full">
              <button className="w-full sm:w-auto bg-[#111b2a] text-white px-8 py-4 rounded-[20px] text-sm font-medium hover:bg-[#1a2539] transition-colors">
                Connect with an Expert
              </button>
              <button className="w-full sm:w-auto bg-[#28f06a] text-gray-950 px-8 py-4 rounded-[20px] text-sm font-medium hover:bg-[#22d55e] transition-colors">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
