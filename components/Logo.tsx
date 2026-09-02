type LogoProps = {
  size?: number;
  className?: string;
};

export default function Logo({ size = 38, className = "" }: LogoProps) {
  return (
    <span className={"inline-flex items-center gap-2.5 " + className}>
      <svg viewBox="320 240 615 590" width={size} height={size} aria-hidden="true" className="shrink-0">
        <image href="/logo.svg" x="0" y="0" width="1254" height="1254" />
      </svg>
      <span className="whitespace-nowrap text-[1.0625rem] font-semibold tracking-[-0.015em] text-ink">OneForAll<span className="text-accent">360</span></span>
    </span>
  );
}