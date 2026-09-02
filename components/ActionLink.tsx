type ActionLinkProps = {
  href: string;
  label: string;
  muted?: boolean;
  className?: string;
};

export default function ActionLink({ href, label, muted = false, className = "" }: ActionLinkProps) {
  const tone = muted ? "opacity-55 hover:opacity-100" : "";

  return (
    <a href={href} className={"action transition-opacity duration-300 " + tone + " " + className}>
      <span className="action-label">{label}</span>
      <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true" className="action-arrow">
        <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="action-rule" />
      <span className="action-fill" />
    </a>
  );
}