export function EducationAchievement({ achievement }) {
  if (!achievement) return null;

  return (
    <span className="font-mono-tech text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
      {achievement}
    </span>
  );
}
