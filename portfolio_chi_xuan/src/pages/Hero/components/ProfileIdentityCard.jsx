import { Badge } from '@/components/ui';
import { cn } from '@/utils';
import styles from '../styles/HeroPage.module.css';

export function ProfileIdentityCard({
  displayName,
  specialty,
  statusLabel = 'Active Lab',
  isActive = true,
  tags = [],
  className = '',
}) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-surface)]/95 p-3.5 sm:p-4',
        styles.floatingCard,
        className,
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-[var(--color-text-heading)]">
            {displayName}
          </p>
          {specialty && (
            <p className="mt-0.5 truncate font-mono-tech text-[11px] text-[var(--color-text-body)]">
              {specialty}
            </p>
          )}
        </div>

        {statusLabel && (
          <Badge variant={isActive ? 'success' : 'neutral'} size="sm" dot>
            {statusLabel}
          </Badge>
        )}
      </div>

      {tags.length > 0 && (
        <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
          {tags.map((tag, index) => (
            <Badge
              key={tag}
              variant={index === tags.length - 1 ? 'primary' : 'neutral'}
              size="sm"
              mono={index === 0}
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}
