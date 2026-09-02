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

        <Reveal>
          <div className="mt-24 flex flex-col gap-4 border-t border-mist pt-10 md:flex-row md:items-end md:justify-between">
            <h3 className="display max-w-[16ch] text-[clamp(1.75rem,3.5vw,3rem)]">{industriesSection.closingHeadline}</h3>
            <p className="eyebrow text-accent">{industriesSection.closingNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}