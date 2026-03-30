import Image from "next/image";
import { FadeUp } from "@/components/ui/FadeUp";
import { CTA_BG_IMG } from "@/lib/assets";

export function CTABannerSection() {
  return (
    <section className="w-full bg-brand-light-bg py-10 lg:py-14">
      <FadeUp>
        <div className="section-container">
        <div className="relative rounded-[25px] overflow-hidden min-h-[309px] max-md:h-[617px] max-md:p-5">
          {/* Background image */}
          <Image
            src={CTA_BG_IMG}
            alt=""
            fill
            unoptimized
            sizes="(max-width: 1440px) 100vw, 1440px"
            className="object-cover pointer-events-none"
          />
          <div className="absolute inset-0 bg-[rgba(49,70,73,0.22)]" />

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row h-full justify-between gap-10 lg:gap-6 px-6 py-10 lg:p-11 min-h-[480px] lg:min-h-[309px]">
            {/* Left text */}
            <div className="flex flex-col justify-start gap-4 lg:w-[55%]">
              <span className="text-[#28f06a] text-[13px] md:text-sm font-bold">
                Explore the Platform
              </span>
              <h2 className="text-[#eefff2] text-3xl md:text-[32px] font-bold leading-[1.1] tracking-[-0.02em] max-w-[685px]">
                Uncover threats, accelerate investigations, and produce reliable
                reports.
              </h2>
              <p className="text-[#b4cdd0] text-[13px] md:text-sm leading-relaxed max-w-[636px]">
                Schedule a personalized demo of Cyberscout for your team and
                discover how our platform enhances triage, strengthens
                attribution, and streamlines complex investigations with
                probabilistic link analysis.
              </p>
            </div>

            {/* Right CTAs */}
            <div className="flex flex-col shrink-0 gap-4 mt-auto lg:mt-0 justify-end lg:justify-center w-full lg:w-[40%] md:flex-row lg:flex-col">
              <button className="w-full md:w-auto lg:w-full bg-[#111b2a] text-white px-8 py-4 rounded-[20px] text-sm font-medium hover:bg-[#1a2539] transition-colors">
                Connect with an Expert
              </button>
              <button className="w-full md:w-auto lg:w-full bg-[#28f06a] text-gray-950 px-8 py-4 rounded-[20px] text-sm font-bold hover:bg-[#22d55e] transition-colors">
                Request a Demo
              </button>
            </div>
          </div>
        </div>
        </div>
      </FadeUp>
    </section>
  );
}
