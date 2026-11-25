import { Badge } from '@/components/ui';

export function ProjectMetadata({ categoryLabel, status, year }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {categoryLabel && (
        <Badge variant="primary" size="sm" mono>
          {categoryLabel}
        </Badge>
      )}
      {status && (
        <span className="font-mono-tech text-xs text-[var(--color-text-muted)]">
          • {status}
        </span>
      )}
      {year && (
        <span className="font-mono-tech text-xs text-[var(--color-text-muted)]">
          • {year}
        </span>
      )}
    </div>
  );
}
