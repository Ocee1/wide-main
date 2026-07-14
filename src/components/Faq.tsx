"use client";

import { useState } from "react";

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
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex flex-col">
          {questions.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-white/15">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans text-xl font-bold text-[#f8f8fa] sm:text-2xl">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-2xl font-light text-white transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-7 text-base leading-relaxed text-white/70">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
