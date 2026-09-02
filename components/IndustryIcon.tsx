const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function Shirt() {
  return (
    <g>
      <path {...s} d="M9 5 L6 7 L4 11 L7 13 L8 11 L8 20 L16 20 L16 11 L17 13 L20 11 L18 7 L15 5" />
      <path {...s} d="M9 5 Q12 8, 15 5" />
    </g>
  );
}

function Crane() {
  return (
    <g>
      <path {...s} d="M6 20 L6 4 L18 4" />
      <path {...s} d="M18 4 L18 9" />
      <path {...s} d="M6 8 L11 4" />
      <path {...s} d="M3 20 L9 20" />
      <path {...s} d="M16 9 L20 9 L20 12 L16 12 Z" />
    </g>
  );
}

function Wheat() {
  return (
    <g>
      <path {...s} d="M12 21 L12 9" />
      <path {...s} d="M12 12 Q7 11, 7 6 Q12 7, 12 12" />
      <path {...s} d="M12 12 Q17 11, 17 6 Q12 7, 12 12" />
      <path {...s} d="M12 18 Q7 17, 7 13 Q12 14, 12 18" />
    </g>
  );
}

function Chip() {
  return (
    <g>
      <rect {...s} x="7" y="7" width="10" height="10" rx="1" />
      <rect {...s} x="10.5" y="10.5" width="3" height="3" />
      <path {...s} d="M10 7 L10 4M14 7 L14 4M10 17 L10 20M14 17 L14 20" />
      <path {...s} d="M7 10 L4 10M7 14 L4 14M17 10 L20 10M17 14 L20 14" />
    </g>
  );
}

function Factory() {
  return (
    <g>
      <path {...s} d="M3 20 L3 11 L9 14 L9 11 L15 14 L15 7 L21 7 L21 20 Z" />
      <path {...s} d="M18 11 L18 14" />
    </g>
  );
}

function People() {
  return (
    <g>
      <circle {...s} cx="9" cy="8" r="2.6" />
      <circle {...s} cx="16.5" cy="9.5" r="2" />
      <path {...s} d="M4 19 Q4 13.5, 9 13.5 Q14 13.5, 14 19" />
      <path {...s} d="M15 14 Q20 14, 20 19" />
    </g>
  );
}

const icons: Record<string, () => React.ReactElement> = {
  GARMENTS: Shirt,
  CONSTRUCTION: Crane,
  AGRICULTURE: Wheat,
  "IT & TECHNOLOGY": Chip,
  MANUFACTURING: Factory,
  SERVICES: People,
};

export default function IndustryIcon({ name, size = 24, className = "" }: { name: string; size?: number; className?: string }) {
  const Icon = icons[name];
  if (!Icon) return null;

  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
      <Icon />
    </svg>
  );
}