import { type ReactNode } from "react";

type BadgeVariant = "green" | "mint" | "brand-outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  green:
    "bg-tag-bg text-tag-text",
  mint:
    "bg-brand-mint text-tag-text",
  "brand-outline":
    "bg-tag-bg border border-accent/20 text-accent",
};

export function Badge({
  children,
  variant = "green",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex dark:text-green-400 items-center max-w-fit px-3 py-1.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
