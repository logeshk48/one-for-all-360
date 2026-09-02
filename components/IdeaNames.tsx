"use client";

import { useEffect, useRef, useState } from "react";
import { intro } from "@/content/site";

export default function IdeaNames() {
  const refs = useRef<(HTMLLIElement | null)[]>([]);
  const [active, setActive] = useState(-1);

  useEffect(() => {
    const nodes = refs.current.filter((n): n is HTMLLIElement => n !== null);
    if (nodes.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setActive(nodes.length - 1);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = nodes.indexOf(entry.target as HTMLLIElement);
          setActive((current) => (index > current ? index : current));
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <ul className="w-full">
      {intro.names.map((name, i) => (
        <li
          key={name}
          ref={(el) => { refs.current[i] = el; }}
          data-active={i <= active}
          className="idea-row relative"
        >
          <div className="flex items-baseline gap-5 py-3.5 md:gap-8 md:py-5">
            <span className="index-num idea-count w-6 shrink-0">{"0" + (i + 1)}</span>
            <span className="idea-name text-[clamp(1.5rem,3.2vw,2.75rem)] font-medium tracking-[-0.04em]">{name}</span>
          </div>
          <div className="idea-rule" />
        </li>
      ))}
    </ul>
  );
}