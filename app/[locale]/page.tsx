import { Hero } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { PainPoints } from "@/components/sections/pain-points";
import { AiDemo } from "@/components/sections/ai-demo";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Features } from "@/components/sections/features";
import { Subjects } from "@/components/sections/subjects";
import { ParentsBlock } from "@/components/sections/parents-block";
import { ResultsCarousel } from "@/components/sections/results-carousel";
import { Pricing } from "@/components/sections/pricing";
import { Guarantee } from "@/components/sections/guarantee";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PainPoints />
      <AiDemo />
      <HowItWorks />
      <Features />
      <Subjects />
      <ParentsBlock />
      <ResultsCarousel />
      <Pricing />
      <Guarantee />
      <Faq />
      <FinalCta />
    </>
  );
}
