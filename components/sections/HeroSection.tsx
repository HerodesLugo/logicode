"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import {
  HERO_SLIDE_1_IMG,
  HERO_SLIDE_2_IMG,
  HERO_SLIDE_3_IMG,
} from "@/lib/assets";
import { HeroArrowIcon, FolderIcon } from "@/components/icons";

const heroSlideImg = HERO_SLIDE_1_IMG;
const heroSlide2Img = HERO_SLIDE_2_IMG;
const heroSlide3Img = HERO_SLIDE_3_IMG;

/* ── Hydration-safe mounted check (avoids setState-in-effect lint) ── */
const emptySubscribe = () => () => {};
function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}

type SlideColors = {
  tagColor: string;
  tagBg: string;
  headingBoldColor: string;
  headingRegularColor: string;
  bodyColor: string;
  bg: string;
  gradientColor: string;
  primaryBtnBg: string;
  primaryBtnColor: string;
  secondaryBtnBg: string;
  secondaryBtnColor: string;
  dotActive: string;
  dotInactive: string;
};

type Slide = {
  id: number;
  tag: string;
  headingRegular: string;
  headingBold: string;
  body: string;
  primaryBtn: string;
  secondaryBtn: string;
  image: string;
  /** Colors used in light mode */
  lightColors: SlideColors;
  /** Colors used in dark mode */
  darkColors: SlideColors;
};

/* ── Color palettes ────────────────────────────────────────── */
const lightPalette: SlideColors = {
  tagColor: "#0b0b0b",
  tagBg: "rgba(32,166,76,0.1)",
  headingBoldColor: "#20a64c",
  headingRegularColor: "#101010",
  bodyColor: "#5f7267",
  bg: "#eaf2ec",
  gradientColor: "#eaf2ec",
  primaryBtnBg: "#20a64c",
  primaryBtnColor: "#ffffff",
  secondaryBtnBg: "#2b2b2b",
  secondaryBtnColor: "#ffffff",
  dotActive: "#20a64c",
  dotInactive: "rgba(32,166,76,0.3)",
};

const darkPalette: SlideColors = {
  tagColor: "#28f06a",
  tagBg: "rgba(40,240,106,0.1)",
  headingBoldColor: "#28f06a",
  headingRegularColor: "#e6f9ef",
  bodyColor: "#9aa6a8",
  bg: "#060a0f",
  gradientColor: "#060a0f",
  primaryBtnBg: "#28f06a",
  primaryBtnColor: "#06120a",
  secondaryBtnBg: "#0e1416",
  secondaryBtnColor: "#e6f9ef",
  dotActive: "#28f06a",
  dotInactive: "rgba(40,240,106,0.3)",
};

const slides: Slide[] = [
  {
    id: 0,
    tag: "Next-Gen Digital Forensics",
    headingRegular: "Probabilistic link analysis for",
    headingBold: "modern threats.",
    body: "Uncover hidden relationships across devices, identities, accounts and networks with a forensics platform built for analysts who need evidence-grade clarity at machine speed.",
    primaryBtn: "Start Investigation",
    secondaryBtn: "View Documentation",
    image: heroSlideImg,
    lightColors: lightPalette,
    darkColors: darkPalette,
  },
  {
    id: 1,
    tag: "Advanced Digital Forensics",
    headingRegular: "AI-powered link analysis for",
    headingBold: "emerging threats.",
    body: "Reveal complex connections across devices, users, and networks with an AI-driven forensics platform. Cyberscout empowers security teams to detect subtle indicators before they escalate into critical breaches.",
    primaryBtn: "Begin Analysis",
    secondaryBtn: "Read More",
    image: heroSlide2Img,
    lightColors: lightPalette,
    darkColors: darkPalette,
  },
  {
    id: 2,
    tag: "Universal Data Integration",
    headingRegular: "across cloud and",
    headingBold: "mobile artifacts.",
    body: "Break data silos in seconds. Logicode merges disparate extractions into a single, cohesive timeline, allowing investigators to track suspect activity across every digital touchpoint without manual correlation.",
    primaryBtn: "Start Investigation",
    secondaryBtn: "View Documentation",
    image: heroSlide3Img,
    lightColors: lightPalette,
    darkColors: darkPalette,
  },
];

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
      className="relative w-full h-dvh     overflow-hidden transition-colors duration-700 "
      style={{ backgroundColor: c.bg }}
    >
      <div
        className="absolute  inset-0 md:left-auto md:right-0 w-full lg:w-[70%] pointer-events-none"
        aria-hidden="true"
      >
        {slides.map((s, i) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={s.id}
            src={s.image}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === active
                ? "opacity-40 md:opacity-80 lg:opacity-100"
                : "opacity-0"
            }`}
          />
        ))}
        {/* Gradient fade to left - only strong on Desktop, subtle on mobile for readability */}
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

      {/* ── Content ─────────────────────────────────────────── */}
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
              className="w-full sm:w-auto h-14 flex flex-row-reverse items-center gap-2 px-8 rounded-[20px] text-sm font-medium transition-opacity hover:opacity-90"
              style={{
                backgroundColor: c.primaryBtnBg,
                color: c.primaryBtnColor,
              }}
            >
              <HeroArrowIcon className="w-4 h-4" />

              {slide.primaryBtn}
            </button>
            <button
              className="w-full sm:w-auto flex-row-reverse px-8 h-14   items-center gap-2 rounded-[20px] text-sm font-medium transition-opacity hover:opacity-90 flex"
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

      {/* ── Slide dots ──────────────────────────────────────── */}
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
