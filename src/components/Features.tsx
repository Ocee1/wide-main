import Image from "next/image";
import Glow from "./Glow";

const DESCRIPTION =
  "This screen presents a curated list of available photographers near the event location, enabling clients to select the photographer that best aligns with their preferences.";

const features = [
  {
    title: "Instant Capture Screen",
    description: DESCRIPTION,
    image: "/images/feature-phone-1.png",
  },
  {
    title: "Verified Lensmen",
    description: DESCRIPTION,
    image: "/images/feature-phone-2.png",
  },
];

const headingGradient = {
  backgroundImage: "linear-gradient(90deg, #f37e0f 0%, #f52c27 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
} as const;

const bodyStyle = {
  fontFamily: "var(--font-mulish)",
  fontSize: "16px",
  lineHeight: 1.84,
  letterSpacing: "1.1686px",
} as const;

function Heading({ children, height }: { children: string; height: number }) {
  return (
    <h3
      className="font-display font-bold"
      style={{
        ...headingGradient,
        fontSize: "40px",
        lineHeight: `${height}px`,
        letterSpacing: "1.1686px",
      }}
    >
      {children}
    </h3>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative">
      {/* Desktop: pixel layout on the design's 995x623 canvas, 224px between rows */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:gap-[224px] lg:py-24">
        {/* Instant Capture Screen — phone left, copy right */}
        <div className="relative h-[623px] w-[995px]">
          <Image
            src="/images/feature-connector.svg"
            alt=""
            width={579}
            height={224}
            className="pointer-events-none absolute left-[198px] top-0 h-[222px] w-[576px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute rounded-full bg-[#fd5f00]"
            style={{
              left: "426px",
              top: "84px",
              width: "120.5px",
              height: "120.5px",
              filter: "blur(152px)",
            }}
          />
          <Image
            src={features[0].image}
            alt={features[0].title}
            width={588}
            height={1164}
            className="absolute left-[46px] top-[122px] w-[288.5px]"
          />
          <div className="absolute left-[506px] top-[250px] w-[468px]">
            <Heading height={62}>{features[0].title}</Heading>
            <p className="text-[#ccc]" style={bodyStyle}>
              {features[0].description}
            </p>
          </div>
        </div>

        {/* Verified Lensmen — copy left, phone right (connector mirrored) */}
        <div className="relative h-[623px] w-[995px]">
          {/* Ellipse 193 */}
          <Glow x={972.5} y={429} size={120.5} blur={152} />
          <Image
            src="/images/feature-connector.svg"
            alt=""
            width={579}
            height={224}
            className="pointer-events-none absolute left-[198px] top-0 z-10 h-[222px] w-[576px] -scale-x-100"
          />
          <div className="absolute left-[41px] top-[259px] z-10 w-[468px]">
            <Heading height={58}>{features[1].title}</Heading>
            <p className="text-[#ccc]" style={bodyStyle}>
              {features[1].description}
            </p>
          </div>
          <Image
            src={features[1].image}
            alt={features[1].title}
            width={588}
            height={1164}
            className="absolute left-[604px] top-[125px] z-10 w-[288.5px]"
          />
        </div>
      </div>

      {/* Mobile: phone above centred copy (mobile frame 6665:13975) */}
      <div className="flex flex-col gap-20 px-6 pb-6 pt-16 lg:hidden">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col items-center text-center">
            <Image
              src={f.image}
              alt={f.title}
              width={588}
              height={1164}
              className="w-[193.23px] max-w-full"
            />
            <div
              className="mt-[15px] w-full max-w-[341px]"
              style={{ letterSpacing: "1.1686px" }}
            >
              <h3
                className="font-display font-bold"
                style={{ ...headingGradient, fontSize: "28px", lineHeight: 2.27 }}
              >
                {f.title}
              </h3>
              <p
                className="text-[#ccc]"
                style={{ ...bodyStyle, lineHeight: 2.08 }}
              >
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
