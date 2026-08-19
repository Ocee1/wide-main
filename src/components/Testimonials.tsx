"use client";

import Image from "next/image";
import { useState } from "react";
import type { CSSProperties } from "react";
import Reveal from "./Reveal";
import { useSwipe } from "@/hooks/useSwipe";

const mulish: CSSProperties = { fontFamily: "var(--font-mulish)" };

const testimonials = [
  {
    quote:
      "This year brings new opportunities for growth, success, and innovation. Here’s to a prosperous year ahead! This year brings new opportunities for growth, success, and innovation. Here’s to a prosperous year ahead!",
    name: "Janet Clack",
  },
  {
    quote:
      "WideAngu made it effortless to find a photographer for our wedding. The booking process was seamless and the results were stunning.",
    name: "David Okafor",
  },
  {
    quote:
      "As a photographer, WideAngu connected me with clients I never would have reached. My bookings have tripled since I joined.",
    name: "Amaka Bello",
  },
  {
    quote:
      "Secure payments and direct communication with my photographer gave me total peace of mind for my event.",
    name: "Chidi Nwosu",
  },
  {
    quote:
      "From last-minute bookings to carefully planned shoots, WideAngu has covered every moment that mattered to us.",
    name: "Janet Clack",
  },
];

function SectionHeading({ className = "" }: { className?: string }) {
  return (
    <h2
      className={`font-display text-[36px] font-bold leading-[1.3] lg:text-[48px] ${className}`}
      style={{
        backgroundImage: "linear-gradient(180deg, #e17918 0%, #f1392f 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      Success Stories
    </h2>
  );
}

function ArrowButton({
  onClick,
  direction,
  label,
  className = "",
}: {
  onClick: () => void;
  direction: "prev" | "next";
  label: string;
  className?: string;
}) {
  const isPrev = direction === "prev";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      // Mobile pads to 20px with a 21.654px glyph on the prev arrow (6665:14162)
      className={`shrink-0 items-center justify-center rounded-[70px] p-[20px] transition-transform hover:scale-105 lg:p-[13px] ${
        isPrev ? "border-[0.773px] border-solid border-[#f3a304] lg:border" : ""
      } ${className || "flex"}`}
      style={
        isPrev
          ? undefined
          : { backgroundImage: "linear-gradient(180deg, #e17918 0%, #f1392f 100%)" }
      }
    >
      <Image
        src="/images/carousel-arrow.svg"
        alt=""
        width={28}
        height={28}
        className={`${
          isPrev ? "size-[21.654px] rotate-180 lg:size-7" : "size-7"
        }`}
      />
    </button>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const current = testimonials[index];
  const swipe = useSwipe(next, prev);

  return (
    <section id="stories" className="pt-[125px] lg:py-24">
      {/* 349.64 is the frame's own content width (6665:14158) — the arrows +
          portrait row is 351px wide and has nowhere to shrink to, so any extra
          padding pushes the next arrow off the right edge. */}
      <Reveal className="mx-auto flex w-full max-w-[349.64px] flex-col items-center gap-[37px] lg:max-w-[1191.501px] lg:gap-[43px] lg:px-6">
        {/* Mobile puts the heading above the portrait (6665:14159) */}
        <SectionHeading className="text-center lg:hidden" />

        <div
          className="flex w-full touch-pan-y flex-col items-center gap-[37px] lg:flex-row lg:gap-[97px]"
          onTouchStart={swipe.onTouchStart}
          onTouchEnd={swipe.onTouchEnd}
        >
          {/* Portrait, flanked by both arrows on mobile */}
          <div className="flex items-center gap-[32px] lg:gap-[48px]">
            <ArrowButton
              onClick={prev}
              direction="prev"
              label="Previous success story"
            />
            <div className="relative h-[197px] w-[155.982px] shrink-0 overflow-hidden rounded-[93.012px] lg:h-[353px] lg:w-[279.501px] lg:rounded-[166.666px]">
              <Image
                key={index}
                src="/images/testimonial.png"
                alt={current.name}
                fill
                sizes="280px"
                className="slide-fade-in object-cover grayscale"
              />
            </div>
            <ArrowButton
              onClick={next}
              direction="next"
              label="Next success story"
              className="flex lg:hidden"
            />
          </div>

          {/* Copy + next */}
          <div className="flex w-[309px] max-w-full flex-1 items-center gap-8 lg:w-auto lg:gap-[52px]">
            <div className="flex w-full flex-col items-center gap-[10px] text-center lg:w-[585px] lg:items-start lg:gap-[20px] lg:text-left">
              <div key={index} className="slide-fade-in flex flex-col gap-[10px] lg:gap-[20px]">
                <SectionHeading className="hidden lg:block" />
                <p
                  className="text-[16px] text-[#bbbfcc] lg:w-[580px] lg:text-[20px]"
                  style={{ ...mulish, fontWeight: 300, lineHeight: 1.44 }}
                >
                  {current.quote}
                </p>
              </div>

              <div className="flex items-center gap-[9px]">
                <span aria-hidden className="h-px w-[21px] bg-white lg:w-[61px]" />
                <span
                  className="text-[16px] font-bold whitespace-nowrap text-white lg:text-[20px]"
                  style={{ ...mulish, lineHeight: 1.44 }}
                >
                  {current.name}
                </span>
              </div>
            </div>

            <ArrowButton
              onClick={next}
              direction="next"
              label="Next success story"
              className="hidden lg:flex"
            />
          </div>
        </div>

        {/* Dots */}
        <div className="-mt-[13px] flex items-center gap-[8px] lg:mt-0">
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to success story ${i + 1}`}
              aria-current={i === index}
              className={`transition-all duration-300 ${
                i === index
                  ? "h-[9px] w-[26px] rounded-[58px]"
                  : "size-[9px] rounded-full bg-white/25"
              }`}
              style={
                i === index
                  ? {
                      backgroundImage:
                        "linear-gradient(180deg, #e17918 0%, #f1392f 100%)",
                    }
                  : undefined
              }
            />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
