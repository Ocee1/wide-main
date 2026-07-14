"use client";

import Image from "next/image";
import { useState } from "react";

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

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const current = testimonials[index];

  return (
    <section id="stories" className="py-16 sm:py-24">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 px-6 md:flex-row md:items-center md:gap-12">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="hidden size-11 shrink-0 items-center justify-center rounded-full border border-[#f3a304] text-[#f3a304] transition-colors hover:bg-[#f3a304]/10 md:flex"
        >
          ←
        </button>

        <div className="relative h-[280px] w-[220px] shrink-0 overflow-hidden rounded-full bg-white">
          <Image
            src="/images/testimonial.png"
            alt={current.name}
            fill
            sizes="220px"
            priority
            className="object-cover grayscale"
          />
        </div>

        <div className="flex flex-1 flex-col items-center gap-6 text-center md:items-start md:text-left">
          <div>
            <h3 className="font-display text-3xl font-bold text-gradient sm:text-4xl">
              Success Stories
            </h3>
            <p className="mt-4 text-base font-light leading-relaxed text-[#bbbfcc]">
              {current.quote}
            </p>
            <p className="mt-4 flex items-center justify-center gap-2 font-bold text-white md:justify-start">
              <span className="h-px w-6 bg-white/60" aria-hidden />
              {current.name}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-[9px] rounded-full bg-gradient-to-b from-[#e17918] to-[#f1392f] transition-all ${
                  i === index ? "w-[26px]" : "w-[9px] opacity-40"
                }`}
              />
            ))}
          </div>
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="flex size-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#e17918] to-[#f1392f] text-white transition-transform hover:scale-105"
        >
          →
        </button>
      </div>
    </section>
  );
}
