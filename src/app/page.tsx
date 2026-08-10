import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ImageMarquee from "@/components/ImageMarquee";
import AppShowcase from "@/components/AppShowcase";
import Features from "@/components/Features";
import GetStartedButton from "@/components/GetStartedButton";
import EveryCreative from "@/components/EveryCreative";
import TrustBadges from "@/components/TrustBadges";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import UseCases from "@/components/UseCases";
import PayoutSection from "@/components/PayoutSection";
import Testimonials from "@/components/Testimonials";
import Faq from "@/components/Faq";
import HeroStoreBadges from "@/components/HeroStoreBadges";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <ImageMarquee />
        <AppShowcase />
        <Features />
        {/* Design puts ~302px of air below this CTA before the next section */}
        <div className="flex justify-center pb-[87px] lg:pb-[206px]">
          <GetStartedButton />
        </div>
        <EveryCreative />
        <div className="flex justify-center pb-16 pt-[84px] lg:pb-[298px] lg:pt-[28px]">
          <GetStartedButton label="Sign Up Now!" />
        </div>
        <TrustBadges />
        <HowItWorks />
        {/* Mobile-only CTA between the steps and the escrow panel (6671:17059) */}
        <div className="flex justify-center pb-[69px] pt-[70px] lg:hidden">
          <GetStartedButton mobileArrow={false} />
        </div>
        <TrustSection />
        <UseCases />
        <PayoutSection />
        <Testimonials />
        {/* Mobile repeats the store badges between the stories and the FAQ
            (6665:14225) — laid out horizontally to match AppShowcase. */}
        <div className="flex justify-center px-6 pb-[111px] pt-20 lg:hidden">
          <HeroStoreBadges />
        </div>
        <Faq />
        <Footer />
      </main>
    </>
  );
}
