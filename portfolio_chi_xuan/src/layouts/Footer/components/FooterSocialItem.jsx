export function FooterSocialItem({ label, href }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-input)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-body)] transition-colors duration-150 hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-bg-surface)] hover:text-[var(--color-brand-primary)]"
    >
      {label}
    </a>
  );
}
