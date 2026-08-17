"use client";

import { useState } from "react";
import Image from "next/image";
import CarouselDots from "./CarouselDots";
import Glow from "./Glow";

const avatars = [
  "/images/avatar1.png",
  "/images/avatar2.png",
  "/images/avatar3.png",
  "/images/avatar4.png",
];

/**
 * One slide per creative discipline — the seven variants of the Figma component
 * set 6642:30974. Every variant swaps the collage plus all four copy blocks
 * around it, so they travel together.
 */
const slides = [
  {
    image: "/images/creative-grid-1.webp",
    stat: "7k+",
    statLabel: "Verified photographers",
    caption: "Where Every Moment Meets the Right Photographer",
    category: "Photographers",
    categoryCount: "20k+",
    priceLead: "Professional Photographers",
    priceAmount: "₦25,000.",
  },
  {
    image: "/images/creative-grid-2.webp",
    stat: "3k+",
    statLabel: "Verified Videographers",
    caption: "Where Every Moment Meets the Right Videographer",
    category: "Videographer",
    categoryCount: "4k+",
    priceLead: "Professional Videographer",
    priceAmount: "₦45,000.",
  },
  {
    image: "/images/creative-grid-3.webp",
    stat: "200+",
    statLabel: "Verified Drone Pilots",
    caption: "Where Every Moment Meets the Right Drone Pilot",
    category: "Drone Pilot",
    categoryCount: "300+",
    priceLead: "Professional Drone pilot",
    priceAmount: "₦65,000.",
  },
  {
    image: "/images/creative-grid-4.webp",
    stat: "300+",
    statLabel: "Verified Make-Up Artist",
    caption: "Where Every Moment Meets the Right Gaffers",
    category: "Make-Up Artist",
    categoryCount: "1000+",
    priceLead: "Professional Photographers",
    priceAmount: "₦130,000.",
  },
  {
    image: "/images/creative-grid-5.webp",
    stat: "10k+",
    statLabel: "Verified Editors",
    caption: "Where Every Moment Meets the Right Editors",
    category: "Editors",
    categoryCount: "20K+",
    priceLead: "Professional Photographers",
    priceAmount: "₦25,000.",
  },
  {
    image: "/images/creative-grid-6.webp",
    stat: "500+",
    statLabel: "Verified Sound",
    caption: "Where Every Moment Meets the Right Sound",
    category: "Sound",
    categoryCount: "2K+",
    priceLead: "Professional Photographers",
    priceAmount: "₦100,000.",
  },
  {
    image: "/images/creative-grid-7.webp",
    stat: "10k+",
    statLabel: "Verified Content Creators",
    caption: "Where Every Moment Meets the Right Event Crew",
    category: "Content Creator",
    categoryCount: "1000+",
    priceLead: "Professional Photographers",
    priceAmount: "₦300,000",
  },
];

/** Collage exports run at 3x the 334.314x474 Figma frame (Component 50). */
const GRID_WIDTH = 1003;
const GRID_HEIGHT = 1422;

const TRACKING = "1.1686px";

const caption = {
  fontFamily: "var(--font-mulish)",
  fontWeight: 600,
  fontSize: "14px",
  lineHeight: 1.49,
  letterSpacing: TRACKING,
} as const;

// Mobile draws the same caption at 8px (6665:16422, 6665:16440, 6665:16442).
const captionSm = { ...caption, fontSize: "8px" } as const;

function ArrowButton({
  direction,
  label,
  onClick,
  compact = false,
}: {
  direction: "prev" | "next";
  label: string;
  onClick: () => void;
  /** Mobile controls (6665:16391) run at 0.685 of the desktop size. */
  compact?: boolean;
}) {
  const isPrev = direction === "prev";
  const icon = compact ? 19.193 : 28;
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`flex cursor-pointer items-center justify-center transition-transform hover:scale-105 ${
        isPrev ? "border-solid border-[#f3a304]" : ""
      }`}
      style={{
        padding: compact ? "8.911px" : "13px",
        borderRadius: compact ? "47.983px" : "70px",
        borderWidth: isPrev ? (compact ? "0.685px" : "1px") : undefined,
        backgroundImage: isPrev
          ? undefined
          : "linear-gradient(180deg, #e17918 0%, #f1392f 100%)",
      }}
    >
      <Image
        src="/images/carousel-arrow.svg"
        alt=""
        width={28}
        height={28}
        className={isPrev ? "rotate-180" : ""}
        style={{ width: `${icon}px`, height: `${icon}px` }}
      />
    </button>
  );
}

