const stroke = {
  fill: "none",
  stroke: "var(--color-ink)",
  strokeWidth: 1,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  pathLength: 1,
};

function Weave() {
  return (
    <g>
      <path {...stroke} d="M-55 -30 Q -27 -39, 0 -30 T 55 -30" className="sketch" style={{ animationDelay: "1.3s" }} />
      <path {...stroke} d="M-55 -10 Q -27 -19, 0 -10 T 55 -10" className="sketch" style={{ animationDelay: "1.4s" }} />
      <path {...stroke} d="M-55 10 Q -27 1, 0 10 T 55 10" className="sketch" style={{ animationDelay: "1.5s" }} />
      <path {...stroke} d="M-55 30 Q -27 21, 0 30 T 55 30" className="sketch" style={{ animationDelay: "1.6s" }} />
      <path {...stroke} d="M-33 -44 L-33 44" className="sketch" style={{ animationDelay: "1.7s" }} />
      <path {...stroke} d="M-11 -44 L-11 44" className="sketch" style={{ animationDelay: "1.75s" }} />
      <path {...stroke} d="M11 -44 L11 44" className="sketch" style={{ animationDelay: "1.8s" }} />
      <path {...stroke} d="M33 -44 L33 44" className="sketch" style={{ animationDelay: "1.85s" }} />
    </g>
  );
}

function Rows() {
  return (
    <g>
      <path {...stroke} d="M-58 42 L58 42" className="sketch" style={{ animationDelay: "1.5s" }} />
      <path {...stroke} d="M-56 42 L-13 -40" className="sketch" style={{ animationDelay: "1.6s" }} />
      <path {...stroke} d="M-28 42 L-6 -40" className="sketch" style={{ animationDelay: "1.68s" }} />
      <path {...stroke} d="M0 42 L0 -40" className="sketch" style={{ animationDelay: "1.76s" }} />
      <path {...stroke} d="M28 42 L6 -40" className="sketch" style={{ animationDelay: "1.84s" }} />
      <path {...stroke} d="M56 42 L13 -40" className="sketch" style={{ animationDelay: "1.92s" }} />
    </g>
  );
}

function Gear() {
  const ticks = [0, 45, 90, 135, 180, 225, 270, 315];
  return (
    <g>
      <circle {...stroke} cx="0" cy="0" r="30" className="sketch" style={{ animationDelay: "1.7s" }} />
      <circle {...stroke} cx="0" cy="0" r="11" className="sketch" style={{ animationDelay: "1.9s" }} />
      {ticks.map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 30 * Math.cos(rad);
        const y1 = 30 * Math.sin(rad);
        const x2 = 42 * Math.cos(rad);
        const y2 = 42 * Math.sin(rad);
        return <path key={angle} {...stroke} d={"M" + x1 + " " + y1 + " L" + x2 + " " + y2} className="sketch" style={{ animationDelay: 1.8 + i * 0.04 + "s" }} />;
      })}
    </g>
  );
}

function Frame() {
  return (
    <g>
      <path {...stroke} d="M-42 -42 L-42 42" className="sketch" style={{ animationDelay: "1.3s" }} />
      <path {...stroke} d="M-14 -42 L-14 42" className="sketch" style={{ animationDelay: "1.38s" }} />
      <path {...stroke} d="M14 -42 L14 42" className="sketch" style={{ animationDelay: "1.46s" }} />
      <path {...stroke} d="M42 -42 L42 42" className="sketch" style={{ animationDelay: "1.54s" }} />
      <path {...stroke} d="M-42 -42 L42 -42" className="sketch" style={{ animationDelay: "1.6s" }} />
      <path {...stroke} d="M-42 0 L42 0" className="sketch" style={{ animationDelay: "1.68s" }} />
      <path {...stroke} d="M-42 42 L42 42" className="sketch" style={{ animationDelay: "1.76s" }} />
      <path {...stroke} d="M-42 -42 L-14 0" className="sketch" style={{ animationDelay: "1.84s" }} />
      <path {...stroke} d="M14 0 L42 42" className="sketch" style={{ animationDelay: "1.92s" }} />
    </g>
  );
}

function Network() {
  const nodes = [
    { x: 0, y: -38 },
    { x: 40, y: -12 },
    { x: 26, y: 34 },
    { x: -26, y: 34 },
    { x: -40, y: -12 },
  ];
  return (
    <g>
      {nodes.map((node, i) => (
        <path key={"l" + i} {...stroke} d={"M0 0 L" + node.x + " " + node.y} className="sketch" style={{ animationDelay: 1.5 + i * 0.07 + "s" }} />
      ))}
      {nodes.map((node, i) => {
        const next = nodes[(i + 1) % nodes.length];
        return <path key={"r" + i} {...stroke} d={"M" + node.x + " " + node.y + " L" + next.x + " " + next.y} className="sketch" style={{ animationDelay: 1.75 + i * 0.07 + "s" }} />;
      })}
      {nodes.map((node, i) => (
        <circle key={"n" + i} {...stroke} cx={node.x} cy={node.y} r="3.5" className="sketch" style={{ animationDelay: 2 + i * 0.05 + "s" }} />
      ))}
      <circle {...stroke} cx="0" cy="0" r="5" className="sketch" style={{ animationDelay: "2.25s" }} />
    </g>
  );
}

function Orbits() {
  return (
    <g>
      <circle {...stroke} cx="0" cy="0" r="44" className="sketch" style={{ animationDelay: "1.6s" }} />
      <circle {...stroke} cx="0" cy="0" r="29" className="sketch" style={{ animationDelay: "1.8s" }} />
      <circle {...stroke} cx="0" cy="0" r="14" className="sketch" style={{ animationDelay: "2s" }} />
      <path {...stroke} d="M-44 0 L44 0" className="sketch" style={{ animationDelay: "2.1s" }} />
      <path {...stroke} d="M0 -44 L0 44" className="sketch" style={{ animationDelay: "2.15s" }} />
    </g>
  );
}

export default function HeroSketch() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
      <svg viewBox="0 0 200 700" preserveAspectRatio="xMidYMid meet" className="absolute left-[2%] top-1/2 h-[68%] -translate-y-1/2 opacity-[0.11] xl:left-[4%]">
        <g transform="translate(100 110)"><Weave /></g>
        <g transform="translate(100 350)"><Rows /></g>
        <g transform="translate(100 590)"><Gear /></g>
      </svg>

      <svg viewBox="0 0 200 700" preserveAspectRatio="xMidYMid meet" className="absolute right-[2%] top-1/2 h-[68%] -translate-y-1/2 opacity-[0.11] xl:right-[4%]">
        <g transform="translate(100 110)"><Frame /></g>
        <g transform="translate(100 350)"><Network /></g>
        <g transform="translate(100 590)"><Orbits /></g>
      </svg>
    </div>
  );
}