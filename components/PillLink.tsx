type PillLinkProps = {
  href: string;
  label: string;
  variant?: "solid" | "line";
  small?: boolean;
  className?: string;
};

export default function PillLink({ href, label, variant = "solid", small = false, className = "" }: PillLinkProps) {
  const tone = variant === "solid" ? "pill-solid" : "pill-line";
  const size = small ? "pill-sm" : "";

  return (
    <a href={href} className={"pill " + tone + " " + size + " " + className}>
      <span className="pill-label">{label}</span>
      <svg width="15" height="10" viewBox="0 0 15 10" fill="none" aria-hidden="true" className="pill-arrow">
        <path d="M0 5h13M9 1l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}