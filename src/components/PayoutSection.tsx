import Image from "next/image";
import type { CSSProperties } from "react";
import Reveal from "./Reveal";

const mulish: CSSProperties = { fontFamily: "var(--font-mulish)" };

const transactions = [
  { title: "Premium wedding package", meta: "Final release · today", amount: "+₦88,000", tone: "green" },
  // The orange row is the escrowed one (6671:17155)
  { title: "Premium wedding package", meta: "In escrow", amount: "+₦88,000", tone: "orange" },
  { title: "Premium wedding package", meta: "Final release · today", amount: "+₦88,000", tone: "green" },
] as const;

function gradientText(from: string, to: string): CSSProperties {
  return {
    backgroundImage: `linear-gradient(90deg, ${from} 0%, ${to} 100%)`,
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };
}

function WalletCard() {
  return (
    // Outer frame is 562 wide; the 7px stroke is inset so the inner column stays 542.
    // Mobile (6671:17068) runs the same card at 346 with a 5px stroke.
    <div className="w-full max-w-[346px] rounded-[16px] bg-[#141313] px-[7px] pb-[35px] pt-[10px] ring-5 ring-inset ring-[#414448] lg:max-w-[562px] lg:px-[10px] lg:ring-[7px]">
      <div className="flex w-full flex-col items-center gap-[17px] bg-[#141313] lg:gap-[35px]">
        {/* Balance header */}
        <div className="relative flex w-full flex-col items-start justify-center overflow-hidden rounded-t-[16px] px-[24px] py-[17px] lg:px-[25px] sm:h-[214px]">
          <Image
            src="/images/wallet-balance-bg.jpg"
            alt=""
            fill
            sizes="(min-width: 1024px) 562px, 100vw"
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-t-[16px] object-cover"
          />
          <div className="relative flex w-full max-w-[492px] flex-col gap-[25px]">
            <div className="flex w-full flex-col gap-[16px]">
              <div className="flex flex-col gap-[2px]">
                <span
                  className="text-[10px] font-medium text-[#7f7f7f] lg:text-[14px]"
                  style={{ ...mulish, lineHeight: 1.44, letterSpacing: "0.9053px" }}
                >
                  AVAILABLE BALANCE
                </span>
                <span
                  className="font-display text-[32px] font-bold text-white lg:text-[51.364px]"
                  style={{ lineHeight: 1.19, letterSpacing: "1.2505px" }}
                >
                  ₦425,000
                </span>
              </div>
              <div className="h-px w-full bg-white/20" />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-6">
              <div className="flex flex-col gap-[1.142px]">
                <span
                  className="text-[8px] font-medium whitespace-nowrap text-[#7f7f7f] lg:text-[11.42px]"
                  style={{ ...mulish, lineHeight: 1.44, letterSpacing: "0.6344px" }}
                >
                  IN ESCROW
                </span>
                <span
                  className="font-display text-[18px] font-bold text-[#fd5f00] lg:text-[31.402px]"
                  style={{ lineHeight: 1.19, letterSpacing: "0.7645px" }}
                >
                  ₦185,000
                </span>
              </div>
              <button
                type="button"
                className="flex h-[23.234px] w-[78px] items-center justify-center overflow-hidden rounded-[16.596px] bg-black px-[3.319px] py-[6.638px] lg:h-[56px] lg:w-[188px] lg:rounded-[40px] lg:px-[8px] lg:py-[16px]"
              >
                <span
                  className="text-[6.638px] font-bold whitespace-nowrap text-white lg:text-[16px]"
                  style={{ ...mulish, lineHeight: 1.4 }}
                >
                  Withdraw
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Transactions */}
        <div className="flex w-full max-w-[281px] flex-col gap-[17px] lg:max-w-[508px] lg:gap-[15px]">
          {transactions.map((t, i) => (
            <div
              key={i}
              className="flex h-[55px] w-full flex-col items-center justify-center rounded-[8px] border border-solid border-white bg-[#1d1d1d] px-[14px] py-[10px] lg:h-[75px] lg:px-[16px]"
            >
              <div className="flex w-full items-center justify-between gap-2 lg:gap-6">
                <div className="flex items-center gap-[16px]">
                  <span
                    className={`size-[9px] shrink-0 rounded-full ${
                      t.tone === "green" ? "bg-[#21ad2b]" : "bg-[#fd5f00]"
                    }`}
                  />
                  <div
                    className="flex w-[163px] shrink-0 flex-col gap-[4px] lg:w-auto"
                    style={{ letterSpacing: "1.1111px" }}
                  >
                    <span
                      className="text-[10px] font-bold text-white lg:text-[16px]"
                      style={{ ...mulish, lineHeight: 1.44 }}
                    >
                      {t.title}
                    </span>
                    <span
                      className="text-[10px] text-[#a7a8a9] lg:text-[12px]"
                      style={{ ...mulish, lineHeight: 1.55 }}
                    >
                      {t.meta}
                    </span>
                  </div>
                </div>
                <span
                  className={`text-[14px] font-bold whitespace-nowrap lg:text-[16px] ${
                    t.tone === "green" ? "text-[#21ad2b]" : "text-[#fd5f00]"
                  }`}
                  style={{ ...mulish, lineHeight: 1.44, letterSpacing: "1.1111px" }}
                >
                  {t.amount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ApplyButtons({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex-col items-center gap-[14px] lg:flex-row lg:flex-wrap ${className}`}
    >
      <a
        href="#download"
        className="flex h-[56px] w-[188px] items-center justify-center overflow-hidden rounded-[40px] px-[8px] py-[16px] transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(246,11,50,0.55)]"
        style={{
          backgroundImage:
            "linear-gradient(93.7deg, rgb(243,163,4) 33.183%, rgb(246,11,50) 131.7%)",
        }}
      >
        <span
          className="text-[16px] font-bold whitespace-nowrap text-white lg:text-[18px]"
          style={{ ...mulish, lineHeight: 1.4 }}
        >
          Apply to Join
        </span>
      </a>
      <a
        href="#how-it-works"
        className="flex h-[56px] w-[188px] items-center justify-center overflow-hidden rounded-[40px] border border-solid border-transparent px-[8px] py-[16px] transition-[transform,border-color] duration-300 hover:scale-[1.03] hover:border-white/40"
      >
        <span
          className="text-[16px] font-bold whitespace-nowrap text-white lg:text-[18px]"
          style={{ ...mulish, lineHeight: 1.4 }}
        >
          Learn more
        </span>
      </a>
    </div>
  );
}

export default function PayoutSection() {
  return (
    <section id="for-creatives" className="relative pt-[82px] lg:py-24">
      <div className="mx-auto flex max-w-[346px] flex-col items-center gap-[37px] lg:max-w-[1180px] lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:px-6">
        {/* Copy */}
        <Reveal className="flex w-full flex-col items-center gap-[42px] lg:items-start lg:gap-[49px]">
          <div className="flex w-full max-w-[294px] flex-col items-center gap-[16px] lg:max-w-none lg:items-start lg:gap-[32px]">
            <div className="flex flex-col items-center lg:items-start">
              <span className="rounded-[20.252px] bg-[rgba(255,153,58,0.07)] px-[6.751px] py-[5.625px] lg:rounded-[36px] lg:px-[12px] lg:py-[10px]">
                <span
                  className="text-[10.126px] font-bold lg:text-[18px]"
                  style={{
                    ...mulish,
                    lineHeight: 1.19,
                    letterSpacing: "0.8092px",
                    ...gradientText("#fd5f00", "#973900"),
                  }}
                >
                  For Creatives
                </span>
              </span>
              <h2
                className="font-display mt-0 text-center text-[28px] italic whitespace-nowrap text-white lg:mt-[15px] lg:text-left lg:text-[48px]"
                style={{
                  lineHeight: 1.19,
                  letterSpacing: "1.1686px",
                  fontWeight: 700,
                }}
              >
                Get paid{" "}
                <span style={gradientText("#f60b32", "#fd5f00")}>fairly</span>
                <span style={gradientText("#fd5f00", "#e17918")}>.</span>
                <br />
                Get paid{" "}
                <span style={gradientText("#fd5f00", "#f60b32")}>on time</span>
                <span className="text-[#ad6a3c]">.</span>
              </h2>
            </div>

            <p
              className="text-center text-[#bbbfcc] lg:max-w-[416px] lg:text-left"
              style={{
                ...mulish,
                fontSize: "16px",
                lineHeight: 1.55,
                letterSpacing: "1.1686px",
              }}
            >
              Wide Angu is built so good creatives can charge what they&rsquo;re
              worth and trust they&rsquo;ll actually receive it. No more deposits
              in the wind, no more delivering work to ghosting clients.
            </p>
          </div>

          {/* Mobile drops these below the wallet (6671:17166) */}
          <ApplyButtons className="hidden lg:flex" />
        </Reveal>

        {/* Wallet mockup */}
        <Reveal delay={120} className="w-full lg:w-[562px] lg:shrink-0">
          <WalletCard />
        </Reveal>

        <ApplyButtons className="mt-[5px] flex lg:hidden" />
      </div>
    </section>
  );
}
