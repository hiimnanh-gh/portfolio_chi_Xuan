export function AwardTitle({ title }) {
  if (!title) return null;

  return (
    <h3 className="mt-2.5 text-lg font-bold text-[var(--color-text-heading)]">
      {title}
    </h3>
  );
}
