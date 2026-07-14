import Image from "next/image";

const features = [
  {
    image: "/images/feature-1.png",
    width: 470,
    height: 690,
    title: "Instant Capture Screen",
    description:
      "This screen presents a curated list of available photographers near the event location, enabling clients to select the photographer that best aligns with their preferences.",
    reverse: false,
  },
  {
    image: "/images/feature-2.png",
    width: 617,
    height: 670,
    title: "Instant Capture Screen",
    description:
      "This screen presents a curated list of available photographers near the event location, enabling clients to select the photographer that best aligns with their preferences.",
    reverse: true,
  },
  {
    image: "/images/feature-3.png",
    width: 470,
    height: 470,
    title: "Verified Lensmen",
    description:
      "This screen presents a curated list of available photographers near the event location, enabling clients to select the photographer that best aligns with their preferences.",
    reverse: false,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-16 sm:py-24">
      <div className="mx-auto flex max-w-5xl flex-col gap-20 px-6 sm:gap-28">
        {features.map((f, i) => (
          <div
            key={i}
            className={`flex flex-col items-center gap-8 sm:gap-12 md:flex-row ${
              f.reverse ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="relative w-full max-w-xs shrink-0 md:w-2/5">
              <Image
                src={f.image}
                alt={f.title}
                width={f.width}
                height={f.height}
                className="h-auto w-full object-contain"
              />
            </div>
            <div className="max-w-md text-center md:text-left">
              <h3 className="font-display text-3xl font-bold text-gradient sm:text-4xl">
                {f.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#cccccc]">
                {f.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
