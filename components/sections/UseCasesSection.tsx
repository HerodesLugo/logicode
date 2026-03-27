import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";

type UseCase = {
  title: string;
  description: string;
  tags: string[];
};

const useCases: UseCase[] = [
  {
    title: "Digital forensics and incident response",
    description:
      "Accelerate scoping, identify attacker infrastructure, correlate compromised identities and produce cleaner post-incident narratives with less manual reconciliation.",
    tags: ["Compromise mapping", "Lateral movement tracing", "Evidence packaging"],
  },
  {
    title: "National security and law enforcement",
    description:
      "Analyze complex networks of communications, identities, financial activity and devices while preserving chain-of-reasoning for high-scrutiny investigations.",
    tags: ["Entity fusion", "Attribution support", "Investigative timelines"],
  },
  {
    title: "Financial crime and fraud operations",
    description:
      "Connect accounts, mule networks, transaction patterns and device fingerprints to expose suspicious ecosystems earlier and with stronger contextual evidence.",
    tags: ["Fraud ring analysis", "AML investigations", "Risk prioritization"],
  },
  {
    title: "Threat intelligence programs",
    description:
      "Continuously enrich threat collections with relationship context, actor overlap and infrastructure pivots to improve prioritization for security teams and executives.",
    tags: ["Threat actor graphing", "Campaign correlation", "Strategic reporting"],
  },
];

const arrowIcon = <ArrowRightIcon className="w-4 h-4" />;

export function UseCasesSection() {
  return (
    <section className="w-full bg-brand-light-bg pb-10 lg:pb-14 pt-20 lg:pt-[84px]">
      <div className="section-container flex flex-col gap-10">
        {/* ── Section header ──────────────────────────────── */}
        <div className="flex flex-col gap-4">
          <span className="text-accent text-sm font-medium">Use cases</span>
          <h2 className="text-heading text-3xl lg:text-[32px] font-bold leading-tight max-w-[760px]">
            Purpose-built for high-stakes cyber investigations.
          </h2>
        </div>

        {/* ── 2×2 grid ────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {useCases.map((uc) => (
            <div
              key={uc.title}
              className="bg-card-bg rounded-[25px] p-8 flex flex-col gap-4 min-h-[220px]"
            >
              <h3 className="text-heading text-lg font-bold">{uc.title}</h3>
              <p className="text-body text-sm leading-relaxed flex-1">
                {uc.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {uc.tags.map((tag) => (
                  <Badge key={tag} variant="mint">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA ─────────────────────────────────────────── */}
        <div className="flex justify-center w-full">
          <Button variant="primary" icon={arrowIcon} className="w-full md:w-auto justify-center">
            Case Studies
          </Button>
        </div>
      </div>
    </section>
  );
}
