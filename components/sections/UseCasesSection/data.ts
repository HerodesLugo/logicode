import type { UseCase } from "./types";

export const useCases: UseCase[] = [
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
