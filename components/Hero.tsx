import EcosystemVisual from "./EcosystemVisual";
import Reveal from "./Reveal";
import { hero, industries } from "@/content/site";

export default function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 lg:pt-40">
      <div className="shell">
        <div className="grid items-center gap-y-10 lg:grid-cols-12 lg:gap-x-10">
          <div className="lg:col-span-6 xl:col-span-5">
            <Reveal>
              <p className="eyebrow text-ink/45">{hero.eyebrow}</p>
            </Reveal>

            <Reveal delay={90}>
              <h1 className="display mt-6 text-[3.25rem] sm:text-[4.5rem] lg:text-[5rem] xl:text-[6rem]">
                {hero.headline[0]}
                <br />
                One Place<span className="text-accent">.</span>
              </h1>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-8 max-w-md text-base leading-relaxed text-ink/65 md:text-lg">
                {hero.support}
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
                <a href={hero.primaryCta.href} className="btn btn-primary">
                  {hero.primaryCta.label}
                </a>
                <a href={hero.secondaryCta.href} className="btn btn-ghost">
                  {hero.secondaryCta.label}
                </a>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 xl:col-span-6 xl:col-start-7">
            <Reveal delay={200} className="mx-auto max-w-[34rem] lg:max-w-none">
              <EcosystemVisual />
            </Reveal>
          </div>
        </div>

        {/* Industry strip — also carries the labels on mobile */}
        <Reveal delay={340}>
          <div className="mt-8 border-t border-mist py-6 md:mt-14">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {industries.map((industry) => (
                <li key={industry.short} className="eyebrow text-ink/40">
                  {industry.short}
                </li>
              ))}
              <li className="eyebrow text-accent">+ More</li>
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}