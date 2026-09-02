import Reveal from "./Reveal";
import { intro } from "@/content/site";

export default function IntroSection() {
  return (
    <section className="py-24 md:py-32 lg:py-40">
      <div className="shell">
        <div className="grid gap-y-12 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="index-num text-ink/35">01 — WHY</p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="display mt-8 max-w-[11ch] text-[2.75rem] sm:text-6xl lg:text-7xl">{intro.headline}</h2>
            </Reveal>

            <Reveal delay={140}>
              <div className="mt-10 h-px w-24 bg-accent" />
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9 lg:pt-28">
            <Reveal delay={160}>
              <p className="text-xl leading-snug font-medium md:text-2xl">{intro.lead}</p>
            </Reveal>

            <div className="mt-8 space-y-5">
              {intro.body.map((paragraph, i) => (
                <Reveal key={i} delay={220 + i * 80}>
                  <p className="text-base leading-relaxed text-ink/60">{paragraph}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}