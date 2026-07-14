"use client";

import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "FAQ", href: "#faq" },
];

const SCROLL_DURATION = 1500;

function easeOut(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function smoothScrollTo(target: HTMLElement) {
  const startY = window.scrollY;
  const targetY = startY + target.getBoundingClientRect().top;
  const startTime = performance.now();

  function step(now: number) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION, 1);
    window.scrollTo(0, startY + (targetY - startY) * easeOut(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  const target = document.querySelector(href);
  if (target instanceof HTMLElement) {
    e.preventDefault();
    smoothScrollTo(target);
  }
}

export default function Navbar() {
  return (
    <nav
      className="fixed left-1/2 top-9 z-50 w-[min(94vw,604px)] h-[67px] -translate-x-1/2 flex flex-col items-start rounded-[44px] pl-[42px] relative overflow-hidden"
      style={{
        boxShadow:
          "0px 10px 10px 0px rgba(0,0,0,0.05), 0px 4px 4px 0px rgba(0,0,0,0.05), 0px 1px 22px 0px rgba(255,255,255,0.1)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 h-16.75 rounded-[44px] pointer-events-none bg-[rgba(255,255,255,0.05)]"
        style={{ backdropFilter: "blur(10px)", WebkitBackdropFilter: "blur(10px)" }}
      />

      <div className="relative flex h-full w-full items-center gap-[46px]">
        <div className="flex shrink-0 items-center gap-[46px]">
          <Link
            href="/"
            className="relative shrink-0"
            style={{ width: "64.013px", height: "44px" }}
          >
            <Image
              src="/images/logo.png"
              alt="WideAngu"
              width={90}
              height={62}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-contain"
              priority
            />
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={(e) => handleNavClick(e, l.href)}
                className="flex items-center gap-2 text-white transition-opacity hover:opacity-80"
                style={{
                  fontFamily: "var(--font-mulish)",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                }}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <a
          href="#download"
          className="flex shrink-0 items-center justify-center gap-1 rounded-[44px] border-[5px] border-[#434343] bg-[#f2f2f2] py-4 transition-transform hover:scale-[1.03]"
          style={{ width: "198px", height: "67px" }}
        >
          <p
            className="text-[#434343]"
            style={{
              fontFamily: "var(--font-mulish)",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "24px",
            }}
          >
            Capture Now
          </p>
          <Image
            src="/images/arrow-up.svg"
            alt=""
            width={24}
            height={24}
            style={{ transform: "rotate(89deg)" }}
          />
        </a>
      </div>

      <div
        aria-hidden
        className="absolute inset-0 rounded-[44px] pointer-events-none"
        style={{
          boxShadow:
            "inset 0px 0px 20px 0px rgba(198,204,255,0.2), inset 0px 1px 3px 0px rgba(199,220,255,0.35)",
        }}
      />
    </nav>
  );
}
