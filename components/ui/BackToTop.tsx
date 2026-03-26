"use client";

export function BackToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-20 right-6 z-50 w-[47px] h-[47px] rounded-full bg-accent flex items-center justify-center shadow-[0px_4px_24px_rgba(0,0,0,0.4)] cursor-pointer transition-all duration-300 hover:opacity-90"
    >
      <svg
        className="w-6 h-6 text-white dark:text-gray-950"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
