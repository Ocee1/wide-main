import Image from "next/image";
import type { CSSProperties } from "react";

const mulish: CSSProperties = { fontFamily: "var(--font-mulish)" };

const linkStyle: CSSProperties = {
  ...mulish,
  fontSize: "16px",
  lineHeight: 1.65,
  letterSpacing: "1.5528px",
};

const headingStyle: CSSProperties = {
  ...mulish,
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: 1.65,
  letterSpacing: "1.5528px",
};

const columns = [
  {
    heading: "PRODUCT",
    width: "153px",
    links: [
      { label: "For Clients", href: "#" },
      { label: "For Creatives", href: "#for-creatives" },
      { label: "Browse Creatives", href: "#creatives" },
      { label: "About Us", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Pricing", href: "#" },
    ],
  },
  {
    heading: "COMPANY",
    width: "181px",
    links: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Trust & safety", href: "#trust" },
      { label: "Client experience", href: "#" },
      { label: "Creative experience", href: "#" },
    ],
  },
  {
    heading: "LEGAL",
    width: "153px",
    links: [
      { label: "Terms of service", href: "#" },
      { label: "Privacy policy", href: "#" },
      { label: "Refund policy", href: "#" },
      { label: "Dispute policy", href: "#" },
    ],
  },
];

// Each glyph keeps its own intrinsic size from the design — they are not a
// uniform square, so forcing them into one box distorts them.
const socials = [
  {
    icon: "/images/social-facebook.svg",
    label: "Facebook",
    w: 9.375,
    h: 14.625,
  },
  {
    icon: "/images/social-instagram.svg",
    label: "Instagram",
    w: 13.125,
    h: 13.125,
  },
  {
    icon: "/images/social-twitter.svg",
    label: "Twitter",
    w: 16.125,
    h: 13.147,
  },
  { icon: "/images/social-email.svg", label: "Email", w: 14.625, h: 11.625 },
];

const devices = [
  { src: "/images/footer-dev-1.png", width: 329.247, height: 139.463 },
  { src: "/images/footer-dev-2.png", width: 484.504, height: 250 },
  { src: "/images/footer-dev-3.png", width: 329.545, height: 139.463 },
];

/**
 * Mobile footer (6665:14297). The frame is rotated 180° with every child also
 * at 180°, so positions here are the un-rotated equivalents
 * (`visual = 411 - local - size`), kept on the frame's own 411px canvas and
 * centred — laying them out as percentages of the viewport skews the whole
 * block left of centre at 390.
 */
