import Image from "next/image";

export default function HeroStoreBadges() {
  return (
    <div className="flex items-start gap-[16.209px]">
      <a
        href="#download"
        className="flex shrink-0 items-center justify-center gap-2 rounded-[78.031px] border-[0.709px] border-white"
        style={{ height: "46.109px", width: "158.191px", padding: "8.512px 22.7px" }}
      >
        <Image
          src="/images/hero-apple-icon.svg"
          alt=""
          width={19.632}
          height={23.526}
        />
        <div className="flex flex-col items-start justify-center gap-[2px]">
          <Image
            src="/images/hero-apple-subtext.svg"
            alt=""
            width={73.332}
            height={6.441}
          />
          <Image
            src="/images/hero-apple-text.svg"
            alt="Download on the App Store"
            width={75.427}
            height={16.058}
          />
        </div>
      </a>

      <a
        href="#download"
        className="flex h-[46.376px] w-[158.19px] shrink-0 items-center justify-center rounded-[78.031px] border-[0.709px] border-white"
      >
        <Image
          src="/images/hero-google-play.svg"
          alt="Get it on Google Play"
          width={109.4}
          height={25.15}
          className="-scale-y-100"
        />
      </a>
    </div>
  );
}
