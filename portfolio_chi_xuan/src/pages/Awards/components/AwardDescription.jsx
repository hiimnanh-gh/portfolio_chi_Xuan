export function AwardDescription({ description }) {
  if (!description) return null;

  return (
    <p className="mt-2.5 text-sm leading-relaxed text-[var(--color-text-body)]">
      {description}
    </p>
  );
}
