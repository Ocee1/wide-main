import Image from "next/image";
import CarouselDots from "./CarouselDots";
import CtaButtons from "./CtaButtons";
import Reveal from "./Reveal";
import type { CSSProperties } from "react";

const TRACKING = "1.1686px";

const CARD_TITLE = "Platform-enforced price floors.";
const CARD_BODY =
  "Every category has a minimum price set by us, not a race-to-the-bottom auction. Creatives can charge above it; you can negotiate up if you want a popular one. Nobody can negotiate down.";

const cardBody: CSSProperties = {
  fontFamily: "var(--font-mulish)",
  fontSize: "14px",
  lineHeight: 1.55,
};

function LabelChip({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex items-center rounded-[11.409px] border-[0.475px] border-solid border-[#fd5f00] bg-[#ece0d5] p-[9.508px] ${className}`}
    >
      <Image
        src="/images/icon-label.svg"
        alt=""
        width={23}
        height={23}
        className="size-[22.818px]"
      />
    </div>
  );
}

function PriceCard({ wide = false }: { wide?: boolean }) {
  if (wide) {
    return (
      <div className="relative flex h-[264px] w-full max-w-[583px] flex-col justify-center gap-[9.424px] rounded-[11.309px] bg-[#1d1d1d] px-[30.157px] pb-[15.078px] pt-[88px] transition-all duration-300 hover:-translate-y-1 hover:bg-[#232323] hover:shadow-[0_20px_40px_-15px_rgba(253,95,0,0.25)]">
        <LabelChip className="absolute left-[30.16px] top-[23.56px]" />
        <div
          className="flex flex-col gap-[13.194px]"
          style={{ letterSpacing: "1.1013px" }}
        >
          <h4
            className="w-[275.181px] font-bold text-white"
            style={{
              fontFamily: "var(--font-mulish)",
              fontSize: "20px",
              lineHeight: 1.44,
            }}
          >
            {CARD_TITLE}
          </h4>
          <p className="text-[#a7a8a9]" style={cardBody}>
            {CARD_BODY}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[313.753px] w-full max-w-[325px] flex-col items-center justify-center rounded-[11.409px] bg-[#1d1d1d] px-[30.425px] transition-all duration-300 hover:-translate-y-1 hover:bg-[#232323] hover:shadow-[0_20px_40px_-15px_rgba(253,95,0,0.25)] lg:max-w-[385.061px]">
      <div className="flex w-full flex-col gap-[15.212px]">
        <LabelChip className="self-start" />
        <div
          className="flex flex-col gap-[13.311px]"
          style={{ letterSpacing: "1.1111px" }}
        >
          <h4
            className="font-bold text-white lg:w-[269.067px]"
            style={{
              fontFamily: "var(--font-mulish)",
              fontSize: "20px",
              lineHeight: 1.44,
            }}
          >
            {CARD_TITLE}
          </h4>
          <p className="text-[#a7a8a9]" style={cardBody}>
            {CARD_BODY}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function TrustSection() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden pb-[30px] pt-[73px] lg:py-24"
    >
      {/* The mobile frame ships its own, much taller, backdrop export */}
      <Image
        src="/images/escrow-bg-mobile.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 object-fill object-bottom lg:hidden"
      />
      <Image
        src="/images/escrow-bg.png"
        alt=""
        fill
        sizes="100vw"
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 hidden object-fill object-bottom lg:block"
      />

      <div className="mx-auto max-w-[352px] lg:max-w-[1179.182px] lg:px-6">
        {/* Heading */}
        <Reveal className="mx-auto flex max-w-[988px] flex-col items-center text-center">
          <p
            className="text-[14px] font-bold text-[#e17918] lg:text-[18px]"
            style={{
              fontFamily: "var(--font-mulish)",
              lineHeight: 1.19,
              letterSpacing: "0.8092px",
            }}
          >
            What makes us different
          </p>
          <div
            className="flex flex-col items-center gap-[16px]"
            style={{ letterSpacing: TRACKING }}
          >
            <h2
              className="font-display text-[28px] font-bold leading-[1.19] text-white lg:whitespace-nowrap lg:text-[48px]"
            >
              Built for people who hate getting burned.
            </h2>
            <p
              className="text-[#a7a8a9] lg:whitespace-nowrap"
              style={{
                fontFamily: "var(--font-mulish)",
                fontSize: "16px",
                lineHeight: 1.55,
              }}
            >
              Photography and creative services online have always been a trust
              gamble. We rebuilt the rules.
            </p>
          </div>
        </Reveal>

        {/* Escrow panel + cards */}
        <div className="mt-[32px] flex flex-col gap-[32px] lg:mt-[100px]">
          <Reveal
            className="flex w-full flex-col items-center justify-center rounded-[12px] border-l border-t border-solid border-[#dcd9d9] p-6 lg:p-[48px]"
            style={{
              backgroundImage:
                "linear-gradient(90.31deg, rgb(0,0,0) 29.22%, rgb(55,50,47) 109.83%, rgb(138,127,119) 202.11%)",
            }}
          >
            <div className="flex w-full max-w-[1101px] flex-col items-center justify-center gap-[35px] lg:flex-row lg:gap-[64px]">
              {/* Escrow copy — centred on mobile (6665:16821), left on desktop */}
              <div className="flex w-full flex-col items-center gap-[18px] text-center lg:w-[457px] lg:shrink-0 lg:items-start lg:text-left">
                <div className="flex w-fit items-center rounded-[12px] border-[0.5px] border-solid border-[#fd5f00] bg-[rgba(41,40,40,0.2)] p-[10px]">
                  <span className="flex items-center px-[3px] py-[2px]">
                    <Image
                      src="/images/icon-protect.svg"
                      alt=""
                      width={18}
                      height={21}
                      className="h-[20.5px] w-[18px]"
                    />
                  </span>
                </div>
                <div
                  className="flex flex-col items-center gap-[11px] lg:items-start"
                  style={{ letterSpacing: TRACKING }}
                >
                  <h3
                    className="max-w-[256px] font-bold text-white lg:max-w-none"
                    style={{
                      fontFamily: "var(--font-mulish)",
                      fontSize: "24px",
                      lineHeight: 1.44,
                    }}
                  >
                    Your money sits in escrow until the job is done.
                  </h3>
                  <p
                    className="max-w-[242px] text-[#a7a8a9] lg:max-w-[410px]"
                    style={cardBody}
                  >
                    When you book, we hold the funds. The creative gets a small
                    upfront release on acceptance, the rest only when you confirm
                    the work. No more &quot;they took the deposit and
                    disappeared&quot;. No more &quot;they finished and ghosted on
                    payment&quot;
                  </p>
                </div>
              </div>

              {/* Payout card with range */}
              <div className="flex h-[209px] w-full max-w-[305px] flex-col justify-center rounded-[12px] bg-black px-[32.986px] py-[16.493px] lg:h-[259.763px] lg:w-[580px] lg:max-w-none lg:shrink-0">
                <div className="flex w-full flex-col gap-[35px]">
                  <div
                    className="flex flex-col"
                    style={{ letterSpacing: "1.6061px" }}
                  >
                    <span
                      className="text-[16px] text-[#707070] lg:text-[19.242px]"
                      style={{
                        fontFamily: "var(--font-mulish)",
                        lineHeight: 1.55,
                      }}
                    >
                      Total to Creative
                    </span>
                    <span
                      className="font-display whitespace-nowrap text-[32px] font-bold leading-[1.44] text-white lg:text-[43.981px]"
                    >
                      $85,000
                    </span>
                  </div>

                  {/* Mobile ships the whole control as one export (6665:16839) */}
                  <div className="relative h-[59px] w-full lg:hidden">
                    <Image
                      src="/images/escrow-range-mobile.svg"
                      alt=""
                      width={225}
                      height={14}
                      className="absolute left-0 top-0 h-[14.286px] w-[225px]"
                    />
                    <div
                      className="absolute left-0 top-[21.01px] flex w-[203px] items-center justify-between font-semibold whitespace-nowrap text-[#e17918]"
                      style={{
                        fontFamily: "var(--font-mulish)",
                        fontSize: "9.744px",
                        lineHeight: 1.55,
                        letterSpacing: "1.3042px",
                      }}
                    >
                      <span>Floor $40k</span>
                      <span>Your offer</span>
                    </div>
                  </div>

                  <div className="relative hidden h-[59.1px] w-full lg:block">
                    <div className="absolute left-[0.28px] top-[10.3px] h-[9px] w-full max-w-[495px] rounded-[26.114px] bg-[#414040]" />
                    <div
                      className="absolute left-0 top-[11px] h-[8.246px] w-[320.237px] max-w-full rounded-[26.114px]"
                      style={{
                        backgroundImage:
                          "linear-gradient(90deg, #fd5f00 0%, #e17918 100%)",
                      }}
                    />
                    <Image
                      src="/images/slider-knob.svg"
                      alt=""
                      width={30}
                      height={30}
                      className="absolute left-[309.26px] top-0 size-[30.237px]"
                    />
                    <div
                      className="absolute left-[-2px] top-[32.99px] flex w-full max-w-[369.716px] items-center justify-between font-semibold whitespace-nowrap text-[#e17918]"
                      style={{
                        fontFamily: "var(--font-mulish)",
                        fontSize: "16.493px",
                        lineHeight: 1.55,
                        letterSpacing: "1.6061px",
                      }}
                    >
                      <span>Floor $40k</span>
                      <span>Your offer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Mobile: one card as a carousel slide (6673:17351) */}
          <Reveal className="flex flex-col items-center gap-[12px] lg:hidden">
            <PriceCard />
            <CarouselDots count={5} size={6.169} />
          </Reveal>

          {/* Desktop: 3-up then 2-up */}
          <div className="hidden flex-col gap-[12px] lg:flex">
            <div className="flex flex-col items-center gap-[12px] lg:flex-row">
              <Reveal delay={0} className="w-full max-w-[325px] lg:max-w-[385.061px]"><PriceCard /></Reveal>
              <Reveal delay={80} className="w-full max-w-[325px] lg:max-w-[385.061px]"><PriceCard /></Reveal>
              <Reveal delay={160} className="w-full max-w-[325px] lg:max-w-[385.061px]"><PriceCard /></Reveal>
            </div>
            <div className="flex flex-col items-center gap-[11.309px] lg:flex-row">
              <Reveal delay={0} className="w-full max-w-[583px]"><PriceCard wide /></Reveal>
              <Reveal delay={100} className="w-full max-w-[583px]"><PriceCard wide /></Reveal>
            </div>
          </div>

          <div className="mt-[51px] flex justify-center lg:mt-[45px]">
            <CtaButtons />
          </div>
        </div>
      </div>
    </section>
  );
}
