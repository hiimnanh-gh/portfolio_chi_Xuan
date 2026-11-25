export function ProjectMetricCard({ value, label }) {
  return (
    <div className="rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-page)] px-3 py-2.5 text-center">
      <span className="block text-base font-bold text-[var(--color-text-heading)] sm:text-lg">
        {value}
      </span>
      <span className="mt-0.5 block text-[11px] text-[var(--color-text-muted)]">
        {label}
      </span>
    </div>
  );
}
