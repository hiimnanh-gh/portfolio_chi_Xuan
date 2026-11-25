import { cn } from '@/utils';

export function AvailabilityStatus({
  text,
  shortText = '',
  isAvailable = true,
  className = '',
}) {
  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-body)]',
        className,
      )}
    >
      <span
        className={cn(
          'h-2 w-2 shrink-0 rounded-full',
          isAvailable
            ? 'bg-[var(--color-status-online)] animate-pulse-dot'
            : 'bg-[var(--color-text-muted)]',
        )}
      />
      {shortText ? (
        <>
          <span className="whitespace-nowrap xl:hidden">{shortText}</span>
          <span className="hidden whitespace-nowrap xl:inline">{text}</span>
        </>
      ) : (
        <span className="whitespace-nowrap">{text}</span>
      )}
    </div>
  );
}
