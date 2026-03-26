import { Badge } from "@/components/ui/Badge";

const cardImg1 =
  "https://www.figma.com/api/mcp/asset/13f8a07b-7a5a-4cf0-9c21-4095d548327a";
const cardImg2 =
  "https://www.figma.com/api/mcp/asset/f7ec8790-aeb2-441c-be33-185780a1b0f7";
const cardImg3 =
  "https://www.figma.com/api/mcp/asset/646e650c-9845-46cf-aeb7-fabeaa6b7844";

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
    <section className="w-full bg-white py-20 lg:py-[84px]">
      <div className="section-container flex flex-col gap-10">
        {/* ── Section header ──────────────────────────────── */}
        <div className="flex flex-col gap-4 max-w-[760px]">
          <span className="text-brand text-sm font-medium">Why Cyberscout?</span>
          <h2 className="text-gray-950 text-3xl lg:text-[32px] font-bold leading-tight">
            The leading cybersecurity workspace that transforms fragmented
            evidence into connected, actionable intelligence.
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed max-w-[616px]">
            Transition from raw data to analyst-ready insights with graph-based
            investigation tools designed for complex scenarios, large datasets,
            and stringent evidentiary standards.
          </p>
        </div>

        {/* ── Feature cards ───────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10">
          {cards.map((card) => (
            <div
              key={card.title}
              className="flex flex-col rounded-[20px] overflow-hidden bg-gray-50 backdrop-blur-[15px]"
            >
              {/* Image */}
              <div className="h-[272px] overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-4 px-8 py-6 pb-8">
                <div>
                  <h3 className="text-gray-950 text-lg font-bold mb-2">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 text-xs leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-gray-950 text-sm font-bold">
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
      </div>
    </section>
  );
}
