import Image from "next/image";

const images = [
  "/images/marquee-1.jpg",
  "/images/marquee-2.png",
  "/images/marquee-3.png",
  "/images/marquee-4.png",
  "/images/marquee-5.png",
];

const track = [...images, ...images];

// Curve measured from the Figma design: top edge sags down toward
// center, bottom edge rises up toward center, forming a gently
// curved "film reel" band across the full width. Inset slightly
// further than the line strokes so a gap is visible between the
// image edge and the curved line.
const CLIP_PATH =
  "M0,0.0825 Q0.5,0.2625 1,0.0825 L1,0.9175 Q0.5,0.7375 0,0.9175 Z";

export default function ImageMarquee() {
  return (
    <section className="relative h-95 w-full overflow-hidden bg-black">
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="marquee-curve-clip" clipPathUnits="objectBoundingBox">
            <path d={CLIP_PATH} />
          </clipPath>
        </defs>
      </svg>

      <div
        className="h-full w-full"
        style={{ clipPath: "url(#marquee-curve-clip)" }}
      >
        <div className="animate-marquee flex h-full items-center gap-[38px]">
          {track.map((src, i) => (
            <div
              key={i}
              className="relative h-full w-[380px] shrink-0 bg-[#d9d9d9]"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="380px"
              />
            </div>
          ))}
        </div>
      </div>

      <svg
        className="pointer-events-none absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,4.5 Q50,22.5 100,4.5"
          fill="none"
          stroke="white"
          strokeWidth="0.4"
        />
        <path
          d="M0,95.5 Q50,77.5 100,95.5"
          fill="none"
          stroke="white"
          strokeWidth="0.4"
        />
      </svg>
    </section>
  );
}
