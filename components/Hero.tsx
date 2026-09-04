import PillLink from "./PillLink";
import HeroSketch from "./HeroSketch";
import { hero, heroFeatures } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-36 pb-12">
      <div className="bg-in pointer-events-none absolute inset-0 hero-glow" aria-hidden="true" />
      <div className="bg-in pointer-events-none absolute inset-0 hero-grid" aria-hidden="true" />

      <div className="earth-in pointer-events-none absolute inset-x-0 bottom-0" aria-hidden="true">
        <img src="/earth.jpg" alt="" className="earth-img block w-full select-none" />
      </div>

      <HeroSketch />
      <div className="bg-in pointer-events-none absolute inset-0 hero-grain" aria-hidden="true" />

      <div className="shell relative">
        <div className="mx-auto max-w-5xl text-center">
          <p className="rise eyebrow text-ink/40" style={{ animationDelay: "0.15s" }}>{hero.eyebrow}</p>

          <h1 className="display mt-8 text-[clamp(2.75rem,8.5vw,6rem)]">
            <span className="line-mask">
              <span className="line-inner" style={{ animationDelay: "0.3s" }}>Everything.</span>
            </span>
            <span className="line-mask">
              <span className="line-inner" style={{ animationDelay: "0.45s" }}>One Place<span className="text-accent">.</span></span>
            </span>
          </h1>

          <div className="widen mx-auto mt-9 h-px w-32 bg-ink/15" aria-hidden="true" />

          <p className="rise mx-auto mt-8 max-w-xl text-base leading-relaxed text-ink/55 md:text-lg" style={{ animationDelay: "0.85s" }}>{hero.support}</p>

          <div className="rise mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4" style={{ animationDelay: "1s" }}>
            <PillLink href={hero.primaryCta.href} label={hero.primaryCta.label} variant="solid" />
            <PillLink href={hero.secondaryCta.href} label={hero.secondaryCta.label} variant="line" />
          </div>
        </div>
      </div>

      <div className="shell relative mt-14 md:mt-16">
        <div className="rise hero-hairline h-px w-full" style={{ animationDelay: "1.15s" }} aria-hidden="true" />
        <ul className="rise grid grid-cols-2 gap-x-8 gap-y-6 pt-7 lg:grid-cols-4" style={{ animationDelay: "1.25s" }}>
          {heroFeatures.map((feature, i) => (
            <li key={feature.title} className="flex items-start gap-4">
              <span className="index-num pt-1 text-accent">{"0" + (i + 1)}</span>
              <span>
                <span className="block text-sm font-medium tracking-[-0.01em] md:text-base">{feature.title}</span>
                <span className="mt-1 block text-sm text-ink/45">{feature.note}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}