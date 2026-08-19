import Image from "next/image";

/**
 * The standalone gradient "Get Started" pill (Figma component 6660:13615),
 * used on its own between sections and inside the CTA pair.
 */
export default function GetStartedButton({
  label = "Get Started",
  mobileArrow = true,
}: {
  /** The CTA under Every Creative reads "Sign Up Now!" (6688:17787). */
  label?: string;
  /** The pill inside the CTA pair drops the arrow on mobile (6671:17056). */
  mobileArrow?: boolean;
} = {}) {
  return (
    <a
      href="#download"
      className="flex h-[56px] w-[188px] items-center justify-center gap-[10px] overflow-hidden rounded-[144px] px-[8px] py-[16px] transition-[transform,box-shadow] duration-300 hover:scale-[1.03] hover:shadow-[0_12px_32px_-8px_rgba(246,11,50,0.55)] lg:w-[200px] lg:gap-[8px] lg:px-[16.814px] lg:py-[6px]"
      style={{
        backgroundImage:
          "linear-gradient(93.94deg, rgb(243,163,4) 33.183%, rgb(246,11,50) 131.7%)",
      }}
    >
      <span
        className="font-bold whitespace-nowrap text-white [--cta-size:16px] lg:[--cta-size:18px]"
        style={{
          fontFamily: "var(--font-mulish)",
          fontSize: "var(--cta-size)",
          lineHeight: 1.4,
        }}
      >
        {label}
      </span>
      <Image
        src="/images/arrow-right-bold.svg"
        alt=""
        width={24}
        height={24}
        className={`size-6 rotate-90 ${mobileArrow ? "" : "hidden lg:block"}`}
      />
    </a>
  );
}
