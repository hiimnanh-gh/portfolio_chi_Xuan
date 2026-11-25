export function ProjectTitle({ title, subtitle }) {
  return (
    <div className="mt-3">
      <h3 className="text-xl font-bold text-[var(--color-text-heading)] sm:text-2xl">
        {title}
      </h3>
      {subtitle && (
        <p className="mt-1 text-xs font-medium text-[var(--color-brand-primary)] sm:text-sm">
          {subtitle}
        </p>
      )}
    </div>
  );
}
