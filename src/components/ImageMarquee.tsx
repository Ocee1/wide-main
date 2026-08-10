import Image from "next/image";

const images = [
  "/images/marquee-1.jpg",
  "/images/marquee-2.png",
  "/images/marquee-3.png",
  "/images/marquee-4.png",
  "/images/marquee-5.png",
];

const track = [...images, ...images];

// The band is cut by two very wide arcs. Because the clip is expressed in
// object-bounding-box units it scales with the element, so the desktop curve
// would read as a deep bow at phone widths — the mobile frame (6665:13844,
// rails 6665:13845 / 6665:13846) gets its own, much shallower geometry with the
// arc's vertex sitting just past the right edge.
const CLIP_PATH =
  "M0,0.0825 Q0.5,0.2625 1,0.0825 L1,0.9175 Q0.5,0.7375 0,0.9175 Z";
const CLIP_PATH_MOBILE =
  "M0,0.0921 Q0.5,0.1297 1,0.125 L1,0.8816 Q0.5,0.8819 0,0.9178 Z";

export default function ImageMarquee() {
  return (
    <section className="relative h-[304px] w-full overflow-hidden bg-black lg:h-95">
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="marquee-curve-clip" clipPathUnits="objectBoundingBox">
            <path d={CLIP_PATH} />
          </clipPath>
          <clipPath
            id="marquee-curve-clip-mobile"
            clipPathUnits="objectBoundingBox"
          >
            <path d={CLIP_PATH_MOBILE} />
          </clipPath>
        </defs>
      </svg>

      <div className="h-full w-full [clip-path:url(#marquee-curve-clip-mobile)] lg:[clip-path:url(#marquee-curve-clip)]">
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
        className="pointer-events-none absolute inset-0 h-full w-full lg:hidden"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M0,1.32 Q50,4.34 100,5.59"
          fill="none"
          stroke="white"
          strokeWidth="0.6"
        />
        <path
          d="M0,98.68 Q50,95.99 100,95.07"
          fill="none"
          stroke="white"
          strokeWidth="0.6"
        />
      </svg>

      <svg
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
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
