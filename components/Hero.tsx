import PillLink from "./PillLink";
import HeroSketch from "./HeroSketch";
import { hero, industries } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden pt-28 pb-14">
      <div className="bg-in pointer-events-none absolute inset-0 hero-glow" aria-hidden="true" />
      <div className="bg-in pointer-events-none absolute inset-0 hero-grid" aria-hidden="true" />
      <HeroSketch />
      <div className="bg-in pointer-events-none absolute inset-0 hero-grain" aria-hidden="true" />

      <div className="shell relative">
        <div className="mx-auto max-w-5xl text-center">
          <p className="rise eyebrow text-ink/40" style={{ animationDelay: "0.15s" }}>{hero.eyebrow}</p>

          <h1 className="display mt-8 text-[clamp(2.75rem,9.5vw,7rem)]">
            <span className="line-mask">
              <span className="line-inner" style={{ animationDelay: "0.3s" }}>Everything.</span>
            </span>
            <span className="line-mask">
              <span className="line-inner" style={{ animationDelay: "0.45s" }}>One Place<span className="text-accent">.</span></span>
            </span>
          </h1>

          <div className="widen mx-auto mt-12 h-px w-32 bg-ink/15" aria-hidden="true" />

          <p className="rise mx-auto mt-10 max-w-xl text-base leading-relaxed text-ink/55 md:text-lg" style={{ animationDelay: "0.85s" }}>{hero.support}</p>

          <div className="rise mt-11 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4" style={{ animationDelay: "1s" }}>
            <PillLink href={hero.primaryCta.href} label={hero.primaryCta.label} variant="solid" />
            <PillLink href={hero.secondaryCta.href} label={hero.secondaryCta.label} variant="line" />
          </div>
        </div>
      </div>

      <div className="shell relative mt-20 md:mt-24">
        <div className="rise hero-hairline h-px w-full" style={{ animationDelay: "1.15s" }} aria-hidden="true" />
        <ul className="rise mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2" style={{ animationDelay: "1.25s" }}>
          {industries.map((industry) => (
            <li key={industry.short} className="eyebrow text-ink/30">{industry.short}</li>
          ))}
          <li className="eyebrow text-accent">+ More</li>
        </ul>
      </div>
    </section>
  );
}