export default function EveryCreative() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const step = (delta: number) =>
    setIndex((i) => (i + delta + slides.length) % slides.length);

  return (
    <section id="creatives" className="relative xl:py-24">
      {/* Ellipses 196, 195, 197 */}
      <Glow x={1166} y={285} size={120.5} blur={152} />
      <Glow x={73} y={346} size={120.5} blur={152} />
      <Glow x={86.5} y={736} size={25.5} blur={32} />
      <div className="relative z-10 mx-auto flex max-w-[1299.314px] flex-col items-center gap-[113px] px-6 xl:gap-[55px]">
        {/* Heading — 6665:16385 on mobile, 48px on desktop */}
        <div
          className="flex w-full max-w-[297px] flex-col items-center gap-[12px] text-center xl:max-w-[1178px]"
          style={{ letterSpacing: TRACKING }}
        >
          <h2 className="font-display max-w-[243px] font-bold text-white text-[28px] leading-[1.08] xl:max-w-none xl:text-[48px] xl:leading-[0.94]">
            Every Creative for Every Moment
          </h2>
          <p
            className="text-[#a7a8a9] xl:max-w-[548px]"
            style={{
              fontFamily: "var(--font-mulish)",
              fontSize: "16px",
              lineHeight: 1.55,
            }}
          >
            From weddings and birthdays to product shoots and corporate events.{" "}
            <span className="text-[#e17918]">Wide Angu</span> spans the full
            spectrum of media services.,
          </p>
        </div>

        {/* Mobile: the stats are pinned around the collage, so the block keeps
            the frame's own 412px canvas (centred, and never wider than its
            26px..390px of content) rather than reflowing at the viewport width
            — anything else drifts the pieces out of alignment. */}
        <div className="-mx-6 flex w-[calc(100%+3rem)] justify-center overflow-hidden xl:hidden">
          <div className="relative h-[401px] w-[412px] shrink-0">
            <div className="absolute left-[91.859px] top-0 flex w-[229.162px] flex-col items-center gap-[16.451px]">
              <Image
                src={slide.image}
                alt={`${slide.category} work on Wide Angu`}
                width={GRID_WIDTH}
                height={GRID_HEIGHT}
                className="h-[324.913px] w-[229.162px] object-contain"
              />
              <div className="flex w-[105.562px] flex-col items-center gap-[16.451px]">
                <div className="flex w-full items-center gap-[31.532px]">
                  <ArrowButton
                    compact
                    direction="prev"
                    label="Previous creative"
                    onClick={() => step(-1)}
                  />
                  <ArrowButton
                    compact
                    direction="next"
                    label="Next creative"
                    onClick={() => step(1)}
                  />
                </div>
                <CarouselDots
                  count={slides.length}
                  active={index}
                  size={6.169}
                  onSelect={setIndex}
                  label="Show creative category"
                />
              </div>
            </div>

            {/* 7k+ — 6665:16420 */}
            <div className="absolute left-[26px] top-[40px] flex w-[107px] flex-col gap-[3.912px]">
              <p
                className="font-display font-bold text-[#fd5f00]"
                style={{
                  fontSize: "28px",
                  lineHeight: 0.94,
                  letterSpacing: "1.5025px",
                }}
              >
                {slide.stat}
              </p>
              <p
                className="whitespace-nowrap text-white"
                style={{ ...captionSm, letterSpacing: "0.7619px" }}
              >
                {slide.statLabel}
              </p>
            </div>

            {/* Browse all — 6665:16410 */}
            <a
              href="#creatives"
              className="absolute left-[301px] top-[44.64px] block h-[34.744px] w-[89.159px]"
            >
              <Image
                src="/images/browse-circle.svg"
                alt=""
                width={58}
                height={59}
                className="absolute left-0 top-0 h-[34.744px] w-[34.393px]"
              />
              <span className="absolute left-[25.43px] top-[11.16px] flex items-center gap-[2.946px] whitespace-nowrap">
                <span
                  className="text-white"
                  style={{
                    fontFamily: "var(--font-mulish)",
                    fontSize: "10px",
                    lineHeight: 1.4,
                  }}
                >
                  Browse all
                </span>
                <Image
                  src="/images/chevron-right.svg"
                  alt=""
                  width={12}
                  height={12}
                  className="h-[11.782px] w-[11.782px]"
                />
              </span>
            </a>

            {/* Circular WideAngu pin — 6665:16424 */}
            <Image
              src="/images/creative-pin.svg"
              alt=""
              width={71}
              height={128}
              className="absolute left-[40.724px] top-[173px] h-[71.826px] w-[39.736px]"
            />

            {/* Photographers — 6665:16428 */}
            <div className="absolute left-[287px] top-[260px] flex w-[104px] flex-col items-center gap-[11.074px]">
              <div className="relative h-[27.446px] w-full">
                <p
                  className="font-display absolute left-0 top-0 w-full text-center text-white"
                  style={{
                    fontSize: "13.481px",
                    lineHeight: 0.94,
                    letterSpacing: "0.5627px",
                  }}
                >
                  {slide.category}
                </p>
                <div className="absolute left-[6.26px] top-[18.78px] flex items-center gap-[4.815px]">
                  <div className="flex items-center">
                    {avatars.map((src, i) => (
                      <div
                        key={src}
                        className="relative -ml-[2.89px] h-[8.667px] w-[8.667px] overflow-hidden rounded-full first:ml-0"
                        style={{ zIndex: avatars.length - i }}
                      >
                        <Image src={src} alt="" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <span
                    className="font-display font-bold text-[#fd5f00]"
                    style={{
                      fontSize: "8.296px",
                      lineHeight: 0.94,
                      letterSpacing: "0.303px",
                    }}
                  >
                    {slide.categoryCount}
                  </span>
                </div>
              </div>
              <div className="h-px w-[91.481px] bg-white/20" />
            </div>

            {/* Captions — 6665:16440, 6665:16442 */}
            <p
              className="absolute left-[26px] top-[311px] w-[156px] text-[#85898d]"
              style={captionSm}
            >
              {slide.caption}
            </p>
            <p
              className="absolute left-[265px] top-[311.62px] w-[125px] text-[#85898d]"
              style={{ ...captionSm, letterSpacing: "0.6629px" }}
            >
              {slide.priceLead}
              <br />
              Starting at{" "}
              <span
                className="text-[#fd5f00]"
                style={{ fontWeight: 800, fontSize: "9.076px" }}
              >
                {slide.priceAmount}
              </span>
            </p>
          </div>
        </div>

        {/* Desktop: three-column row */}
        <div className="hidden w-full xl:flex xl:flex-row xl:items-center xl:justify-between xl:gap-[259px]">
          {/* Left: stat, pin graphic, caption */}
          <div className="relative h-[430px] w-[224px] shrink-0">
            <div className="absolute left-0 top-0 flex w-[181px] flex-col gap-[6px]">
              <p
                className="font-display font-bold text-[#fd5f00]"
                style={{
                  fontSize: "55.222px",
                  lineHeight: 0.94,
                  letterSpacing: "2.3048px",
                }}
              >
                {slide.stat}
              </p>
              <p className="text-[#85898d]" style={caption}>
                {slide.statLabel}
              </p>
            </div>
            <Image
              src="/images/creative-pin.svg"
              alt=""
              width={71}
              height={128}
              className="absolute left-[20.91px] top-[168.91px] h-[128.087px] w-[71.176px]"
            />
            <p
              className="absolute left-px top-[388px] w-[224px] text-[#85898d]"
              style={caption}
            >
              {slide.caption}
            </p>
          </div>

          {/* Center: collage + controls */}
          <div className="flex w-[334.314px] shrink-0 flex-col items-center gap-[24px]">
            <Image
              src={slide.image}
              alt={`${slide.category} work on Wide Angu`}
              width={GRID_WIDTH}
              height={GRID_HEIGHT}
              className="h-[474px] w-[334.314px] object-contain"
              priority={false}
            />
            <div className="flex w-[154px] flex-col items-center gap-[24px]">
              <div className="flex w-full items-center gap-[46px]">
                <ArrowButton
                  direction="prev"
                  label="Previous creative"
                  onClick={() => step(-1)}
                />
                <ArrowButton
                  direction="next"
                  label="Next creative"
                  onClick={() => step(1)}
                />
              </div>
              <CarouselDots
                count={slides.length}
                active={index}
                onSelect={setIndex}
                label="Show creative category"
              />
            </div>
          </div>

          {/* Right: browse all, category, pricing */}
          <div className="relative h-[430px] w-[217px] shrink-0">
            <a
              href="#creatives"
              className="absolute left-[13px] top-0 block h-[58.978px] w-[118.168px]"
            >
              <Image
                src="/images/browse-circle.svg"
                alt=""
                width={58}
                height={59}
                className="absolute left-0 top-0 h-[58.977px] w-[58.383px]"
              />
              <span className="absolute left-[43.17px] top-[20.64px] flex items-center gap-[5px] whitespace-nowrap">
                <span
                  className="text-white"
                  style={{
                    fontFamily: "var(--font-mulish)",
                    fontSize: "14px",
                    lineHeight: 1.4,
                  }}
                >
                  Browse all
                </span>
                <Image
                  src="/images/chevron-right.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="size-5"
                />
              </span>
            </a>

            <div className="absolute left-0 top-[203.98px] flex w-[216px] flex-col items-center gap-[23px]">
              <div className="relative h-[57px] w-[216px]">
                <p
                  className="font-display absolute left-0 top-0 w-[216px] text-center text-white"
                  style={{ fontSize: "28px", lineHeight: 0.94 }}
                >
                  {slide.category}
                </p>
                <div className="absolute left-[13px] top-[39px] flex items-center gap-[10px]">
                  <div className="flex items-center">
                    {avatars.map((src, i) => (
                      <div
                        key={src}
                        className="relative -ml-1.5 size-4.5 overflow-hidden rounded-full first:ml-0"
                        style={{ zIndex: avatars.length - i }}
                      >
                        <Image src={src} alt="" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <span
                    className="font-display font-bold text-[#fd5f00]"
                    style={{
                      fontSize: "17.231px",
                      lineHeight: 0.94,
                      letterSpacing: "0.6293px",
                    }}
                  >
                    {slide.categoryCount}
                  </span>
                </div>
              </div>
              <div className="h-px w-[190px] bg-white/20" />
            </div>

            <p
              className="absolute left-[5px] top-[384.98px] w-[217px] text-[#85898d]"
              style={caption}
            >
              {slide.priceLead}
              <br />
              Starting at{" "}
              <span
                className="text-[#fd5f00]"
                style={{ fontWeight: 800, fontSize: "16px" }}
              >
                {slide.priceAmount}
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
