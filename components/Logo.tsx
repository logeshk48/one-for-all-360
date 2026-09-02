type LogoProps = {
  invert?: boolean;
  className?: string;
};

export default function Logo({ invert = false, className = "" }: LogoProps) {
  const stroke = invert ? "var(--color-paper)" : "var(--color-ink)";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle
          cx="13"
          cy="13"
          r="11"
          stroke={stroke}
          strokeWidth="1.25"
          opacity="0.35"
        />
        <path
          d="M13 2 A 11 11 0 0 1 24 13"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        <circle cx="13" cy="13" r="2.75" fill={stroke} />
      </svg>
      <span
        className="whitespace-nowrap text-[0.8125rem] font-semibold tracking-[0.14em]"
        style={{ color: stroke }}
      >
        ONE FOR ALL <span className="text-accent">360°</span>
      </span>
    </span>
  );
}