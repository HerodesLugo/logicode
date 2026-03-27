"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon } from "@/components/icons";
import { useIsMounted } from "@/lib/hooks/useIsMounted";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useIsMounted();

  // Render a sized placeholder until hydrated to avoid layout shift
  if (!mounted) {
    return <div className="w-[42px] h-[42px] rounded-full bg-footer-social-bg" />;
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
