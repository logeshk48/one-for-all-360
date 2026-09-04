"use client";

import { useState } from "react";
import IndustryIcon from "./IndustryIcon";
import { industries } from "@/content/site";

const CX = 340;
const CY = 320;
const R_OUTER = 196;
const R_CORE = 84;
const ANGLES = [-90, -30, 30, 90, 150, 210];
const DEFAULT_INDEX = 0;

function round(n: number) {
  return Math.round(n * 100) / 100;
}

function point(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: round(CX + radius * Math.cos(rad)),
    y: round(CY + radius * Math.sin(rad)),
  };
}

const nodes = industries.map((industry, i) => {
  const angle = ANGLES[i];
  const outer = point(angle, R_OUTER);
  const from = point(angle, R_CORE + 14);
  const to = point(angle, R_OUTER - 28);
  const cos = Math.cos((angle * Math.PI) / 180);

  let anchor: "start" | "middle" | "end" = "middle";
  let labelX = outer.x;
  let labelY = outer.y + 4;

  if (cos > 0.15) {
    anchor = "start";
    labelX = outer.x + 36;
  } else if (cos < -0.15) {
    anchor = "end";
    labelX = outer.x - 36;
  } else {
    labelY = angle === -90 ? outer.y - 38 : outer.y + 48;
  }

  return { ...industry, outer, from, to, anchor, labelX, labelY };
});

const dots = ANGLES.map((angle) => ({ angle, p: point(angle + 30, R_CORE + 52) }));

export default function EcosystemInteractive() {
  const [selected, setSelected] = useState(DEFAULT_INDEX);
  const [openOffering, setOpenOffering] = useState(0);
  const current = industries[selected];

  const pick = (index: number) => {
    setSelected(index);
    setOpenOffering(0);
  };

  const move = (delta: number) => {
    pick((selected + delta + industries.length) % industries.length);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      move(1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      move(-1);
    }
  };

  return (
    <div className="grid items-center gap-y-16 lg:grid-cols-12 lg:gap-x-6">
      <div className="lg:col-span-7">
        <div className="relative mx-auto w-full max-w-[40rem]">
          <svg
            viewBox="0 0 680 640"
            className="eco-stage h-auto w-full touch-manipulation"
            role="group"
            aria-label="Interactive ecosystem. Use arrow keys to move between industries."
            tabIndex={0}
            onKeyDown={onKey}
          >
            <defs>
              <radialGradient id="ecoGlow">
                <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.1" />
                <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
              </radialGradient>
            </defs>

            <circle cx={CX} cy={CY} r="255" fill="url(#ecoGlow)" />
            <circle cx={CX} cy={CY} r={R_OUTER} fill="none" stroke="var(--color-ink)" strokeWidth="1" opacity="0.16" />
            <circle cx={CX} cy={CY} r={R_CORE + 52} fill="none" stroke="var(--color-ink)" strokeWidth="1" strokeDasharray="2 10" opacity="0.22" className="ring-rotate" />
            <circle cx={CX} cy={CY} r={R_CORE + 100} fill="none" stroke="var(--color-ink)" strokeWidth="1" strokeDasharray="1 15" opacity="0.14" className="orbit-mid" />

            {dots.map((dot) => (
              <circle key={dot.angle} cx={dot.p.x} cy={dot.p.y} r="1.8" fill="var(--color-accent)" opacity="0.35" />
            ))}

            {nodes.map((node, i) => {
              const state = selected === i ? "on" : "off";
              return (
                <g
                  key={node.short}
                  className="eco-node"
                  data-state={state}
                  onMouseEnter={() => pick(i)}
                  onClick={() => pick(i)}
                  role="button"
                  aria-pressed={selected === i}
                  aria-label={node.name}
                >
                  <line className="eco-spoke" x1={node.from.x} y1={node.from.y} x2={node.to.x} y2={node.to.y} stroke="var(--color-ink)" strokeWidth="1" />

                  <g transform={"translate(" + node.outer.x + " " + node.outer.y + ")"}>
                    <circle className="eco-ripple" cx="0" cy="0" r="23" />
                    <g className="eco-badge">
                      <circle className="eco-ring" cx="0" cy="0" r="23" fill="var(--color-paper)" stroke="var(--color-ink)" strokeWidth="1.1" />
                      <g className="eco-icon" transform="translate(-12 -12)">
                        <IndustryIcon name={node.short} size={24} />
                      </g>
                    </g>
                    <circle cx="0" cy="0" r="38" fill="transparent" />
                  </g>

                  <text className="eco-num" x={node.labelX} y={node.labelY - 14} textAnchor={node.anchor}>{node.num}</text>
                  <text className="eco-label" x={node.labelX} y={node.labelY} textAnchor={node.anchor}>{node.short}</text>
                </g>
              );
            })}

            <circle cx={CX} cy={CY} r={R_CORE} fill="var(--color-paper)" />
            <circle cx={CX} cy={CY} r={R_CORE} fill="none" stroke="var(--color-accent)" strokeWidth="1.2" opacity="0.5" />
            <circle cx={CX} cy={CY} r={R_CORE + 10} fill="none" stroke="var(--color-accent)" strokeWidth="1" opacity="0.2" />
          </svg>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="core-float flex flex-col items-center">
              <img src="/logo.svg" alt="" className="w-[13%] min-w-[76px] max-w-[104px]" />
              <span className="mt-1 text-[0.7rem] font-semibold tracking-[-0.02em] md:text-sm">
                <span className="text-ink">360</span><span className="text-accent">°</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative lg:col-span-5 lg:col-start-8">
        <span
          key={current.num + "-bg"}
          aria-hidden="true"
          className="eco-ghost pointer-events-none absolute -top-[7vw] left-0 select-none text-[26vw] font-semibold leading-none tracking-[-0.06em] text-ink/[0.035] lg:-top-[5vw] lg:text-[19vw]"
        >
          {current.num}
        </span>

        <div key={current.short} className="eco-panel relative">
          <div className="flex items-center gap-5">
            <span className="index-num text-accent">{current.num}</span>
            <span className="h-px w-12 bg-accent" aria-hidden="true" />
            <span className="index-num text-ink/25">{"OF 0" + industries.length}</span>
          </div>

          <h3 className="mt-8 text-[clamp(3rem,6.5vw,5.5rem)] font-semibold leading-[0.9] tracking-[-0.055em]">{current.name}</h3>
          <p className="mt-6 max-w-md text-base leading-relaxed text-ink/50 md:text-lg">{current.body}</p>

          <ul className="mt-12">
            {current.offerings.map((offering, i) => (
              <li key={offering.name}>
                <button
                  type="button"
                  onClick={() => setOpenOffering(i)}
                  data-open={openOffering === i}
                  style={{ animationDelay: 0.3 + i * 0.08 + "s" }}
                  className="offer-row w-full border-t border-mist py-5 text-left"
                >
                  <span className="flex items-baseline justify-between gap-4">
                    <span className="offer-name text-xl font-medium tracking-[-0.03em] md:text-2xl">{offering.name}</span>
                    <svg className="offer-arrow shrink-0 translate-y-1" width="22" height="10" viewBox="0 0 22 10" fill="none" aria-hidden="true">
                      <path d="M0 5h19M15 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="offer-note block max-w-sm text-sm leading-relaxed text-ink/45">{offering.note}</span>
                </button>
              </li>
            ))}
            <li className="border-t border-mist" />
          </ul>
        </div>
      </div>
    </div>
  );
}