import type { CSSProperties } from "react";
import Glow from "./Glow";

const TRACKING = "1.1686px";

const steps = [
  {
    number: "1",
    title: "Discover",
    body: "Browse photographers, Videographer, and other creatives near you. Filter by category, price, rating, and experience level.",
  },
  {
    number: "2",
    title: "Book & Pay",
    body: "Pick a package, customize add-ons, and pay securely. Funds sit in escrow — the creative only gets paid once you confirm the work.",
  },
  {
    number: "3",
    title: "Enjoy",
    body: "Your creative shows up, captures the moment, and delivers. You confirm and rate them. They get paid. Everyone wins.",
  },
];

const bodyStyle: CSSProperties = {
  fontFamily: "var(--font-mulish)",
  fontSize: "16px",
  lineHeight: 1.63,
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative pt-[43px] lg:py-24">
      {/* Ellipse 198 — largest wash on the page, dialled back so it doesn't
          overpower the steps (the design's other big glow runs at 0.62). */}
      <Glow x={1007} y={253} size={451} blur={569} opacity={0.55} />
      <div className="relative z-10 mx-auto flex max-w-[1235px] flex-col items-center px-6">
        {/* Heading block — eyebrow is left-aligned above a centered heading */}
        <div
          className="flex w-full max-w-[660px] flex-col"
          style={{ letterSpacing: TRACKING }}
        >
          {/* Mobile centres the eyebrow at 14px (6665:16659) */}
          <p
            className="self-center text-[14px] font-bold lg:self-start lg:text-[18px]"
            style={{
              fontFamily: "var(--font-mulish)",
              lineHeight: 1.19,
              letterSpacing: "0.8092px",
              backgroundImage: "linear-gradient(90deg, #fd5f00 0%, #973900 100%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            How it works
          </p>

          <div className="mt-px flex flex-col items-center gap-[16px] text-center lg:mt-[10px]">
            <h2
              className="font-display w-full max-w-[312px] font-bold text-white text-[28px] leading-[1.23] lg:max-w-none lg:whitespace-nowrap lg:text-[48px] lg:leading-[1.19]"
            >
              From &quot;I need a photographer&quot;
              <br />
              to &quot;wow, that was easy&quot;.
            </h2>
            <p
              className="max-w-[274px] text-[#a7a8a9] leading-[1.55] lg:max-w-[532px] lg:leading-[1.63]"
              style={{ fontFamily: "var(--font-mulish)", fontSize: "16px" }}
            >
              Three simple steps. No back-and-forth WhatsApp messages,{" "}
              <span className="text-[#e17918]">
                no chasing payments, no surprises.
              </span>
            </p>
          </div>
        </div>

        {/* Three steps, connected by hairlines between the number badges */}
        <div className="mt-[80px] flex w-full max-w-[343px] flex-col items-start gap-[79px] lg:mt-[112px] lg:-mx-6 lg:max-w-none lg:flex-row lg:items-start lg:justify-center lg:gap-[103px]">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className="relative flex w-full flex-col items-center gap-[28px] lg:w-[343px] lg:shrink-0"
            >
              {/* hairline to the previous badge (desktop only) */}
              {i > 0 && (
                <span
                  aria-hidden
                  className="absolute hidden h-px bg-white lg:block"
                  style={{
                    top: "35.5px",
                    right: "calc(50% + 35.51px)",
                    width: "375px",
                  }}
                />
              )}
              <div
                className="flex w-[71.02px] flex-col items-center justify-center rounded-[74.885px] border border-solid border-[#fd5f00]"
                style={{ padding: "7.73px 12.078px" }}
              >
                <span
                  className="font-display w-full text-center font-bold text-white"
                  style={{
                    fontSize: "34.012px",
                    lineHeight: 1.63,
                    letterSpacing: "1.2421px",
                  }}
                >
                  {step.number}
                </span>
              </div>

              <div
                className="flex w-full flex-col gap-[4px] text-center"
                style={{ letterSpacing: TRACKING }}
              >
                <h3
                  className="font-display font-bold text-white"
                  style={{ fontSize: "22px", lineHeight: 1.84 }}
                >
                  {step.title}
                </h3>
                <p className="text-[#a7a8a9]" style={bodyStyle}>
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
