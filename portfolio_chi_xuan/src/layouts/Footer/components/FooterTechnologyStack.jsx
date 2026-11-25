export function FooterTechnologyStack({ ecosystemNote, specialtyNote }) {
  if (!ecosystemNote && !specialtyNote) return null;

  return (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono-tech text-xs text-[var(--color-text-muted)]">
      {ecosystemNote && <span>{ecosystemNote}</span>}
      {ecosystemNote && specialtyNote && (
        <span aria-hidden="true" className="text-[var(--color-border-strong)]">
          •
        </span>
      )}
      {specialtyNote && <span>{specialtyNote}</span>}
    </div>
  );
}
