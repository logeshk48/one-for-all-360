import Reveal from "./Reveal";
import RevealLine from "./RevealLine";
import EcosystemInteractive from "./EcosystemInteractive";
import { industriesSection } from "@/content/site";

export default function IndustryGrid() {
  return (
    <section id="ecosystem" className="py-28 md:py-40">
      <div className="shell">
        <div className="text-center">
          <h2 className="display mx-auto max-w-4xl text-[clamp(2.25rem,5.5vw,4.5rem)]">
            {industriesSection.headline.map((line, i) => (
              <RevealLine key={line} delay={i * 110}>{line}</RevealLine>
            ))}
          </h2>

          <Reveal delay={220}>
            <p className="mx-auto mt-9 max-w-md text-base leading-relaxed text-ink/50 md:text-lg">{industriesSection.lead}</p>
          </Reveal>
        </div>

        <div className="mt-20 md:mt-28">
          <EcosystemInteractive />
        </div>

        <div className="mt-28 border-t border-mist pt-16 md:mt-40 md:pt-20">
          <Reveal>
            <div className="h-px w-14 bg-accent" aria-hidden="true" />
          </Reveal>

          <div className="mt-10 grid gap-y-10 lg:grid-cols-12 lg:gap-x-16">
            <div className="lg:col-span-7">
              <h3 className="display text-[clamp(2.25rem,6vw,5rem)]">
                <RevealLine>{industriesSection.closingHeadline[0]}</RevealLine>
                <RevealLine delay={110}>
                  <span>getting <span className="text-accent">started.</span></span>
                </RevealLine>
              </h3>
            </div>

            <div className="lg:col-span-4 lg:col-start-9 lg:pt-4">
              <Reveal delay={200}>
                <p className="max-w-sm text-base leading-relaxed text-ink/50 md:text-lg">{industriesSection.closingBody}</p>
              </Reveal>

              <Reveal delay={280}>
                <p className="eyebrow mt-10 text-accent">{industriesSection.closingNote}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}