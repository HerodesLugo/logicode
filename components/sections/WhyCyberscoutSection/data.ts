import { WHY_CARD_IMG_1, WHY_CARD_IMG_2, WHY_CARD_IMG_3 } from "@/lib/assets";
import type { FeatureCard } from "./types";

export const cards: FeatureCard[] = [
  {
    image: WHY_CARD_IMG_1,
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
    image: WHY_CARD_IMG_2,
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
    image: WHY_CARD_IMG_3,
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
