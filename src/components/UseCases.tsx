import Image from "next/image";
import type { CSSProperties } from "react";
import CarouselDots from "./CarouselDots";
import Reveal from "./Reveal";

const CARD = {
  eyebrow: "Use case 01 · Clients",
  title: "A client finds and hires a photographer",
  body: "Clients can search verified photographers for weddings, corporate events, birthdays, product shoots, portraits, and personal moments by location, style, budget, rating, and availability.",
};

const cards = [CARD, CARD, CARD, CARD];

const mulish: CSSProperties = { fontFamily: "var(--font-mulish)" };

function UseCaseCard() {
  return (
    <div
      className="flex w-full max-w-[280px] flex-col items-center justify-center gap-[11px] rounded-[12px] bg-[#101214] px-[24px] py-[40px] transition-all duration-300 hover:-translate-y-1 hover:bg-[#16191c] hover:shadow-[0_20px_40px_-15px_rgba(253,95,0,0.25)] lg:w-[285px] lg:max-w-none"
      style={{ letterSpacing: "1.1111px" }}
    >
      <p
        className="w-full font-bold uppercase text-[#fd5f00]"
        style={{ ...mulish, fontSize: "14px", lineHeight: 1.44 }}
      >
        {CARD.eyebrow}
      </p>
      <div className="flex w-full flex-col gap-[13.311px] lg:h-[219px]">
        <h3
          className="font-bold text-white lg:w-[232px]"
          style={{ ...mulish, fontSize: "20px", lineHeight: 1.44 }}
        >
          {CARD.title}
        </h3>
        <p
          className="text-[#a7a8a9]"
          style={{ ...mulish, fontSize: "14px", lineHeight: 1.55 }}
        >
          {CARD.body}
        </p>
      </div>
    </div>
  );
}

function ActionButtons({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex-col items-center gap-[14px] lg:flex-row lg:flex-wrap ${className}`}
    >
      <a
        href="#use-cases"
        className="flex h-[56px] w-[188px] items-center justify-center overflow-hidden rounded-[40px] px-[8px] py-[16px] transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(246,11,50,0.55)]"
        style={{
          backgroundImage:
            "linear-gradient(93.7deg, rgb(243,163,4) 33.183%, rgb(246,11,50) 131.7%)",
        }}
      >
        <span
          className="font-bold whitespace-nowrap text-white"
          style={{ ...mulish, fontSize: "16px", lineHeight: 1.4 }}
        >
          Explore use cases
        </span>
      </a>
      <a
        href="#download"
        className="flex h-[56px] w-[188px] items-center justify-center overflow-hidden rounded-[40px] border border-solid border-white px-[8px] py-[16px] transition-[transform,background-color] duration-300 hover:scale-[1.03] hover:bg-white/10"
      >
        <span
          className="font-bold whitespace-nowrap text-white"
          style={{ ...mulish, fontSize: "16px", lineHeight: 1.4 }}
        >
          Sign Up
        </span>
      </a>
    </div>
  );
}

export default function UseCases() {
  return (
    <section
      id="use-cases"
      className="relative overflow-hidden py-[59px] lg:py-24"
    >
      <Image
        src="/images/usecases-bg-mobile.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 object-fill object-bottom lg:hidden"
      />
      <Image
        src="/images/usecases-bg.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden object-cover lg:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-[112px] top-[155.5px] -z-10 hidden size-[373px] rounded-full bg-[#fd5f00] lg:block"
        style={{ filter: "blur(471px)" }}
      />

      <div className="mx-auto flex max-w-[296px] flex-col items-center text-center lg:max-w-[1122px] lg:flex-row lg:items-start lg:gap-[29px] lg:px-6 lg:text-left">
        {/* Left: heading, copy, buttons */}
        <Reveal className="flex w-full flex-col items-center gap-[23px] lg:w-[507px] lg:shrink-0 lg:items-start lg:gap-[28px]">
          <div className="flex w-full max-w-[274px] flex-col items-center lg:max-w-none lg:items-start">
            <p
              className="text-[14px] font-bold lg:text-[18px]"
              style={{
                ...mulish,
                lineHeight: 1.19,
                letterSpacing: "0.8092px",
                backgroundImage:
                  "linear-gradient(90deg, #fd5f00 0%, #973900 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              USE CASES
            </p>
            <h2
              className="font-display mt-[6px] text-[28px] italic text-white lg:mt-[11px] lg:w-[549px] lg:text-[48px]"
              style={{
                lineHeight: 1.04,
                letterSpacing: "1.1686px",
                fontWeight: 700,
              }}
            >
              Built for bookings, teams, learning, and long-term growth.
            </h2>
          </div>

          <p
            className="w-full text-[#bbbfcc] lg:w-[534px]"
            style={{
              ...mulish,
              fontSize: "16px",
              lineHeight: 1.55,
              letterSpacing: "1.1686px",
            }}
          >
            Wide Angu is not only for one-off photography jobs. It supports
            clients, creatives, agencies, event planners, businesses, trainees,
            mentors, and the wider creative community.
          </p>

          {/* Desktop keeps the buttons in the copy column; mobile puts them
              below the card (6667:17013) */}
          <ActionButtons className="mt-[60px] hidden lg:flex" />
        </Reveal>

        {/* Mobile: one card as a carousel slide. Desktop: 2x2 grid. */}
        <Reveal className="mt-[80px] flex w-full flex-col items-center gap-[16px] lg:hidden">
          <UseCaseCard />
          <CarouselDots count={4} size={6.169} />
        </Reveal>
        <div className="hidden gap-[16px] sm:grid-cols-2 lg:grid lg:w-[586px] lg:shrink-0">
          {cards.map((_, i) => (
            <Reveal key={i} delay={i * 90}>
              <UseCaseCard />
            </Reveal>
          ))}
        </div>

        <ActionButtons className="mt-[69px] flex lg:hidden" />
      </div>
    </section>
  );
}
