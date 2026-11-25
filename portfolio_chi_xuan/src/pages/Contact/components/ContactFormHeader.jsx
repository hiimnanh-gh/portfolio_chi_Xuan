export function ContactFormHeader({ title, description }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-[var(--color-text-heading)] sm:text-2xl">
        {title}
      </h3>
      {description && (
        <p className="mt-1.5 text-sm text-[var(--color-text-muted)]">
          {description}
        </p>
      )}
    </div>
  );
}
