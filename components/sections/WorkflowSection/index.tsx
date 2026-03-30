import { FadeUp } from "@/components/ui/FadeUp";
import { steps, metrics } from "./data";

export function WorkflowSection() {
  return (
    <section className="w-full bg-brand-light-bg py-20 lg:py-[84px]">
      <FadeUp>
        <div className="section-container flex flex-col gap-10">
        {/* ── Section header ── */}
        <div className="flex flex-col gap-4 max-w-[760px]">
          <span className="text-accent text-sm font-medium">
            Cybersecurity Workflow
          </span>
          <h2 className="text-heading text-3xl lg:text-[32px] font-bold">
            From threat intel to incident resolution.
          </h2>
          <p className="text-body text-sm leading-relaxed max-w-[740px]">
            Cyberscout streamlines complex investigations into repeatable
            processes that align teams, maintain analytical rigor, and
            accelerate incident response.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left card: 4-step process */}
          <div className="bg-card-bg rounded-[20px] p-6 md:p-8 flex flex-col gap-10 md:gap-[60px]">
            <div className="flex flex-col gap-3">
              <h3 className="font-display font-semibold text-lg md:text-xl text-accent">
                Threat landscape assessment
              </h3>
              <p className="text-body-muted text-[13px] md:text-xs">
                Vulnerability prioritization and mitigation
              </p>
            </div>

            <div className="flex h-full justify-between flex-col gap-8">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="grid grid-cols-[48px_1fr] md:grid-cols-[64px_1fr] gap-4 md:gap-[18px]"
                >
                  <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-[14px] md:rounded-[20px] dark:bg-tag-bg bg-[rgba(40,_240,_106,_0.10)] flex items-center justify-center">
                    <span className="text-accent text-xl md:text-2xl font-normal">
                      {step.number}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5 md:gap-2 pt-0.5 md:pt-1">
                    <span className="text-heading text-base md:text-lg font-bold leading-none">
                      {step.title}
                    </span>
                    <p className="text-body text-[13px] md:text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right card: metrics */}
          <div className="bg-card-bg rounded-[20px] p-6 md:p-8 flex flex-col justify-between gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="font-display font-semibold text-xl text-accent">
                Operational impact
              </h3>
              <p className="text-body-muted text-xs leading-relaxed">
                Built for organizations that require clarity under pressure:
                SOC teams, incident responders, threat hunters, and security
                analysts.
              </p>
            </div>

            <div className="flex flex-col gap-8">
              {metrics.map((metric) => (
                <div key={metric.value} className="flex flex-col gap-1">
                  <span className="text-accent text-5xl font-normal leading-none">
                    {metric.value}
                  </span>
                  <span className="font-display font-semibold text-sm text-heading mt-2">
                    {metric.label}
                  </span>
                  <p className="text-body text-xs leading-relaxed max-w-[520px]">
                    {metric.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </FadeUp>
    </section>
  );
}
