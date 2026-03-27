import { type ReactNode } from "react";

export interface FadeUpProps {
  children: ReactNode;
  /** Delay in ms before the animation starts — useful for staggered sequences */
  delay?: number;
  /** Intersection ratio required to trigger the animation (0–1) */
  threshold?: number;
  className?: string;
}
