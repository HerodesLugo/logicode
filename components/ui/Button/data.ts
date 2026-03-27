import type { Variant, Size } from "./types";

export const variantClasses: Record<Variant, string> = {
  primary:   "bg-accent text-white dark:text-[#101010] hover:opacity-90",
  secondary: "bg-btn-secondary text-white hover:opacity-90",
  ghost:     "bg-transparent border border-border text-heading hover:opacity-80",
  dark:      "bg-btn-dark text-white hover:opacity-90",
};

export const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm rounded-xl",
  md: "px-8 py-4 text-sm rounded-[20px]",
  lg: "px-10 py-5 text-sm rounded-[20px]",
};

export const baseClasses =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-150 cursor-pointer select-none";
