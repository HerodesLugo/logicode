import type { BadgeVariant } from "./types";

export const variantClasses: Record<BadgeVariant, string> = {
  "green":         "bg-tag-bg text-tag-text",
  "mint":          "bg-brand-mint text-tag-text",
  "brand-outline": "bg-tag-bg border border-accent/20 text-accent",
};

export const baseClasses =
  "inline-flex dark:text-green-400 items-center max-w-fit px-3 py-1.5 rounded-full text-xs font-medium";
