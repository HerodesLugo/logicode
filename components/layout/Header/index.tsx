"use client";

import { useState } from "react";
import Link from "next/link";
import {
  SearchIcon,
  UserIcon,
  ArrowRightIcon,
  LanguageGlobeIcon,
  ChevronDownIcon,
  MenuIcon,
} from "@/components/icons";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { LanguageModal } from "./LanguageModal";
import { navLinks } from "./data";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);

  return (
    <>
      <header className="absolute md:fixed top-0 z-50 w-full">
        {/* ── Top bar: logo + search + CTAs ── */}
        <div className="border-b border-transparent md:border-border md:bg-[linear-gradient(to_right,var(--header-top-from),var(--header-top-to))]">
          <div className="section-container flex h-[92px] items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="shrink-0">
              <Logo />
            </Link>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-4 ml-auto">
              <div className="flex items-center gap-2 bg-search-bg px-4 py-3 rounded-[20px] w-52 lg:w-72">
                <SearchIcon className="w-4 h-4 text-body-muted opacity-50 shrink-0" />
                <span className="text-sm text-body-muted opacity-50">
                  Search...
                </span>
              </div>

              <Button variant="secondary" iconStart={<UserIcon className="w-4 h-4" />}>
                Login
              </Button>

              <Button variant="primary" icon={<ArrowRightIcon className="w-4 h-4" />} className="shrink-0">
                Request Demo
              </Button>

              <button
                onClick={() => setIsLanguageModalOpen(true)}
                className="hidden lg:flex items-center gap-2 bg-btn-dark text-white px-6 py-4 rounded-[20px] text-sm font-medium hover:opacity-90 transition-colors"
              >
                <LanguageGlobeIcon className="w-4 h-4" />
                Language
                <ChevronDownIcon className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="flex md:hidden items-center justify-center w-12 h-12 rounded-full bg-[rgba(40,_240,_106,_0.08)] dark:bg-[#0a1a12] dark:border-[#162e22] hover:opacity-80 transition-colors ml-auto shrink-0"
              aria-label="Open menu"
            >
              <MenuIcon className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>

        {/* ── Desktop nav bar ── */}
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

      {isMobileMenuOpen && (
        <MobileMenu
          onClose={() => setIsMobileMenuOpen(false)}
          onOpenLanguage={() => {
            setIsMobileMenuOpen(false);
            setIsLanguageModalOpen(true);
          }}
        />
      )}

      {isLanguageModalOpen && (
        <LanguageModal onClose={() => setIsLanguageModalOpen(false)} />
      )}
    </>
  );
}
