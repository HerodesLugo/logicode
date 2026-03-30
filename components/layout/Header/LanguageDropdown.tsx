"use client";

import { useState, useRef, useEffect } from "react";
import { LanguageGlobeIcon, ChevronDownIcon } from "@/components/icons";

export function LanguageDropdown() {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative hidden  lg:block" ref={dropdownRef}>
      <button
        onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
        className={`flex items-center gap-2 px-6 py-4 rounded-[1.25rem] text-sm font-medium transition-all ${
          isLanguageDropdownOpen
            ? "bg-gray-850 dark:bg-gray-950 text-white"
            : "bg-gray-950 dark:bg-gray-850 text-white hover:opacity-90"
        }`}
      >
        <LanguageGlobeIcon className="w-4 h-4" />
        Language
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform duration-300 ${
            isLanguageDropdownOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isLanguageDropdownOpen && (
        <div className="absolute top-[calc(100%+8px)] right-0 w-full  rounded-[1.25rem] p-2 bg-[#2A2A2A] dark:bg-[#1A1A1A] text-white shadow-2xl flex flex-col z-50 overflow-hidden border border-white/5">
          <button
            className="text-left px-5 py-3.5 rounded-[16px] text-[15px] font-medium text-gray-500 hover:text-white hover:bg-white/5 transition-colors"
            onClick={() => setIsLanguageDropdownOpen(false)}
          >
            Spanish
          </button>
          <button
            className="text-left px-5 py-3.5 rounded-[16px] text-[15px] font-medium text-white hover:bg-white/5 transition-colors"
            onClick={() => setIsLanguageDropdownOpen(false)}
          >
            English
          </button>
        </div>
      )}
    </div>
  );
}
