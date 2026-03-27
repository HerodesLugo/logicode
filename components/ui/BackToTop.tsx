"use client";

import { useEffect, useState } from "react";
import { ArrowUpIcon } from "@/components/icons";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility();

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-32 right-16 max-md:bottom-16 max-md:right-8  z-50 w-[47px] h-[47px] rounded-full bg-accent flex items-center justify-center shadow-[0px_4px_24px_rgba(0,0,0,0.4)] cursor-pointer transition-all duration-300 hover:opacity-90 ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <ArrowUpIcon className="w-6 h-6 text-white dark:text-gray-950" />
    </button>
  );
}
