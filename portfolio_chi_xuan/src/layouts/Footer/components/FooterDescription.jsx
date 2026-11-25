export function FooterDescription({ description }) {
  if (!description) return null;

  return (
    <p className="mt-2 max-w-md text-xs leading-relaxed text-[var(--color-text-muted)] sm:text-[13px]">
      {description}
    </p>
  );
}
