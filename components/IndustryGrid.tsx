import Reveal from "./Reveal";
import { industries, industriesSection } from "@/content/site";

function IndustryMark({ index }: { index: number }) {
  const rotation = index * 58;
  const sweep = 90 + index * 26;
  const radius = 22;
  const start = { x: 28 + radius, y: 28 };
  const endAngle = (sweep * Math.PI) / 180;
  const end = { x: 28 + radius * Math.cos(endAngle), y: 28 + radius * Math.sin(endAngle) };
  const largeArc = sweep > 180 ? 1 : 0;
  const path = "M " + start.x + " " + start.y + " A " + radius + " " + radius + " 0 " + largeArc + " 1 " + end.x + " " + end.y;

  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true" className="shrink-0">
      <circle cx="28" cy="28" r={radius} stroke="var(--color-ink)" strokeWidth="1" opacity="0.15" />
      <g transform={"rotate(" + rotation + " 28 28)"}>
        <path d={path} stroke="var(--color-accent)" strokeWidth="1.75" strokeLinecap="round" fill="none" className="opacity-40 transition-opacity duration-500 group-hover:opacity-100" />
      </g>
      <circle cx="28" cy="28" r="2.5" fill="var(--color-ink)" />
    </svg>
  );
}

export default function IndustryGrid() {
  return (
    <section id="ecosystem" className="py-24 md:py-32 lg:py-40">
      <div className="shell">
        <div className="grid gap-y-6 lg:grid-cols-12 lg:items-end lg:gap-x-10">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="index-num text-ink/35">03 — THE ECOSYSTEM</p>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="display mt-8 text-[2.75rem] sm:text-6xl lg:text-7xl">{industriesSection.headline}</h2>
            </Reveal>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal delay={160}>
              <p className="text-lg leading-snug text-ink/60">{industriesSection.lead}</p>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          {industries.map((industry, i) => (
            <Reveal key={industry.short} delay={60 + i * 70}>
              <article className="group grid cursor-default grid-cols-1 items-center gap-x-8 gap-y-4 border-t border-mist py-8 transition-colors duration-300 hover:border-ink md:grid-cols-12 md:py-10">
                <div className="flex items-center gap-6 md:col-span-5">
                  <span className="index-num text-ink/30 transition-colors duration-300 group-hover:text-accent">{industry.num}</span>
                  <h3 className="text-3xl font-semibold tracking-[-0.03em] transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">{industry.name}</h3>
                </div>

                <div className="md:col-span-6">
                  <p className="max-w-xl text-base leading-relaxed text-ink/55">{industry.body}</p>
                </div>

                <div className="hidden justify-end md:col-span-1 md:flex">
                  <IndustryMark index={i} />
                </div>
              </article>
            </Reveal>
          ))}

          <div className="border-t border-mist" />
        </div>

        <Reveal delay={140}>
          <div className="mt-16 flex flex-col gap-4 md:mt-20 md:flex-row md:items-end md:justify-between">
            <h3 className="display max-w-[14ch] text-[2rem] sm:text-4xl lg:text-5xl">{industriesSection.closingHeadline}</h3>
            <p className="eyebrow text-accent">{industriesSection.closingNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}