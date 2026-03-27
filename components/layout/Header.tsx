"use client";

import { useState } from "react";
import Image from "next/image";
import { HEADER_LOGO_LIGHT, HEADER_LOGO_DARK } from "@/lib/assets";
import Link from "next/link";

const logoLightUrl = HEADER_LOGO_LIGHT;
const logoDarkUrl = HEADER_LOGO_DARK;

const navLinks = ["Platform", "Solutions", "Threat Intelligence", "Company"];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  return (
    <>
      <header className="absolute md:sticky top-0 z-50 w-full">
        {/* ── Top bar: logo + search + CTAs ─────────────────── */}
        <div className="border-b border-transparent md:border-border md:bg-[linear-gradient(to_right,var(--header-top-from),var(--header-top-to))]">
          <div className="section-container flex h-[92px] items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Image
                src={logoLightUrl}
                alt="Logicode"
                width={175}
                height={40}
                priority
                unoptimized
                className="h-10 w-auto object-contain dark:hidden"
              />
              <Image
                src={logoDarkUrl}
                alt="Logicode"
                width={175}
                height={40}
                priority
                unoptimized
                className="h-10 w-auto object-contain hidden dark:block"
              />
            </Link>

            {/* CTAs (Desktop) */}
            <div className="hidden md:flex items-center gap-4 ml-auto">
              {/* Search */}
              <div className="flex items-center gap-2 bg-search-bg px-4 py-3 rounded-[20px] w-52 lg:w-72">
                <svg
                  className="w-4 h-4 text-body-muted opacity-50 shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <circle
                    cx="7"
                    cy="7"
                    r="5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M11 11l3 3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-sm text-body-muted opacity-50">
                  Search...
                </span>
              </div>

              {/* Login */}
              <button className="flex items-center gap-2 bg-btn-secondary text-white px-8 py-4 rounded-[20px] text-sm font-medium hover:opacity-90 transition-colors">
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <circle
                    cx="8"
                    cy="5"
                    r="3"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                Login
              </button>

              {/* Request Demo */}
              <button className="flex items-center gap-2 bg-accent text-white dark:text-gray-950 px-8 py-4 rounded-[20px] text-sm font-medium hover:opacity-90 transition-colors">
                Request Demo
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Language */}
              <button
                onClick={() => setIsLanguageModalOpen(true)}
                className="hidden lg:flex items-center gap-2 bg-btn-dark text-white px-6 py-4 rounded-[20px] text-sm font-medium hover:opacity-90 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                >
                  <path
                    d="M0.666504 2.66667H9.99984M5.33317 0.666668V2.66667M7.99984 2.66667C7.11095 6.22222 5.11095 8.66667 1.99984 10M3.33317 5.33333C4.22206 7.11111 5.55539 8.44445 7.33317 9.33333M7.99984 14L11.3332 6.66667L14.6665 14M13.7332 12H8.93317"
                    stroke="currentColor"
                    stroke-width="1.33333"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Language
                <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex md:hidden items-center justify-center w-12 h-12 rounded-full bg-[rgba(40,_240,_106,_0.08)] dark:bg-[#0a1a12]  dark:border-[#162e22] hover:opacity-80 transition-colors ml-auto shrink-0"
              aria-label="Open menu"
            >
              <svg
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ── Bottom bar: navigation ─────────────────────────── */}
        <nav className="hidden md:block bg-header-nav-bg">
          <div className="section-container">
            <ul className="flex items-center justify-center gap-9 h-[62px]">
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-nav-link text-sm font-medium hover:text-heading transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* ── Mobile Menu Sidebar ─────────────────────────────── */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-100 bg-[#f4f7f5] dark:bg-[#0c121b] text-heading dark:text-white flex flex-col overscroll-contain overflow-y-auto">
          {/* Header of mobile menu */}
          <div className="flex items-center justify-center h-[92px] px-6 relative shrink-0">
            {/* Logo centered */}
            <Image
              src={logoLightUrl}
              alt="Logicode"
              width={175}
              height={40}
              priority
              unoptimized
              className="h-10 w-auto object-contain dark:hidden"
            />
            <Image
              src={logoDarkUrl}
              alt="Logicode"
              width={175}
              height={40}
              priority
              unoptimized
              className="h-10 w-auto object-contain hidden dark:block"
            />
            {/* Close button absolute right */}
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute right-6 p-2 text-accent hover:opacity-80"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M6 18L18 6M6 6l12 12"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-col px-6 py-6 gap-8 flex-1">
            {/* Search */}
            <div className="flex items-center gap-3 bg-[rgba(0,0,0,0.05)] dark:bg-[#131b25] border border-transparent dark:border-[#1e2a38] px-4 py-4 rounded-xl">
              <svg
                className="w-5 h-5 text-gray-500 shrink-0"
                viewBox="0 0 16 16"
                fill="none"
              >
                <circle
                  cx="7"
                  cy="7"
                  r="5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M11 11l3 3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent border-none outline-none text-[15px] text-heading dark:text-white placeholder:text-gray-500 w-full"
              />
            </div>

            {/* Links */}
            <nav className="flex flex-col gap-8 mt-4">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-body dark:text-gray-300 text-[15px] font-medium hover:text-heading dark:hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* CTAs at bottom */}
          <div className="px-6 py-8 pb-10 shrink-0 flex items-center gap-3 mt-auto">
            <button className="flex-1 flex items-center justify-center gap-2 bg-[#101010] dark:bg-[#2a2c2d] text-white py-[14px] rounded-xl text-sm font-medium hover:opacity-90 transition-colors">
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <circle
                  cx="8"
                  cy="5"
                  r="3"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M2 14c0-3.314 2.686-6 6-6s6 2.686 6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Login
            </button>
            <button className="flex-[1.2] flex items-center justify-center gap-2 bg-accent text-white dark:text-[#081b10] py-[14px] rounded-xl text-sm font-bold hover:opacity-90 transition-colors">
              Request Demo
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => setIsLanguageModalOpen(true)}
              className="flex items-center justify-center w-[52px] h-[48px] rounded-xl bg-[#101010] dark:bg-[#2a2c2d] text-white hover:opacity-90 transition-colors shrink-0"
              aria-label="Language selector"
            >
              <svg
                className="w-5 h-5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 17h6.498"
                />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* ── Language Modal ───────────────────────────────────── */}
      {isLanguageModalOpen && (
        <div className="fixed inset-0 z-110 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-[#f4f7f5] dark:bg-[#0c121b] border border-transparent dark:border-[#1e2a38] w-full max-w-sm rounded-[24px] overflow-hidden flex flex-col p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-heading dark:text-white text-lg font-bold">
                Select Language
              </h3>
              <button
                onClick={() => setIsLanguageModalOpen(false)}
                className="text-accent hover:opacity-80 transition-opacity"
              >
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>

            <div className="flex flex-col gap-6">
              <button
                onClick={() => setIsLanguageModalOpen(false)}
                className="text-left text-body dark:text-gray-300 hover:text-heading dark:hover:text-white transition-colors text-[16px] font-medium"
              >
                Spanish
              </button>
              <button
                onClick={() => setIsLanguageModalOpen(false)}
                className="text-left text-body dark:text-gray-300 hover:text-heading dark:hover:text-white transition-colors text-[16px] font-medium"
              >
                English
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
