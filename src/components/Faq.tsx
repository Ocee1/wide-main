"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import CtaButtons from "./CtaButtons";
import Reveal from "./Reveal";

const mulish: CSSProperties = { fontFamily: "var(--font-mulish)" };

const questions = [
  {
    q: "How do I find a photographer for my event?",
    a: "Simply search by location and event type on the WideAngu app. Browse verified profiles, compare portfolios and pricing, then book directly with your chosen photographer.",
  },
  {
    q: "How does secure payment work?",
    a: "Payments are held securely until your session is complete and confirmed, protecting both clients and photographers throughout the process.",
  },
  {
    q: "Can I message a photographer before booking?",
    a: "Yes, you can chat directly with any photographer to discuss details, availability, and pricing before confirming your booking.",
  },
  {
    q: "What happens if I need to reschedule?",
    a: "You can request a reschedule directly through the app, subject to the photographer's availability and cancellation policy.",
  },
  {
    q: "How do photographers get verified on WideAngu?",
    a: "Every photographer goes through an identity and portfolio review before receiving a verified badge, so clients can book with confidence.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="pb-[74px] pt-24 lg:py-24">
      <div className="mx-auto flex max-w-[392px] flex-col items-center gap-[37px] px-6 lg:max-w-[1150px] lg:flex-row lg:items-start lg:gap-[112px]">
        {/* Gradient display heading */}
        <Reveal className="w-full lg:min-w-px lg:flex-1">
          <h2
            className="font-display text-center text-[48px] leading-[59px] font-bold lg:w-[392px] lg:text-left lg:text-[68.636px] lg:leading-[77.287px]"
            style={{
              backgroundImage:
                "linear-gradient(155.61deg, rgb(253,95,0) 18.354%, rgb(255,255,255) 65.576%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              textShadow:
                "0px 0px 0px rgba(0,0,0,0.15), -1.068px 1.068px 3.205px rgba(0,0,0,0.15), -2.137px 4.274px 5.342px rgba(0,0,0,0.13), -5.342px 10.684px 7.479px rgba(0,0,0,0.08), -9.615px 18.163px 8.547px rgba(0,0,0,0.02)",
            }}
          >
            Frequently
            <br />
            Asked
            <br />
            Questions
          </h2>
        </Reveal>

        {/* Accordion */}
        <div className="flex w-full max-w-[328px] flex-col gap-[9px] lg:w-auto lg:max-w-none lg:shrink-0 lg:gap-[16px]">
          {questions.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal
                key={item.q}
                delay={i * 70}
                className="rounded-[14px] border border-solid border-white bg-[rgba(255,255,255,0.02)] px-[16px] py-[25px] transition-colors duration-300 hover:border-white/60 lg:w-[646px]"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 text-left lg:w-[593px]"
                >
                  <span
                    className="text-[16px] text-white lg:text-[18px]"
                    style={{
                      ...mulish,
                      fontWeight: 500,
                      lineHeight: "24.552px",
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={`relative size-[16px] shrink-0 transition-transform duration-300 lg:size-[14px] ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <span className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 rounded-full bg-white/50" />
                    <span className="absolute left-0 top-1/2 h-0.5 w-full -translate-y-1/2 rounded-full bg-white/50" />
                  </span>
                </button>

                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p
                      className="mt-4 text-[#a7a8a9] lg:w-[593px]"
                      style={{ ...mulish, fontSize: "16px", lineHeight: 1.55 }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      {/* The mobile frame runs the FAQ straight into the footer, no CTA pair */}
      <div className="mt-[60px] hidden justify-center px-6 lg:flex">
        <CtaButtons />
      </div>
    </section>
  );
}
