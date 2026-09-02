import { industries } from "@/content/site";

const CX = 320;
const CY = 280;
const R_OUTER = 175;
const R_DASH = 118;
const R_CORE = 78;

const ANGLES = [-90, -30, 30, 90, 150, 210];

function point(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    x: CX + radius * Math.cos(rad),
    y: CY + radius * Math.sin(rad),
  };
}

const nodes = industries.map((industry, i) => {
  const angle = ANGLES[i];
  const outer = point(angle, R_OUTER);
  const lineStart = point(angle, R_CORE + 10);
  const lineEnd = point(angle, R_OUTER - 12);
  const cos = Math.cos((angle * Math.PI) / 180);

  let anchor: "start" | "middle" | "end" = "middle";
  let labelX = outer.x;
  let labelY = outer.y + 4;

  if (cos > 0.15) {
    anchor = "start";
    labelX = outer.x + 16;
  } else if (cos < -0.15) {
    anchor = "end";
    labelX = outer.x - 16;
  } else {
    labelY = angle === -90 ? outer.y - 20 : outer.y + 28;
  }

  return { ...industry, outer, lineStart, lineEnd, anchor, labelX, labelY };
});

const arcStart = point(-115, R_OUTER);
const arcEnd = point(-50, R_OUTER);

export default function EcosystemVisual() {
  return (
    <div className="w-full">
      <svg
        viewBox="0 0 640 560"
        className="h-auto w-full"
        role="img"
        aria-label="A 360° ecosystem diagram connecting garments, construction, agriculture, IT and technology, manufacturing, and services."
      >
        {/* Outer ring */}
        <circle
          cx={CX}
          cy={CY}
          r={R_OUTER}
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1"
          opacity="0.16"
        />

        {/* Accent arc — the 360° signature */}
        <path
          d={`M ${arcStart.x} ${arcStart.y} A ${R_OUTER} ${R_OUTER} 0 0 1 ${arcEnd.x} ${arcEnd.y}`}
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="2"
          strokeLinecap="round"
          className="arc-draw"
        />

        {/* Slow rotating dashed ring */}
        <circle
          cx={CX}
          cy={CY}
          r={R_DASH}
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1"
          strokeDasharray="2 10"
          opacity="0.28"
          className="ring-rotate"
        />

        {/* Connectors + nodes */}
        {nodes.map((node, i) => (
          <g
            key={node.short}
            className="node-in"
            style={{ animationDelay: `${500 + i * 110}ms` }}
          >
            <line
              x1={node.lineStart.x}
              y1={node.lineStart.y}
              x2={node.lineEnd.x}
              y2={node.lineEnd.y}
              stroke="var(--color-ink)"
              strokeWidth="1"
              opacity="0.18"
            />
            <circle
              cx={node.outer.x}
              cy={node.outer.y}
              r="4.5"
              fill="var(--color-paper)"
              stroke="var(--color-ink)"
              strokeWidth="1.25"
            />
            <text
              x={node.labelX}
              y={node.labelY}
              textAnchor={node.anchor}
              className="max-lg:hidden"
              fill="var(--color-ink)"
              fontSize="11"
              fontWeight="500"
              letterSpacing="1.6"
              opacity="0.6"
            >
              {node.short}
            </text>
          </g>
        ))}

        {/* Core */}
        <circle cx={CX} cy={CY} r={R_CORE} fill="var(--color-ink)" />
        <text
          x={CX}
          y={CY - 18}
          textAnchor="middle"
          fill="var(--color-paper)"
          fontSize="9"
          fontWeight="500"
          letterSpacing="2.2"
          opacity="0.55"
        >
          ONE FOR ALL
        </text>
        <text
          x={CX}
          y={CY + 22}
          textAnchor="middle"
          fill="var(--color-paper)"
          fontSize="44"
          fontWeight="600"
          letterSpacing="-1.5"
        >
          360
          <tspan fill="var(--color-accent)">°</tspan>
        </text>
      </svg>
    </div>
  );
}