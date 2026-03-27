import { TwitterXIcon, LinkedInIcon, GitHubIcon } from "@/components/icons";
import type { NavColumn, SocialLink, LegalLink } from "./types";

export const navColumns: NavColumn[] = [
  {
    heading: "Platform",
    links: [
      "Link Analysis",
      "Data Integration",
      "Case Management",
      "Security & Compliance",
      "Pricing",
    ],
  },
  {
    heading: "Solutions",
    links: [
      "Digital Forensics (DFIR)",
      "Law Enforcement",
      "Financial Crime",
      "Threat Intelligence",
      "Public Sector",
    ],
  },
  {
    heading: "Resources",
    links: [
      "Documentation",
      "API Reference",
      "Blog",
      "Case Studies",
      "Help Center",
    ],
  },
  {
    heading: "Company",
    links: ["About Us", "Careers", "Partners", "Contact", "Press"],
  },
];

export const socialLinks: SocialLink[] = [
  { label: "Twitter", icon: TwitterXIcon },
  { label: "LinkedIn", icon: LinkedInIcon },
  { label: "GitHub", icon: GitHubIcon },
];

export const legalLinks: LegalLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookie Settings", href: "#" },
];
