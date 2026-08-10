import Image from "next/image";
import GetStartedButton from "./GetStartedButton";

const label = {
  fontFamily: "var(--font-mulish)",
  fontWeight: 700,
  lineHeight: 1.4,
} as const;

/**
 * The "Get Started / Capture Now" pair used under the trust and FAQ sections.
 */
export default function CtaButtons() {
  return (
    <div className="flex items-center">
      <GetStartedButton mobileArrow={false} />

      {/* Mobile keeps only the gradient pill (6671:17056) */}
      <a
        href="#download"
        className="hidden h-[56px] w-[188px] items-center justify-center gap-[10px] overflow-hidden rounded-[40px] px-[8px] py-[16px] transition-transform hover:scale-[1.03] lg:flex"
      >
        <span className="text-white" style={{ ...label, fontSize: "18px" }}>
          Capture Now
        </span>
        <Image
          src="/images/camera-icon.svg"
          alt=""
          width={24}
          height={24}
          className="size-6"
        />
      </a>
    </div>
  );
}
