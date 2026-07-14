import Image from "next/image";
import RotatingWord from "./RotatingWord";
import HeroStoreBadges from "./HeroStoreBadges";

const avatars = [
  "/images/avatar1.png",
  "/images/avatar2.png",
  "/images/avatar3.png",
  "/images/avatar4.png",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 sm:pt-44 sm:pb-24 md:pt-48 lg:pt-46">
      <div
        aria-hidden
        className="pointer-events-none absolute hidden overflow-hidden opacity-40 lg:block"
        style={{
          left: "calc(50% + 38px)",
          top: "-244px",
          width: "682px",
          height: "505px",
        }}
      >
        <Image
          src="/images/hero-grid-texture.png"
          alt=""
          width={1387}
          height={505}
          className="absolute top-0 h-full max-w-none"
          style={{ left: "-55.13%", width: "203.42%" }}
        />
      </div>

      <Image
        src="/images/camera.png"
        alt=""
        width={330}
        height={165}
        className="animate-camera-left pointer-events-none absolute left-[1%] top-[26%] hidden w-[300px] opacity-90 xl:block xl:w-[330px]"
      />
      <Image
        src="/images/camera.png"
        alt=""
        width={285}
        height={143}
        className="animate-camera-right pointer-events-none absolute right-[1%] top-[38%] hidden w-[255px] opacity-90 xl:block xl:w-[285px]"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex items-center">
            {avatars.map((src, i) => (
              <div
                key={src}
                className="relative -ml-2 size-[26px] overflow-hidden rounded-full ring-2 ring-black first:ml-0"
                style={{ zIndex: avatars.length - i }}
              >
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="text-left">
            <p className="font-display text-lg font-bold leading-none">
              1.8M+ Users
            </p>
            <p className="mt-1 text-xs text-white/80">
              Read Our{" "}
              <a href="#stories" className="underline underline-offset-2">
                Success Stories
              </a>
            </p>
          </div>
        </div>

        <h1
          className="font-display w-full max-w-full font-bold leading-tight sm:whitespace-nowrap"
          style={{ fontSize: "clamp(1.75rem, 4.4vw, 4.5rem)" }}
        >
          Capture Every Moment, <RotatingWord />
        </h1>

        <p
          className="mt-6 w-full text-center text-[#bbbfcc]"
          style={{
            maxWidth: "876px",
            fontFamily: "var(--font-mulish)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "32.06px",
            letterSpacing: "0%",
          }}
        >
          Find professional photographers for weddings, portraits, events,
          and more. <span className="text-[#f47c10]">Clients</span> can
          easily book sessions, communicate directly with their chosen
          photographer, and enjoy secure payments with guaranteed stunning
          results.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center">
          <HeroStoreBadges />
        </div>
      </div>
    </section>
  );
}
