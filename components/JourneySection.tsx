"use client";

import { useEffect, useRef, useState } from "react";
import RevealLine from "./RevealLine";
import Reveal from "./Reveal";
import { journeySection } from "@/content/site";

const RADIUS = 88;
const CIRC = 2 * Math.PI * RADIUS;
const TOTAL = journeySection.stages.length;

export default function JourneySection() {
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const nodes = refs.current.filter((n): n is HTMLLIElement => n !== null);
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = nodes.indexOf(entry.target as HTMLLIElement);
          if (index >= 0) setActive(index);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const progress = (active + 1) / TOTAL;
  const offset = CIRC * (1 - progress);
  const degrees = Math.round(progress * 360);
  const current = journeySection.stages[active];

  return (
    <section id="journey-stages" className="py-28 md:py-40">
      <div className="shell">
        <div className="max-w-4xl">
          <h2 className="display text-[clamp(2.25rem,5.5vw,4.5rem)]">
            {journeySection.headline.map((line, i) => (
              <RevealLine key={line} delay={i * 110}>{line}</RevealLine>
            ))}
          </h2>

          <Reveal delay={220}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-ink/50 md:text-lg">{journeySection.lead}</p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-y-16 md:mt-28 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-6">
            <ul>
              {journeySection.stages.map((stage, i) => (
                <li
                  key={stage.num}
                  ref={(el) => { refs.current[i] = el; }}
                  data-state={i === active ? "on" : i < active ? "past" : "ahead"}
                  className="stage-row border-t border-mist"
                >
                  <div className="flex items-baseline gap-6 py-7 md:gap-10 md:py-9">
                    <span className="index-num stage-num shrink-0">{stage.num}</span>
                    <div className="min-w-0">
                      <h3 className="stage-name text-3xl font-semibold tracking-[-0.038em] md:text-4xl">{stage.name}</h3>
                      <p className="stage-body max-w-sm text-sm leading-relaxed text-ink/50 md:text-base">{stage.body}</p>
                    </div>
                  </div>
                </li>
              ))}
              <li className="border-t border-mist" />
            </ul>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-[38vh]">
              <div className="relative mx-auto w-fit">
                <svg width="220" height="220" viewBox="0 0 220 220" fill="none" aria-hidden="true">
                  <circle cx="110" cy="110" r={RADIUS} stroke="var(--color-ink)" strokeWidth="1" opacity="0.12" />
                  <circle
                    cx="110"
                    cy="110"
                    r={RADIUS}
                    stroke="var(--color-accent)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    strokeDasharray={CIRC}
                    strokeDashoffset={offset}
                    transform="rotate(-90 110 110)"
                    style={{ transition: "stroke-dashoffset 0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}
                  />
                  {journeySection.stages.map((stage, i) => {
                    const angle = (i / TOTAL) * 360 - 90;
                    const rad = (angle * Math.PI) / 180;
                    const x = 110 + RADIUS * Math.cos(rad);
                    const y = 110 + RADIUS * Math.sin(rad);
                    return (
                      <circle
                        key={stage.num}
                        cx={x}
                        cy={y}
                        r={i === active ? 5 : 3}
                        fill={i <= active ? "var(--color-accent)" : "var(--color-paper)"}
                        stroke={i <= active ? "var(--color-accent)" : "var(--color-ink)"}
                        strokeWidth="1"
                        opacity={i <= active ? 1 : 0.35}
                        style={{ transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)" }}
                      />
                    );
                  })}
                </svg>

                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-semibold tabular-nums tracking-[-0.03em]">{degrees}°</span>
                  <span className="eyebrow mt-2 text-accent">{current.name}</span>
                </div>
              </div>

              <p className="mt-10 text-center text-sm text-ink/40">Stage {active + 1} of {TOTAL}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}