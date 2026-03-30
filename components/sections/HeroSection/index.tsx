"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { HeroArrowIcon, FolderIcon } from "@/components/icons";
import { useIsMounted } from "@/lib/hooks/useIsMounted";
import { slides } from "./data";

export function HeroSection() {
  const [active, setActive] = useState(0);
  const { resolvedTheme } = useTheme();
  const mounted = useIsMounted();

  const next = useCallback(() => setActive((p) => (p + 1) % slides.length), []);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[active];
  // On the server (not mounted), always use lightColors to match SSR output
  const c =
    mounted && resolvedTheme === "dark" ? slide.darkColors : slide.lightColors;

  return (
    <section
      className="relative w-full h-dvh overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: c.bg }}
    >
      {/* ── Slide images + gradient overlay ─────────────── */}
      <div
        className="absolute inset-0 md:left-auto md:right-0 w-full lg:w-[70%] pointer-events-none"
        aria-hidden="true"
      >
        {slides.map((s, i) => (
          <Image
            key={s.id}
            src={s.image}
            alt=""
            fill
            unoptimized
            sizes="(max-width: 1024px) 100vw, 70vw"
            className={`object-cover transition-opacity duration-1000 ease-in-out will-change-[opacity] ${
              i === active
                ? "opacity-40 md:opacity-80 lg:opacity-100"
                : "opacity-0"
            }`}
          />
        ))}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${c.gradientColor} 0%, ${c.gradientColor}00 100%)`,
          }}
        />
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background: `linear-gradient(to right, ${c.gradientColor} 0%, ${c.gradientColor}00 30%)`,
          }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────── */}
      <div className="relative section-container h-full flex flex-col justify-center pt-[92px] md:pt-0">
        <div className="flex flex-col gap-4 md:gap-5 max-w-[565px] mt-4 md:mt-0">
          {/* Tag */}
          <span
            className="inline-flex self-start px-4 py-1.5 rounded-full text-xs font-semibold font-display border border-current bg-[rgba(32,_166,_76,_0.10)]"
            style={{ color: c.tagColor }}
          >
            {slide.tag}
          </span>

          {/* Heading */}
          <div className="flex flex-col -mt-1 md:mt-0">
            <span
              className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-[-0.045em] font-bold md:font-normal text-white md:text-inherit"
              style={{
                color:
                  resolvedTheme === "dark" || !mounted
                    ? undefined
                    : c.headingRegularColor,
              }}
            >
              {slide.headingRegular}
            </span>
            <span
              className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-bold"
              style={{ color: c.headingBoldColor }}
            >
              {slide.headingBold}
            </span>
          </div>

          {/* Body */}
          <p
            className="hidden md:block text-sm leading-relaxed font-normal"
            style={{ color: c.bodyColor }}
          >
            {slide.body}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row flex-wrap w-full gap-4 mt-4 md:mt-2">
            <button
              className="w-full sm:w-auto h-14 justify-center flex flex-row-reverse items-center gap-2 px-8 rounded-[20px] text-sm font-medium transition-opacity hover:opacity-90"
              style={{
                backgroundColor: c.primaryBtnBg,
                color: c.primaryBtnColor,
              }}
            >
              <HeroArrowIcon className="w-4 h-4" />
              {slide.primaryBtn}
            </button>
            <button
              className="w-full sm:w-auto flex-row-reverse px-8 h-14 justify-center items-center gap-2 rounded-[20px] text-sm font-medium transition-opacity hover:opacity-90 flex"
              style={{
                backgroundColor: c.secondaryBtnBg,
                color: c.secondaryBtnColor,
              }}
            >
              {slide.secondaryBtn}
              <FolderIcon className="w-[15px] h-[13px]" />
            </button>
          </div>
        </div>
      </div>

      {/* ── Slide dots ──────────────────────────────────── */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1">
        {slides.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
            className="h-[6px] rounded-[3px] transition-all duration-300"
            style={{
              width: 55,
              backgroundColor: i === active ? c.dotActive : c.dotInactive,
            }}
          />
        ))}
      </div>
    </section>
  );
}
