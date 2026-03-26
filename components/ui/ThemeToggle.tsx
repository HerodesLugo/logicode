"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Avoid hydration mismatch — render a placeholder until mounted
  if (!mounted) {
    return (
      <div className="w-[42px] h-[42px] rounded-full bg-footer-social-bg" />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="w-[42px] h-[42px] rounded-full flex items-center justify-center bg-footer-social-bg hover:opacity-80 transition-colors cursor-pointer"
    >
      {isDark ? (
        /* Sun icon — shown in dark mode */
        <svg className="w-[18px] h-[18px] text-accent" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="10" cy="10" r="4" />
          <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.93 4.93l1.41 1.41M13.66 13.66l1.41 1.41M4.93 15.07l1.41-1.41M13.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        /* Moon icon — shown in light mode */
        <svg className="w-[18px] h-[18px] text-accent" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.39 12.39A7.5 7.5 0 1 1 7.61 2.61 5.5 5.5 0 0 0 17.39 12.39z" />
        </svg>
      )}
    </button>
  );
}
