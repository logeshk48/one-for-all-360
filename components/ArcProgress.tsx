"use client";

import { useEffect, useState } from "react";

const RADIUS = 21;
const CIRC = 2 * Math.PI * RADIUS;
const START = 0.15;

export default function ArcProgress() {
  const [progress, setProgress] = useState(START);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      const ratio = scrollable > 0 ? window.scrollY / scrollable : 0;
      const clamped = Math.min(Math.max(ratio, 0), 1);
      setProgress(START + clamped * (1 - START));
      setVisible(window.scrollY > 120);
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const offset = CIRC * (1 - progress);
  const degrees = Math.round(progress * 360);
  const complete = progress > 0.995;
  const wrapState = visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3";

  return (
    <div aria-hidden="true" className={"pointer-events-none fixed bottom-6 right-5 z-40 transition-all duration-700 md:bottom-9 md:right-9 " + wrapState}>
      <div className="relative">
        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="md:h-16 md:w-16">
          <circle cx="26" cy="26" r={RADIUS} stroke="var(--color-ink)" strokeWidth="1" opacity="0.14" />
          <circle cx="26" cy="26" r={RADIUS} stroke="var(--color-accent)" strokeWidth="1.75" strokeLinecap="round" fill="none" strokeDasharray={CIRC} strokeDashoffset={offset} transform="rotate(-90 26 26)" style={{ transition: "stroke-dashoffset 0.18s linear" }} />
        </svg>
        <span className={"absolute inset-0 flex items-center justify-center text-[0.5rem] font-medium tabular-nums tracking-tight transition-colors duration-500 md:text-[0.625rem] " + (complete ? "text-accent" : "text-ink/45")}>{degrees}°</span>
      </div>
    </div>
  );
}