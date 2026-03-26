"use client";

import { useState, useEffect, useCallback } from "react";

const heroSlideImg =
  "https://www.figma.com/api/mcp/asset/c7f10715-e4f4-42d2-aa2a-97eaea4cf820";
const heroSlide2Img =
  "https://www.figma.com/api/mcp/asset/a5eab4d3-0b76-4d3a-9139-4ac0a7f83a6c";
const heroSlide3Img =
  "https://www.figma.com/api/mcp/asset/14db4b93-23b6-49d8-ad2f-9d3459cba698";

type Slide = {
  id: number;
  tag: string;
  tagColor: string;
  tagBg: string;
  headingRegular: string;
  headingBold: string;
  headingBoldColor: string;
  headingRegularColor: string;
  body: string;
  bodyColor: string;
  bg: string;
  gradientColor: string;
  primaryBtn: string;
  primaryBtnBg: string;
  primaryBtnColor: string;
  secondaryBtn: string;
  secondaryBtnBg: string;
  secondaryBtnColor: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 0,
    tag: "Next-Gen Digital Forensics",
    tagColor: "#0b0b0b",
    tagBg: "rgba(32,166,76,0.1)",
    headingRegular: "Probabilistic link analysis for",
    headingBold: "modern threats.",
    headingBoldColor: "#20a64c",
    headingRegularColor: "#101010",
    body: "Uncover hidden relationships across devices, identities, accounts and networks with a forensics platform built for analysts who need evidence-grade clarity at machine speed.",
    bodyColor: "#5f7267",
    bg: "#eaf2ec",
    gradientColor: "#eaf2ec",
    primaryBtn: "Start Investigation",
    primaryBtnBg: "#20a64c",
    primaryBtnColor: "#ffffff",
    secondaryBtn: "View Documentation",
    secondaryBtnBg: "#2b2b2b",
    secondaryBtnColor: "#ffffff",
    image: heroSlideImg,
  },
  {
    id: 1,
    tag: "Advanced Digital Forensics",
    tagColor: "#28f06a",
    tagBg: "rgba(40,240,106,0.1)",
    headingRegular: "AI-powered link analysis for",
    headingBold: "emerging threats.",
    headingBoldColor: "#28f06a",
    headingRegularColor: "#e6f9ef",
    body: "Reveal complex connections across devices, users, and networks with an AI-driven forensics platform. Cyberscout empowers security teams to detect subtle indicators before they escalate into critical breaches.",
    bodyColor: "#9aa6a8",
    bg: "#060a0f",
    gradientColor: "#060a0f",
    primaryBtn: "Begin Analysis",
    primaryBtnBg: "#28f06a",
    primaryBtnColor: "#06120a",
    secondaryBtn: "Read More",
    secondaryBtnBg: "#0e1416",
    secondaryBtnColor: "#e6f9ef",
    image: heroSlide2Img,
  },
  {
    id: 2,
    tag: "Universal Data Integration",
    tagColor: "#28f06a",
    tagBg: "rgba(40,240,106,0.1)",
    headingRegular: "across cloud and",
    headingBold: "mobile artifacts.",
    headingBoldColor: "#28f06a",
    headingRegularColor: "#e6f9ef",
    body: "Break data silos in seconds. Logicode merges disparate extractions into a single, cohesive timeline, allowing investigators to track suspect activity across every digital touchpoint without manual correlation.",
    bodyColor: "#9aa6a8",
    bg: "#060a0f",
    gradientColor: "#060a0f",
    primaryBtn: "Start Investigation",
    primaryBtnBg: "#28f06a",
    primaryBtnColor: "#06120a",
    secondaryBtn: "View Documentation",
    secondaryBtnBg: "#0e1416",
    secondaryBtnColor: "#e6f9ef",
    image: heroSlide3Img,
  },
];

export function HeroSection() {
  const [active, setActive] = useState(0);

  const next = useCallback(
    () => setActive((p) => (p + 1) % slides.length),
    []
  );

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  const slide = slides[active];

  return (
    <section
      className="relative w-full h-[540px] md:h-[620px] lg:h-[691px] overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: slide.bg }}
    >
      {/* ── Background image (right half) ──────────────────── */}
      <div
        className="absolute inset-y-0 right-0 w-full lg:w-[70%] pointer-events-none"
        aria-hidden="true"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={slide.image}
          alt=""
          className="w-full h-full object-cover opacity-80 lg:opacity-100 transition-opacity duration-700"
        />
        {/* Gradient fade to left */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${slide.gradientColor} 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative section-container h-full flex items-center">
        <div className="flex flex-col gap-5 max-w-[565px]">
          {/* Tag */}
          <span
            className="inline-flex self-start px-3 py-1.5 rounded-full text-xs font-semibold font-display"
            style={{ backgroundColor: slide.tagBg, color: slide.tagColor }}
          >
            {slide.tag}
          </span>

          {/* Heading */}
          <div className="flex flex-col -mt-1">
            <span
              className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] tracking-[-0.045em] font-normal"
              style={{ color: slide.headingRegularColor }}
            >
              {slide.headingRegular}
            </span>
            <span
              className="font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.1] font-bold"
              style={{ color: slide.headingBoldColor }}
            >
              {slide.headingBold}
            </span>
          </div>

          {/* Body */}
          <p
            className="text-sm leading-relaxed font-normal"
            style={{ color: slide.bodyColor }}
          >
            {slide.body}
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <button
              className="px-8 py-4 rounded-[20px] text-sm font-medium transition-opacity hover:opacity-90"
              style={{
                backgroundColor: slide.primaryBtnBg,
                color: slide.primaryBtnColor,
              }}
            >
              {slide.primaryBtn}
            </button>
            <button
              className="px-8 py-4 rounded-[20px] text-sm font-medium transition-opacity hover:opacity-90"
              style={{
                backgroundColor: slide.secondaryBtnBg,
                color: slide.secondaryBtnColor,
              }}
            >
              {slide.secondaryBtn}
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
              backgroundColor:
                i === active
                  ? active === 0
                    ? "#20a64c"
                    : "#28f06a"
                  : active === 0
                  ? "rgba(32,166,76,0.3)"
                  : "rgba(40,240,106,0.3)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
