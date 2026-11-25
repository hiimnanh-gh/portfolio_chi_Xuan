export function EducationInstitution({ institution, major }) {
  if (!institution && !major) return null;

  return (
    <div className="mt-1.5 space-y-0.5 text-xs font-medium text-[var(--color-text-muted)] sm:text-sm">
      {institution && <p className="text-[var(--color-brand-primary)]">{institution}</p>}
      {major && <p>{major}</p>}
    </div>
  );
}
