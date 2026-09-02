"use client";

import { useState } from "react";
import IndustryIcon from "./IndustryIcon";
import { industries } from "@/content/site";

const CX = 300;
const CY = 300;
const R_OUTER = 190;
const R_CORE = 74;
const ANGLES = [-90, -30, 30, 90, 150, 210];

function point(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + radius * Math.cos(rad), y: CY + radius * Math.sin(rad) };
}

const nodes = industries.map((industry, i) => {
  const angle = ANGLES[i];
  const outer = point(angle, R_OUTER);
  const from = point(angle, R_CORE + 8);
  const to = point(angle, R_OUTER - 26);
  const cos = Math.cos((angle * Math.PI) / 180);

  let anchor: "start" | "middle" | "end" = "middle";
  let labelX = outer.x;
  let labelY = outer.y + 4;

  if (cos > 0.15) {
    anchor = "start";
    labelX = outer.x + 34;
  } else if (cos < -0.15) {
    anchor = "end";
    labelX = outer.x - 34;
  } else {
    labelY = angle === -90 ? outer.y - 36 : outer.y + 44;
  }

  return { ...industry, outer, from, to, anchor, labelX, labelY };
});

export default function EcosystemInteractive() {
  const [selected, setSelected] = useState<number | null>(null);
  const current = selected === null ? null : industries[selected];

  const move = (delta: number) => {
    setSelected((prev) => {
      const base = prev === null ? 0 : prev + delta;
      return (base + industries.length) % industries.length;
    });
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      move(1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      move(-1);
    } else if (e.key === "Escape") {
      setSelected(null);
    }
  };

  return (
    <div className="grid items-center gap-y-12 lg:grid-cols-12 lg:gap-x-12">
      <div className="lg:col-span-7">
        <svg
          viewBox="0 0 600 600"
          className="eco-stage mx-auto h-auto w-full max-w-[36rem] touch-manipulation"
          data-live={selected !== null}
          role="group"
          aria-label="Interactive ecosystem. Use arrow keys to move between industries."
          tabIndex={0}
          onKeyDown={onKey}
          onMouseLeave={() => setSelected(null)}
        >
          <circle cx={CX} cy={CY} r={R_OUTER} fill="none" stroke="var(--color-ink)" strokeWidth="1" opacity="0.12" />
          <circle cx={CX} cy={CY} r={R_CORE + 46} fill="none" stroke="var(--color-ink)" strokeWidth="1" strokeDasharray="2 11" opacity="0.18" className="ring-rotate" />
          <circle cx={CX} cy={CY} r={R_CORE + 92} fill="none" stroke="var(--color-ink)" strokeWidth="1" strokeDasharray="1 16" opacity="0.12" className="orbit-mid" />

          {nodes.map((node, i) => {
            const state = selected === null ? "idle" : selected === i ? "on" : "off";
            return (
              <g
                key={node.short}
                className="eco-node"
                data-state={state}
                onMouseEnter={() => setSelected(i)}
                onClick={() => setSelected(selected === i ? null : i)}
                role="button"
                aria-pressed={selected === i}
                aria-label={node.name}
              >
                <line className="eco-spoke" x1={node.from.x} y1={node.from.y} x2={node.to.x} y2={node.to.y} stroke="var(--color-ink)" strokeWidth="1" />

                <g transform={"translate(" + node.outer.x + " " + node.outer.y + ")"}>
                  <circle className="eco-ripple" cx="0" cy="0" r="21" />
                  <circle className="eco-halo" cx="0" cy="0" r="21" style={{ animationDelay: i * 0.55 + "s" }} />
                  <g className="eco-badge">
                    <circle className="eco-ring" cx="0" cy="0" r="21" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="1" />
                    <g className="eco-icon" transform="translate(-12 -12)">
                      <IndustryIcon name={node.short} size={24} />
                    </g>
                  </g>
                  <circle cx="0" cy="0" r="36" fill="transparent" />
                </g>

                <text className="eco-label" x={node.labelX} y={node.labelY} textAnchor={node.anchor} fill="var(--color-ink)">{node.short}</text>
              </g>
            );
          })}

          <g className="eco-core">
            <circle cx={CX} cy={CY} r={R_CORE} fill="var(--color-ink)" />
            <text x={CX} y={CY - 16} textAnchor="middle" fill="var(--color-paper)" fontSize="8.5" fontWeight="500" letterSpacing="2.2" opacity="0.5">ONE FOR ALL</text>
            <text x={CX} y={CY + 22} textAnchor="middle" fill="var(--color-paper)" fontSize="42" fontWeight="600" letterSpacing="-1.5">360<tspan fill="var(--color-accent)">°</tspan></text>
          </g>
        </svg>
      </div>

      <div className="lg:col-span-4 lg:col-start-9">
        <div className="min-h-[20rem]">
          {current === null ? (
            <div className="eco-panel border-t border-mist pt-8">
              <p className="eyebrow text-ink/35">Select an industry</p>
              <p className="mt-6 max-w-sm text-lg leading-snug text-ink/45 md:text-xl">Six industries. One connected ecosystem — and more to come.</p>
            </div>
          ) : (
            <div key={current.short} className="eco-panel">
              <div className="flex items-center gap-4">
                <span className="index-num text-accent">{current.num}</span>
                <span className="h-px w-10 bg-accent" aria-hidden="true" />
              </div>

              <h3 className="mt-6 text-4xl font-semibold tracking-[-0.04em] md:text-5xl">{current.name}</h3>
              <p className="mt-3 text-base text-accent">{current.tagline}</p>
              <p className="mt-6 max-w-sm text-base leading-relaxed text-ink/55">{current.body}</p>

              <ul className="mt-9">
                {current.tags.map((tag, i) => (
                  <li key={tag} style={{ animationDelay: 0.3 + i * 0.07 + "s" }} className="eco-tag flex cursor-default items-center gap-4 border-t border-mist py-3 text-sm text-ink/50">
                    <span className="eco-tag-dash h-px w-4 bg-ink/20" aria-hidden="true" />
                    <span>{tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}