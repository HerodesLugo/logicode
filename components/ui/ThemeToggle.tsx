"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@/components/icons";

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
        <SunIcon className="w-[18px] h-[18px] text-accent" />
      ) : (
        <MoonIcon className="w-[18px] h-[18px] text-accent" />
      )}
    </button>
  );
}
