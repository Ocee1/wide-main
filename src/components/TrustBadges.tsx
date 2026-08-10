import Image from "next/image";
import type { CSSProperties } from "react";

const mulish: CSSProperties = { fontFamily: "var(--font-mulish)" };

const badges = [
  { title: "Escrow Protected", sub: "Fund held until delivered" },
  { title: "ID Verified", sub: "Two-Layer Verification" },
  { title: "Fair Pricing", sub: "Platform Enforced Minimums" },
  { title: "Dispute Resolution", sub: "Real Human, Real Fairness" },
];

function BadgeGroup({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center gap-[80px] pr-[80px] lg:gap-[161px] lg:pr-[161px]"
      aria-hidden={ariaHidden || undefined}
    >
      {badges.map((b) => (
        <div key={b.title} className="flex shrink-0 items-center gap-[16px]">
          <div className="flex shrink-0 items-center rounded-[12px] border-[0.5px] border-solid border-[#fd5f00] bg-[rgba(41,40,40,0.2)] p-[6px] lg:p-[10px]">
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
            className="flex w-[150px] shrink-0 flex-col justify-center lg:w-[204px]"
            style={{ letterSpacing: "1px" }}
          >
            <span
              className="font-bold text-white"
              style={{ ...mulish, fontSize: "clamp(14px, 3.6vw, 18px)", lineHeight: 1.65 }}
            >
              {b.title}
            </span>
            <span
              className="whitespace-nowrap text-[#606060]"
              style={{ ...mulish, fontSize: "clamp(11px, 2.8vw, 14px)", lineHeight: 1.65 }}
            >
              {b.sub}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TrustBadges() {
  return (
    <section
      aria-label="Platform guarantees"
      className="relative h-[61px] overflow-hidden bg-[rgba(72,72,72,0.2)] lg:h-[104px]"
    >
      <div className="absolute left-0 top-1/2 flex w-full -translate-y-1/2 overflow-hidden xl:left-[66px] xl:w-[1386px]">
        <div className="animate-marquee flex">
          <BadgeGroup />
          <BadgeGroup ariaHidden />
        </div>
      </div>
    </section>
  );
}
