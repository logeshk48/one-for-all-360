"use client";

import { useEffect, useRef, useState } from "react";

type RevealLineProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
};

export default function RevealLine({ children, delay = 0, className = "", threshold = 0.5 }: RevealLineProps) {
  const ref = useRef<HTMLSpanElement>(null);
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
      { threshold, rootMargin: "0px 0px -12% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <span ref={ref} className={"line-mask " + className}>
      <span data-shown={shown} style={{ transitionDelay: delay + "ms" }} className="line-slide">{children}</span>
    </span>
  );
}