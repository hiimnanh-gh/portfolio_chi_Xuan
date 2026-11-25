export function FooterCopyright({ owner }) {
  const currentYear = new Date().getFullYear();

  return (
    <p className="text-xs text-[var(--color-text-muted)]">
      © {currentYear} {owner}
    </p>
  );
}
