"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Company", href: "#about", dropdown: true },
  { label: "Solutions", href: "#features", dropdown: true },
  { label: "Categories", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Contact Us", href: "#footer" },
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
  if (href === "#") return;
  const target = document.querySelector(href);
  if (target instanceof HTMLElement) {
    e.preventDefault();
    smoothScrollTo(target);
  }
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Close on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const closeAnd = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setOpen(false);
    handleNavClick(e, href);
  };

  return (
    <nav className="fixed inset-x-0 top-0 z-50 flex h-[72px] items-center justify-between px-6 lg:h-[91px] lg:px-[79px]">
      <div className="flex items-center gap-9 lg:gap-[148px]">
        <Link
          href="/"
          className="relative h-[35.18px] w-[51.18px] shrink-0 lg:h-[54.989px] lg:w-[80px]"
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

        <div className="hidden items-center gap-[46px] lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href)}
              className="flex items-center gap-2 text-[#bababa] transition-opacity hover:opacity-80"
              style={{
                fontFamily: "var(--font-mulish)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                letterSpacing: "0%",
              }}
            >
              {l.label}
              {l.dropdown && (
                <Image src="/images/chevron-dropdown.svg" alt="" width={24} height={24} />
              )}
            </a>
          ))}
        </div>
      </div>

      <div className="hidden items-center gap-[30px] lg:flex">
        <a
          href="https://app.wideangu.com"
          className="text-[16px] font-semibold text-white"
          style={{ fontFamily: "var(--font-mulish)" }}
        >
          Get Started
        </a>

        <a
          href="https://app.wideangu.com"
          className="flex shrink-0 items-center justify-center gap-2 rounded-[40px] bg-white px-2 py-4 transition-transform hover:scale-[1.03]"
          style={{ width: "179px", height: "56px" }}
        >
          <p
            className="font-bold text-black"
            style={{ fontFamily: "var(--font-mulish)", fontSize: "16px", lineHeight: 1.4 }}
          >
            Instant Booking
          </p>
        </a>
      </div>

      {/* Mobile: hamburger + disclosure panel */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex size-10 shrink-0 items-center justify-center lg:hidden"
      >
        <Image src="/images/menu.svg" alt="" width={40} height={40} className="size-10" />
      </button>

      {open && (
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="fixed inset-0 top-[72px] -z-10 cursor-default bg-black/60 backdrop-blur-xl lg:hidden"
        />
      )}

      {open && (
        <div
          id="mobile-nav"
          className="absolute inset-x-4 top-[72px] flex flex-col gap-1 rounded-[16px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-2xl lg:hidden"
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={(e) => closeAnd(e, l.href)}
              className="rounded-lg px-3 py-3 text-[#bababa] transition-colors hover:bg-white/5 hover:text-white"
              style={{
                fontFamily: "var(--font-mulish)",
                fontSize: "16px",
                lineHeight: "24px",
              }}
            >
              {l.label}
            </a>
          ))}

          <a
            href="https://app.wideangu.com"
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-3 text-[16px] font-semibold text-white"
            style={{ fontFamily: "var(--font-mulish)" }}
          >
            Get Started
          </a>

          <a
            href="https://app.wideangu.com"
            onClick={() => setOpen(false)}
            className="mt-1 flex h-[56px] items-center justify-center gap-2 rounded-[40px] bg-white"
          >
            <span
              className="font-bold text-black"
              style={{ fontFamily: "var(--font-mulish)", fontSize: "16px", lineHeight: 1.4 }}
            >
              Instant Booking
            </span>
          </a>
        </div>
      )}
    </nav>
  );
}
