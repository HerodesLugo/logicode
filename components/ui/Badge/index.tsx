import { variantClasses, baseClasses } from "./data";
import type { BadgeProps } from "./types";

export function Badge({
  children,
  variant = "green",
  className = "",
}: BadgeProps) {
  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
