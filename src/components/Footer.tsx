import Image from "next/image";
import { StoreBadge } from "./About";

const socials = [
  { icon: "/images/icon-linkedin.svg", label: "LinkedIn", href: "#" },
  { icon: "/images/icon-facebook.svg", label: "Facebook", href: "#" },
  { icon: "/images/icon-twitter.svg", label: "Twitter", href: "#" },
  { icon: "/images/icon-instagram.svg", label: "Instagram", href: "#" },
];

export default function Footer() {
  return (
    <footer id="download" className="px-6 pb-16 pt-8 sm:pb-24">
      <div className="mx-auto mb-14 flex max-w-3xl flex-wrap items-center justify-center gap-4">
        <StoreBadge type="apple" />
        <StoreBadge type="google" />
      </div>

      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-10 rounded-3xl border border-white/20 bg-[#1d1c1c]/60 p-8 sm:p-12 md:flex-row md:items-center">
        <h3 className="font-display max-w-md text-2xl font-bold leading-snug tracking-wide sm:text-3xl">
          Connect with Wide Angu on socials and via email
        </h3>

        <div className="flex flex-col items-start gap-6 md:items-end">
          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="opacity-80 transition-opacity hover:opacity-100"
              >
                <Image src={s.icon} alt="" width={32} height={32} />
              </a>
            ))}
          </div>
          <a
            href="mailto:info@wideangu.com"
            className="text-lg font-semibold tracking-wide"
          >
            info@wideangu.com
          </a>
        </div>
      </div>

      <p className="mt-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} WideAngu. All rights reserved.
      </p>
    </footer>
  );
}
