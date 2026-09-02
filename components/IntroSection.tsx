import RevealLine from "./RevealLine";
import IdeaNames from "./IdeaNames";
import Reveal from "./Reveal";
import { intro } from "@/content/site";

export default function IntroSection() {
  return (
    <section id="idea" className="relative">
      <div className="py-28 md:py-40">
        <div className="shell">
          <Reveal>
            <p className="index-num text-ink/35">{intro.label}</p>
          </Reveal>

          <div className="mt-14 grid gap-y-20 lg:grid-cols-12 lg:gap-x-16 lg:gap-y-0">
            <div className="lg:col-span-6">
              <h2 className="display text-[clamp(2.5rem,6.5vw,5.25rem)] lg:sticky lg:top-36">
                {intro.headline.map((line, i) => (
                  <RevealLine key={line} delay={i * 110}>{line}</RevealLine>
                ))}
              </h2>
            </div>

            <div className="lg:col-span-5 lg:col-start-8 lg:pt-6">
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