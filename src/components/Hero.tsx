import Image from "next/image";
import RotatingWord from "./RotatingWord";
import HeroStoreBadges from "./HeroStoreBadges";
import GetStartedButton from "./GetStartedButton";

const avatars = [
  "/images/avatar1.png",
  "/images/avatar2.png",
  "/images/avatar3.png",
  "/images/avatar4.png",
];

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-40 pb-20 sm:pt-44 sm:pb-24 md:pt-48 lg:pt-46"
      style={{
        // Figma's hero fill. Pinned to the design's 942px frame height so the
        // falloff matches regardless of how tall the section actually renders.
        backgroundImage:
          "linear-gradient(0.6053400605162267deg, rgb(0, 0, 0) 75.963%, rgb(253, 95, 0) 322.07%)",
        backgroundSize: "100% 942px",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Mesh texture behind the nav — 6665:16314 on mobile, a narrower block
          pinned to the right of centre on desktop. */}
      <div
        aria-hidden
        className="pointer-events-none absolute overflow-hidden opacity-40 lg:hidden"
        style={{
          left: "-7.681%",
          top: "-165px",
          width: "126.527%",
          height: "386px",
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

      <div className="animate-camera-left pointer-events-none absolute left-[7.2%] top-[113px] h-[42.94px] w-[54.96px] overflow-hidden xl:left-[7%] xl:top-[19%] xl:h-19.25 xl:w-24.75">
        <Image
          src="/images/camera.png"
          alt=""
          width={267}
          height={133}
          className="absolute max-w-none"
          style={{ left: "-78.54%", top: "-62%", width: "269.91%", height: "172.71%" }}
        />
      </div>
      <div className="animate-camera-right pointer-events-none absolute right-[4%] top-[269px] h-[53.42px] w-[44.73px] overflow-hidden xl:right-[6.6%] xl:top-[35%] xl:h-19.25 xl:w-24.75">
        <Image
          src="/images/camera.png"
          alt=""
          width={267}
          height={133}
          className="absolute max-w-none"
          style={{ left: "-78.54%", top: "-62%", width: "269.91%", height: "172.71%" }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-6 text-center [--h1-size:48px] lg:[--h1-size:clamp(1.75rem,4.4vw,4.5rem)]">
        <div className="mb-6 flex items-center gap-[6.8px] lg:gap-3">
          <div className="flex items-center">
            {avatars.map((src, i) => (
              <div
                key={src}
                className="relative -ml-[4.08px] size-[12.24px] overflow-hidden rounded-full first:ml-0 lg:-ml-1.5 lg:size-4.5"
                style={{ zIndex: avatars.length - i }}
              >
                <Image src={src} alt="" fill className="object-cover" />
              </div>
            ))}
          </div>
          <div className="text-left [--stat-size:11.85px] [--stat-sub-lh:12.92px] [--stat-sub-size:8.613px] lg:[--stat-size:25.64px] lg:[--stat-sub-lh:19px] lg:[--stat-sub-size:12.667px]">
            <p
              className="font-display font-bold leading-none text-white"
              style={{ fontSize: "var(--stat-size)" }}
            >
              1.8M+ Users
            </p>
            <p
              className="mt-1 text-white"
              style={{
                fontFamily: "var(--font-mulish)",
                fontSize: "var(--stat-sub-size)",
                lineHeight: "var(--stat-sub-lh)",
              }}
            >
              Read Our{" "}
              <a href="#stories" className="underline underline-offset-2">
                Success Stories
              </a>
            </p>
          </div>
        </div>

        <h1
          className="font-display w-full max-w-[335px] font-bold capitalize leading-[60px] lg:max-w-full lg:leading-tight lg:whitespace-nowrap"
          style={{ fontSize: "var(--h1-size)" }}
        >
          Capture Every Moment, <RotatingWord />
        </h1>

        <p
          className="mt-6 w-full text-center text-[#bbbfcc] [--body-max:302px] lg:[--body-max:876px]"
          style={{
            maxWidth: "var(--body-max)",
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

        {/* Mobile leads with the CTA; the store badges move below the app
            visual, matching the mobile frame. Desktop keeps the badges here. */}
        <div className="mt-10 flex items-center justify-center lg:hidden">
          <GetStartedButton />
        </div>
        <div className="mt-10 hidden flex-wrap items-center justify-center lg:flex">
          <HeroStoreBadges />
        </div>
      </div>
    </section>
  );
}
