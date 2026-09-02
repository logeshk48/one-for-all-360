"use client";

import { useEffect, useMemo, useState } from "react";
import Logo from "./Logo";
import PillLink from "./PillLink";
import { useActiveSection } from "./useActiveSection";
import { nav } from "@/content/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const ids = useMemo(() => nav.map((item) => item.href.replace("#", "")), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => setOpen(false);
  const toggle = () => setOpen(!open);

  const shellBase = "fixed inset-x-0 top-0 z-50 transition-all duration-500";
  const shellSkin = scrolled ? "border-b border-mist bg-paper/85 backdrop-blur-md" : "border-b border-transparent";
  const barBase = "shell flex items-center justify-between transition-all duration-500";
  const barSize = scrolled ? "h-16" : "h-20 md:h-24";

  const barTop = open ? "top-1.5 rotate-45 bg-paper" : "top-0 bg-ink";
  const barBottom = open ? "top-1.5 -rotate-45 bg-paper" : "top-3 bg-ink";
  const lineBase = "absolute left-0 block h-px w-6 transition-all duration-300";

  const panelBase = "fixed inset-0 z-50 bg-ink transition-opacity duration-500 lg:hidden";
  const panelState = open ? "opacity-100" : "pointer-events-none opacity-0";

  const linkBase = "block text-4xl font-semibold tracking-[-0.03em] transition-all duration-500 sm:text-5xl";
  const linkState = open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0";

  return (
    <>
      <header className={shellBase + " " + shellSkin}>
        <div className={barBase + " " + barSize}>
          <a href="#top" aria-label="One For All 360 home">
            <Logo size={scrolled ? 34 : 40} />
          </a>

          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-9">
              {nav.map((item) => {
                const isActive = active === item.href.replace("#", "");
                const tone = isActive ? "text-accent" : "text-ink/60 hover:text-ink";
                return (
                  <li key={item.href}>
                    <a href={item.href} aria-current={isActive ? "true" : undefined} className={"nav-link text-sm transition-colors duration-300 " + tone}>{item.label}</a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <PillLink href="#partners" label="Partner With Us" variant="solid" small className="hidden sm:inline-flex" />

            <button type="button" onClick={toggle} aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? "Close menu" : "Open menu"} className="relative z-60 flex h-10 w-10 items-center justify-center lg:hidden">
              <span className="relative block h-3 w-6">
                <span className={lineBase + " " + barTop} />
                <span className={lineBase + " " + barBottom} />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-nav" aria-hidden={!open} className={panelBase + " " + panelState}>
        <div className="shell flex h-full flex-col justify-between py-8">
          <div className="h-10" />

          <nav aria-label="Mobile">
            <ul>
              {nav.map((item, i) => {
                const isActive = active === item.href.replace("#", "");
                const tone = isActive ? "text-accent" : "text-paper";
                const num = i < 9 ? "0" + (i + 1) : String(i + 1);
                return (
                  <li key={item.href} className="border-b border-paper/10">
                    <a href={item.href} onClick={close} tabIndex={open ? 0 : -1} style={{ transitionDelay: open ? 120 + i * 55 + "ms" : "0ms" }} className={"flex items-baseline gap-5 py-4 " + linkState}>
                      <span className="index-num text-paper/30">{num}</span>
                      <span className={linkBase + " " + tone}>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="space-y-6">
            <PillLink href="#partners" label="Partner With Us" variant="line" className="w-full !border-paper/30 !text-paper" />
            <p className="eyebrow text-paper/40">Everything. One Place.</p>
          </div>
        </div>
      </div>
    </>
  );
}