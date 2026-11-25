export function SkillPercentage({ percentage = null, levelLabel = '' }) {
  if (typeof percentage === 'number') {
    return (
      <span className="shrink-0 font-mono-tech text-xs font-medium text-[var(--color-text-muted)]">
        {percentage}%
      </span>
    );
  }

  if (levelLabel) {
    return (
      <span className="shrink-0 font-mono-tech text-[11px] font-medium text-[var(--color-text-muted)]">
        {levelLabel}
      </span>
    );
  }

  return null;
}
