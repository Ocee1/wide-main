import Image from "next/image";
import HeroStoreBadges from "./HeroStoreBadges";
import Reveal from "./Reveal";

/**
 * Full-bleed product visual that sits between the photo marquee and the
 * feature rows (Figma node 6488:9053).
 */
export default function AppShowcase() {
  return (
    <section id="app" aria-label="Wide Angu mobile app" className="relative">
      {/* Opaque, edge-to-edge render (6488:9054) — the phone is mounted on the
          scaffolding in-image, so no glow layer sits behind it. */}
      <Reveal>
        <Image
          src="/images/app-showcase.jpg"
          alt="The Wide Angu app open on the create your account screen"
          width={1440}
          height={1207}
          sizes="100vw"
          className="relative z-10 h-auto w-full"
        />
      </Reveal>

      <div className="relative z-10 -mt-4 flex justify-center pb-4 lg:hidden">
        <HeroStoreBadges />
      </div>
    </section>
  );
}
