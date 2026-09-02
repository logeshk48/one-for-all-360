import Reveal from "./Reveal";
import { concept } from "@/content/site";

export default function Section360() {
  return (
    <section id="concept" className="bg-ink py-24 text-paper md:py-32 lg:py-40">
      <div className="shell">
        <div className="grid gap-y-16 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="index-num text-paper/35">02 — THE IDEA</p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="display mt-8 text-[2.5rem] sm:text-5xl lg:text-[3.5rem]">{concept.headline}</h2>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-10 text-lg leading-snug font-medium text-paper md:text-xl">{concept.lead}</p>
            </Reveal>

            <Reveal delay={220}>
              <p className="mt-6 max-w-md text-base leading-relaxed text-paper/55">{concept.body}</p>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="relative">
              {concept.layers.map((layer, i) => (
                <Reveal key={layer.key} delay={120 + i * 110}>
                  <div className="group flex items-baseline gap-6 border-t border-paper/12 py-7 transition-colors duration-300 hover:border-accent/50 md:gap-10">
                    <span className="index-num w-8 shrink-0 text-paper/30 transition-colors duration-300 group-hover:text-accent">{"0" + (i + 1)}</span>
                    <span className="flex-1 text-2xl font-semibold tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">{layer.key}</span>
                    <span className="hidden max-w-[16ch] text-right text-sm leading-snug text-paper/45 sm:block">{layer.note}</span>
                  </div>
                </Reveal>
              ))}

              <Reveal delay={560}>
                <div className="mt-10 flex items-center gap-5">
                  <div className="h-px flex-1 bg-accent/40" />
                  <span className="eyebrow whitespace-nowrap text-paper/70">Connected through</span>
                  <div className="h-px flex-1 bg-accent/40" />
                </div>
              </Reveal>

              <Reveal delay={640}>
                <p className="mt-8 text-center text-xl font-semibold tracking-[0.08em] md:text-2xl">ONE FOR ALL <span className="text-accent">360°</span></p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}