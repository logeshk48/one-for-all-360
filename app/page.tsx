import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import IndustryGrid from "@/components/IndustryGrid";
import JourneySection from "@/components/JourneySection";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <IntroSection />
        <IndustryGrid />
        <JourneySection />
      </main>
    </>
  );
}