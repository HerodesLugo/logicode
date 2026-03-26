import { type ReactNode } from "react";

type BadgeVariant = "green" | "mint" | "brand-outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  green:
    "bg-[var(--brand-tag-bg)] text-[var(--gray-950)]",
  mint:
    "bg-brand-mint text-gray-950",
  "brand-outline":
    "bg-[var(--brand-tag-bg)] border border-brand/20 text-brand",
};

export function Badge({
  children,
  variant = "green",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
