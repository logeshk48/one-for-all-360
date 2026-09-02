import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import Section360 from "@/components/Section360";
import IndustryGrid from "@/components/IndustryGrid";
import ArcProgress from "@/components/ArcProgress";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <IntroSection />
        <Section360 />
        <IndustryGrid />
      </main>
      <ArcProgress />
    </>
  );
}