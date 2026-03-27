import { Badge } from "@/components/ui/Badge";
import { WHY_CARD_IMG_1, WHY_CARD_IMG_2, WHY_CARD_IMG_3 } from "@/lib/assets";

const cardImg1 = WHY_CARD_IMG_1;
const cardImg2 = WHY_CARD_IMG_2;
const cardImg3 = WHY_CARD_IMG_3;

type FeatureCard = {
  image: string;
  title: string;
  description: string;
  capabilities: string[];
};

const cards: FeatureCard[] = [
  {
    image: cardImg1,
    title: "AI-driven link analysis",
    description:
      "Identify subtle, incomplete, and ambiguous indicators across extensive datasets to reveal critical connections that traditional methods often overlook.",
    capabilities: [
      "Bayesian algorithms for reliable connection scoring",
      "Intelligent identity and artifact grouping",
      "Transparent and verifiable evidence assessment",
    ],
  },
  {
    image: cardImg2,
    title: "Integrated investigative graph database",
    description:
      "Visualize users, devices, applications, files, digital wallets, and infrastructure within a unified graph that maintains clarity even at enterprise scale.",
    capabilities: [
      "Cross-platform entity resolution",
      "Advanced timeline and path reconstruction",
      "Ready-to-use case exports for reporting",
    ],
  },
  {
    image: cardImg3,
    title: "Enhanced team collaboration",
    description:
      "Equip SOC, DFIR, and threat intelligence teams with a collaborative environment that includes contextual evidence, confidence metrics, and reproducible analytical processes.",
    capabilities: [
      "Auditable analyst decision-making",
      "Role-based case collaboration features",
      "Expedited transition from initial assessment to in-depth analysis",
    ],
  },
];

export function WhyCyberscoutSection() {
  return (
    <section className="w-full bg-footer-bg py-20 lg:py-[84px] overflow-hidden">
      <div className="section-container flex flex-col gap-10">
        {/* ── Section header ──────────────────────────────── */}
        <div className="flex flex-col gap-4 max-w-[760px]">
          <span className="text-accent text-sm font-medium">Why Logicode</span>
          <h2 className="text-heading text-3xl lg:text-[32px] font-bold leading-tight">
            The leading cybersecurity workspace that transforms fragmented
            evidence into connected, actionable intelligence.
          </h2>
          <p className="text-body text-sm leading-relaxed max-w-[616px]">
            Transition from raw data to analyst-ready insights with graph-based
            investigation tools designed for complex scenarios, large datasets,
            and stringent evidentiary standards.
          </p>
        </div>

        {/* ── Feature cards (Carousel on Mobile) ──────────── */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-6 px-6 md:mx-0 md:px-0">
          {cards.map((card) => (
            <div
              key={card.title}
              className="snap-center shrink-0 w-[85vw] md:w-auto flex flex-col rounded-[20px] overflow-hidden bg-card-bg-muted backdrop-blur-[15px]"
            >
              {/* Image */}
              <div className="h-[230px] md:h-[272px] overflow-hidden shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-5 px-6 md:px-8 py-6 pb-8 flex-1">
                <div>
                  <h3 className="text-heading text-lg font-bold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-body text-[13px] md:text-xs leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <span className="text-heading text-sm font-bold">
                    Core Capabilities
                  </span>
                  <div className="flex flex-col gap-2">
                    {card.capabilities.map((cap) => (
                      <Badge key={cap} variant="green">
                        {cap}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Dots (Mobile only) */}
        <div className="flex md:hidden justify-center gap-2 -mt-4">
          {cards.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full ${i === 0 ? "w-8 bg-accent" : "w-4 bg-accent/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
