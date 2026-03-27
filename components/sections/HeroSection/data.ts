import {
  HERO_SLIDE_1_IMG,
  HERO_SLIDE_2_IMG,
  HERO_SLIDE_3_IMG,
} from "@/lib/assets";
import type { Slide, SlideColors } from "./types";

const lightPalette: SlideColors = {
  tagColor: "#0b0b0b",
  tagBg: "rgba(32,166,76,0.1)",
  headingBoldColor: "#20a64c",
  headingRegularColor: "#101010",
  bodyColor: "#5f7267",
  bg: "#eaf2ec",
  gradientColor: "#eaf2ec",
  primaryBtnBg: "#20a64c",
  primaryBtnColor: "#ffffff",
  secondaryBtnBg: "#2b2b2b",
  secondaryBtnColor: "#ffffff",
  dotActive: "#20a64c",
  dotInactive: "rgba(32,166,76,0.3)",
};

const darkPalette: SlideColors = {
  tagColor: "#28f06a",
  tagBg: "rgba(40,240,106,0.1)",
  headingBoldColor: "#28f06a",
  headingRegularColor: "#e6f9ef",
  bodyColor: "#9aa6a8",
  bg: "#060a0f",
  gradientColor: "#060a0f",
  primaryBtnBg: "#28f06a",
  primaryBtnColor: "#06120a",
  secondaryBtnBg: "#2B2B2B",
  secondaryBtnColor: "#e6f9ef",
  dotActive: "#28f06a",
  dotInactive: "rgba(40,240,106,0.3)",
};

export const slides: Slide[] = [
  {
    id: 0,
    tag: "Next-Gen Digital Forensics",
    headingRegular: "Probabilistic link analysis for",
    headingBold: "modern threats.",
    body: "Uncover hidden relationships across devices, identities, accounts and networks with a forensics platform built for analysts who need evidence-grade clarity at machine speed.",
    primaryBtn: "Start Investigation",
    secondaryBtn: "View Documentation",
    image: HERO_SLIDE_1_IMG,
    lightColors: lightPalette,
    darkColors: darkPalette,
  },
  {
    id: 1,
    tag: "Advanced Digital Forensics",
    headingRegular: "AI-powered link analysis for",
    headingBold: "emerging threats.",
    body: "Reveal complex connections across devices, users, and networks with an AI-driven forensics platform. Cyberscout empowers security teams to detect subtle indicators before they escalate into critical breaches.",
    primaryBtn: "Begin Analysis",
    secondaryBtn: "Read More",
    image: HERO_SLIDE_2_IMG,
    lightColors: lightPalette,
    darkColors: darkPalette,
  },
  {
    id: 2,
    tag: "Universal Data Integration",
    headingRegular: "across cloud and",
    headingBold: "mobile artifacts.",
    body: "Break data silos in seconds. Logicode merges disparate extractions into a single, cohesive timeline, allowing investigators to track suspect activity across every digital touchpoint without manual correlation.",
    primaryBtn: "Start Investigation",
    secondaryBtn: "View Documentation",
    image: HERO_SLIDE_3_IMG,
    lightColors: lightPalette,
    darkColors: darkPalette,
  },
];
