import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <span className="mb-5 rounded-full bg-white/5 px-4 py-2 text-xs font-extrabold tracking-widest text-white">
          ABOUT US
        </span>

        <div className="relative">
          <Image
            src="/images/walking-photographer.svg"
            alt=""
            width={62}
            height={85}
            className="pointer-events-none absolute left-1/2 top-0 hidden -translate-x-1/2 -translate-y-1/3 opacity-90 sm:block"
          />
          <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            Revolutionizing Photography for{" "}
            <span className="text-gradient">Clients &amp; Creatives</span>
          </h2>
        </div>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75">
          At WideAngu, we connect clients with talented photographers and
          videographers in their area for instant bookings, seamless
          experiences, and unforgettable results. Whether it&rsquo;s a
          last-minute event or a carefully planned photoshoot, we&rsquo;ve
          got you covered.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <StoreBadge type="apple" />
          <StoreBadge type="google" />
        </div>
      </div>
    </section>
  );
}

export function StoreBadge({ type }: { type: "apple" | "google" }) {
  if (type === "apple") {
    return (
      <a
        href="#download"
        className="flex items-center gap-2 rounded-full border border-white/70 px-6 py-2.5 transition-colors hover:bg-white/10"
      >
        <Image src="/images/apple-icon.svg" alt="" width={20} height={24} />
        <span className="flex flex-col leading-tight text-left">
          <span className="text-[10px] text-white/80">Download on the</span>
          <span className="font-display text-base font-bold">App Store</span>
        </span>
      </a>
    );
  }
  return (
    <a
      href="#download"
      className="flex items-center gap-2 rounded-full border border-white/70 px-6 py-2.5 transition-colors hover:bg-white/10"
    >
      <Image
        src="/images/google-play.svg"
        alt="Get it on Google Play"
        width={88}
        height={20}
        className="-scale-y-100"
      />
    </a>
  );
}
