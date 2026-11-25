export function TechnologyStack({ prefix = 'MCU STACK:', items = [] }) {
  if (!items.length) return null;

  return (
    <span className="inline-flex flex-wrap items-center gap-1.5">
      <span className="text-[var(--color-text-muted)]">{prefix}</span>
      <span className="font-medium text-[var(--color-text-heading)]">{items.join(' • ')}</span>
    </span>
  );
}
