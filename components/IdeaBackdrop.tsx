const stroke = {
  fill: "none",
  stroke: "var(--color-ink)",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export default function IdeaBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-glow absolute inset-0" />

      <svg viewBox="0 0 400 400" className="absolute -left-20 top-1/2 h-[88vh] w-auto -translate-y-1/2 opacity-[0.055] lg:left-[1%]">
        <g className="orbit-slow">
          <circle {...stroke} cx="200" cy="200" r="168" />
          <circle {...stroke} cx="200" cy="32" r="6" />
          <circle {...stroke} cx="368" cy="200" r="6" />
          <circle {...stroke} cx="200" cy="368" r="6" />
          <circle {...stroke} cx="32" cy="200" r="6" />
          <path {...stroke} d="M81 81 L319 319" />
          <path {...stroke} d="M319 81 L81 319" />
        </g>
        <g className="orbit-mid">
          <circle {...stroke} cx="200" cy="200" r="118" strokeDasharray="3 14" />
          <path {...stroke} d="M82 200 L318 200" />
          <path {...stroke} d="M200 82 L200 318" />
        </g>
        <g className="orbit-fast">
          <circle {...stroke} cx="200" cy="200" r="62" strokeDasharray="26 18" />
        </g>
      </svg>

      <svg viewBox="0 0 200 200" className="drift absolute right-[3%] top-[12%] hidden h-[17vh] w-auto opacity-[0.07] lg:block">
        <path {...stroke} d="M20 60 Q 60 44, 100 60 T 180 60" />
        <path {...stroke} d="M20 100 Q 60 84, 100 100 T 180 100" />
        <path {...stroke} d="M20 140 Q 60 124, 100 140 T 180 140" />
        <path {...stroke} d="M60 40 L60 160" />
        <path {...stroke} d="M100 40 L100 160" />
        <path {...stroke} d="M140 40 L140 160" />
      </svg>

      <svg viewBox="0 0 200 200" className="drift-slow absolute bottom-[9%] right-[7%] hidden h-[15vh] w-auto opacity-[0.07] lg:block">
        <g className="orbit-fast">
          <circle {...stroke} cx="100" cy="100" r="52" />
          <path {...stroke} d="M100 48 L100 26" />
          <path {...stroke} d="M100 152 L100 174" />
          <path {...stroke} d="M48 100 L26 100" />
          <path {...stroke} d="M152 100 L174 100" />
          <path {...stroke} d="M137 63 L152 48" />
          <path {...stroke} d="M63 137 L48 152" />
          <path {...stroke} d="M137 137 L152 152" />
          <path {...stroke} d="M63 63 L48 48" />
        </g>
        <circle {...stroke} cx="100" cy="100" r="20" />
      </svg>
    </div>
  );
}