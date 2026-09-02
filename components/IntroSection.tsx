import RevealLine from "./RevealLine";
import IdeaNames from "./IdeaNames";
import IdeaBackdrop from "./IdeaBackdrop";
import Reveal from "./Reveal";
import { intro } from "@/content/site";

export default function IntroSection() {
  return (
    <section id="idea" className="relative">
      <div className="relative flex min-h-[100svh] items-center overflow-hidden py-16">
        <IdeaBackdrop />

        <div className="shell relative w-full">
          <div className="grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-14">
            <div className="lg:col-span-7">
              <h2 className="display text-[clamp(3rem,12.5vh,9.5rem)]">
                {intro.headline.map((line, i) => (
                  <RevealLine key={line} delay={i * 110}>{line}</RevealLine>
                ))}
              </h2>

              <Reveal delay={340}>
                <div className="mt-[3vh] h-px w-16 bg-accent" aria-hidden="true" />
              </Reveal>
            </div>

            <div className="lg:col-span-4 lg:col-start-9">
              <IdeaNames />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-ink py-28 text-paper md:py-44">
        <div className="shell text-center">
          <h3 className="display text-[clamp(2.5rem,8vw,6.5rem)]">
            <RevealLine>{intro.turn}</RevealLine>
          </h3>

          <div className="mx-auto mt-14 h-px w-24 bg-accent md:mt-20" aria-hidden="true" />

          <div className="mt-14 md:mt-20">
            <RevealLine delay={140}>
              <span className="block text-[clamp(1.125rem,2.4vw,1.75rem)] font-medium tracking-[-0.02em] text-paper/50">{intro.close}<span className="text-accent">360°</span></span>
            </RevealLine>
          </div>
        </div>
      </div>
    </section>
  );
}