function MobileFooter() {
  const mobileLink: CSSProperties = { ...linkStyle, fontSize: "12px" };
  const mobileHeading: CSSProperties = { ...headingStyle, fontSize: "14px" };

  return (
    <div className="flex w-full justify-center overflow-hidden lg:hidden">
      <div className="relative h-[1388px] w-[411px] shrink-0">
        {/* Newsletter */}
        <div className="absolute left-[56px] top-[33px] flex h-[60px] w-[287px] flex-col items-center justify-center gap-[4px] text-center">
          <h3
            className="whitespace-nowrap text-[#bbbfcc]"
            style={{ ...headingStyle, fontSize: "18px" }}
          >
            JOIN OUR NEWSLETTER
          </h3>
          <p className="text-[#7f828b]" style={linkStyle}>
            Keep up to date with everything
          </p>
        </div>

        <form
          className="absolute left-[56px] top-[120px] h-[56px] w-[299px] overflow-hidden rounded-[73px] bg-white"
          action="#"
        >
          <label htmlFor="newsletter-email-mobile" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email-mobile"
            type="email"
            placeholder="Enter your email"
            className="h-full w-full bg-transparent pl-[23px] pr-[70px] text-[rgba(16,16,17,0.69)] outline-none placeholder:text-[rgba(16,16,17,0.69)]"
            style={{ ...mulish, fontSize: "14px", letterSpacing: "1px" }}
          />
          <button
            type="submit"
            aria-label="Subscribe"
            className="absolute right-0 top-0 flex h-[56px] w-[62px] items-center justify-center rounded-r-[73px]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #fd5f00 0%, #f1392f 100%)",
            }}
          >
            <Image
              src="/images/chevron-right-white.svg"
              alt=""
              width={28}
              height={28}
              className="size-7"
            />
          </button>
        </form>

        {/* Vertical Wide Angu lockup */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[67px] top-[316px] flex h-[268px] w-[90px] items-center justify-center"
        >
          <div className="flex-none rotate-[270deg]">
            <Image
              src="/images/footer-lockup.png"
              alt=""
              width={1046}
              height={336}
              sizes="300px"
              className="h-[90px] w-[268px] max-w-none"
            />
          </div>
        </div>

        {/* Link columns */}
        <div className="absolute right-[5px] top-[323.5px] flex w-[181px] flex-col gap-[57px]">
          {columns.map((col) => (
            <div key={col.heading} className="flex flex-col gap-[12px]">
              <h3 className="text-[#bbbfcc]" style={mobileHeading}>
                {col.heading}
              </h3>
              <div
                className="flex flex-col"
                style={{ gap: col.heading === "LEGAL" ? "12px" : "8px" }}
              >
                {col.links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    className="whitespace-nowrap text-[#7f828b] transition-colors hover:text-white"
                    style={mobileLink}
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Socials run as a column on mobile */}
        <div className="absolute left-[86px] top-[645px] flex flex-col gap-[39px]">
          {socials.map((s) => (
            <a
              key={s.label}
              href="#"
              aria-label={s.label}
              className="relative flex size-[36px] items-center justify-center rounded-[100px] transition-transform hover:scale-105"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #f1392f 0%, #fd5f00 97.596%)",
              }}
            >
              <Image
                src={s.icon}
                alt=""
                width={Math.round(s.w)}
                height={Math.round(s.h)}
                style={{ width: `${s.w}px`, height: `${s.h}px` }}
              />
            </a>
          ))}
        </div>

        <div className="absolute left-[40px] top-[1004px] h-px w-[330px] bg-white/20" />

        <p
          className="absolute left-0 top-[1022px] w-full text-center whitespace-nowrap text-[#7f828b]"
          style={mobileLink}
        >
          © 2026 Wide Angu. All rights reserved.
        </p>

        {/* Decorative device mockups, clipped by the footer's bottom edge */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-[52px] top-[1098px] flex flex-col gap-[83px] opacity-[0.34]"
        >
          {[devices[0], devices[2]].map((d) => (
            <Image
              key={d.src}
              src={d.src}
              alt=""
              width={Math.round(d.width * 2)}
              height={Math.round(d.height * 2)}
              sizes="400px"
              className="max-w-none"
              style={{ width: `${d.width}px`, height: `${d.height}px` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer id="download" className="relative overflow-hidden">
      <Image
        src="/images/footer-bg.png"
        alt=""
        fill
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rotate-180 object-fill object-bottom"
      />

      {/* Vertical Wide Angu lockup */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-[91px] top-[78px] hidden h-[587.578px] w-[188.864px] items-center justify-center xl:flex"
      >
        <div className="flex-none rotate-[270deg]">
          <Image
            src="/images/footer-lockup.png"
            alt=""
            width={1046}
            height={336}
            sizes="600px"
            className="h-[188.864px] w-[587.578px] max-w-none"
          />
        </div>
      </div>

      {/* Decorative device mockups along the bottom */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-26px] left-[78.6px] hidden items-end gap-[83px] opacity-[0.34] xl:flex"
      >
        {devices.map((d) => (
          <Image
            key={d.src}
            src={d.src}
            alt=""
            width={Math.round(d.width * 2)}
            height={Math.round(d.height * 2)}
            sizes="500px"
            className="max-w-none"
            style={{ width: `${d.width}px`, height: `${d.height}px` }}
          />
        ))}
      </div>

      <MobileFooter />

      <div className="relative mx-auto hidden max-w-[1440px] px-6 pb-[380px] pt-[110px] lg:block xl:pl-[331px] xl:pr-[96px]">
        {/* Link columns + newsletter */}
        <div className="flex flex-col gap-16 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-wrap gap-12 lg:flex-nowrap lg:gap-[77px]">
            {columns.map((col) => (
              <div
                key={col.heading}
                className="flex shrink-0 flex-col gap-[12px]"
                style={{ width: col.width }}
              >
                <h3 className="text-[#bbbfcc]" style={headingStyle}>
                  {col.heading}
                </h3>
                <div className="flex flex-col gap-[12px]">
                  {col.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className="whitespace-nowrap text-[#7f828b] transition-colors hover:text-white"
                      style={linkStyle}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-[4px] lg:w-[299px]">
            <h3
              className="whitespace-nowrap text-[#bbbfcc]"
              style={{ ...headingStyle, fontSize: "22px" }}
            >
              JOIN OUR NEWSLETTER
            </h3>
            <p className="text-[#7f828b]" style={linkStyle}>
              Keep up to date with everything
            </p>

            <form
              className="relative mt-[27px] h-[56px] w-full max-w-[299px] overflow-hidden rounded-[73px] bg-white"
              action="#"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Enter your email"
                className="h-full w-full bg-transparent pl-[17px] pr-[70px] text-[rgba(16,16,17,0.69)] outline-none placeholder:text-[rgba(16,16,17,0.69)]"
                style={{ ...mulish, fontSize: "16px", letterSpacing: "1px" }}
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="absolute right-0 top-0 flex h-[56px] w-[62px] items-center justify-center rounded-r-[73px]"
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, #fd5f00 0%, #f1392f 100%)",
                }}
              >
                <Image
                  src="/images/chevron-right-white.svg"
                  alt=""
                  width={28}
                  height={28}
                  className="size-7"
                />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-[69px] h-px w-full bg-white/20" />

        <div className="mt-[28px] flex flex-col-reverse items-start gap-8 sm:flex-row sm:items-center sm:justify-between">
          <p
            className="whitespace-nowrap text-[#7f828b]"
            style={{ ...linkStyle, fontSize: "14px" }}
          >
            © 2026 Wide Angu. All rights reserved.
          </p>

          <div className="flex items-start gap-6 lg:gap-[54px]">
            {socials.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="relative flex size-[36px] items-center justify-center rounded-[100px] transition-transform hover:scale-105"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, #f1392f 0%, #fd5f00 97.596%)",
                }}
              >
                <Image
                  src={s.icon}
                  alt=""
                  width={Math.round(s.w)}
                  height={Math.round(s.h)}
                  style={{ width: `${s.w}px`, height: `${s.h}px` }}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
