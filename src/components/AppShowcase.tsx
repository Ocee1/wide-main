import Image from "next/image";
import Glow from "./Glow";
import HeroStoreBadges from "./HeroStoreBadges";

/**
 * Full-bleed product visual that sits between the photo marquee and the
 * feature rows (Figma node 6488:9053).
 */
export default function AppShowcase() {
  return (
    <section id="app" aria-label="Wide Angu mobile app" className="relative">
      {/* Ellipse 190 — sits below the phone group in Figma's layer order */}
      <Glow x={622} y={424} size={326} blur={310} opacity={0.62} />
      {/* Transparent cut-out, so the glow reads around the hand while the
          hand itself occludes it. */}
      <Image
        src="/images/app-showcase2.png"
        alt="The Wide Angu app open on the create your account screen"
        width={1440}
        height={1207}
        className="relative z-10 h-auto w-full"
      />

      <div className="relative z-10 -mt-4 flex justify-center pb-4 lg:hidden">
        <HeroStoreBadges />
      </div>
    </section>
  );
}
