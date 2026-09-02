"use client";

import { useEffect, useRef, useState } from "react";
import { intro } from "@/content/site";

export default function IdeaNames() {
  const ref = useRef<HTMLUListElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <ul ref={ref} className="w-full">
      {intro.names.map((name, i) => (
        <li
          key={name}
          data-active={shown}
          style={{ transitionDelay: 420 + i * 95 + "ms" }}
          className="idea-row group relative"
        >
          <div className="idea-wash" aria-hidden="true" />
          <div className="relative flex items-baseline gap-5 py-[1.15vh] md:gap-8">
            <span className="index-num idea-count shrink-0">{"0" + (i + 1)}</span>
            <span className="idea-name text-[clamp(1.625rem,4.6vh,3.25rem)] font-medium tracking-[-0.042em]">{name}</span>
            <svg className="idea-arrow ml-auto shrink-0" width="26" height="12" viewBox="0 0 26 12" fill="none" aria-hidden="true">
              <path d="M0 6h23M18 1l5 5-5 5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="idea-rule" />
        </li>
      ))}
    </ul>
  );
}