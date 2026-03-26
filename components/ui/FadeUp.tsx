"use client";

import { useRef, useEffect, useState, type ReactNode } from "react";

interface FadeUpProps {
  children: ReactNode;
  /** Delay in ms before animation starts (stagger support) */
  delay?: number;
  /** How much of the element must be visible to trigger (0-1) */
  threshold?: number;
  className?: string;
}

export function FadeUp({
  children,
  delay = 0,
  threshold = 0.15,
  className = "",
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
