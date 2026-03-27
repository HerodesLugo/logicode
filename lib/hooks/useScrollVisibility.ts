import { useEffect, useState } from "react";

/**
 * Returns `true` when the page has been scrolled past `threshold` pixels.
 * Uses a passive scroll listener for performance.
 */
export function useScrollVisibility(threshold = 400): boolean {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const check = () => setIsVisible(window.scrollY > threshold);
    window.addEventListener("scroll", check, { passive: true });
    check(); // run once on mount to reflect current scroll position
    return () => window.removeEventListener("scroll", check);
  }, [threshold]);

  return isVisible;
}
