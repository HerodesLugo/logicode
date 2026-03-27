import { type ReactNode } from "react";

export type BadgeVariant = "green" | "mint" | "brand-outline";

export interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}
