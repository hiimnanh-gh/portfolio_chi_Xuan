import { Badge } from '@/components/ui';

export function AwardMetadata({ year, level }) {
  if (!year && !level) return null;

  return (
    <div className="mt-4 flex flex-wrap items-center gap-2">
      {year && (
        <Badge variant="neutral" size="sm" mono>
          NĂM {year}
        </Badge>
      )}
      {level && (
        <span className="font-mono-tech text-[11px] font-medium uppercase tracking-wider text-[var(--color-text-muted)]">
          {level}
        </span>
      )}
    </div>
  );
}
