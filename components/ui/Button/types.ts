import { type ButtonHTMLAttributes } from "react";

export type Variant = "primary" | "secondary" | "ghost" | "dark";
export type Size = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  /** Icon rendered after the label (right side) */
  icon?: React.ReactNode;
  /** Icon rendered before the label (left side) */
  iconStart?: React.ReactNode;
}
