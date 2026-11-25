import { cn } from '@/utils';

export function SystemStatus({ label = 'SYS.ONLINE', isOnline = true }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 font-semibold whitespace-nowrap',
        isOnline ? 'text-[var(--color-status-online)]' : 'text-[var(--color-text-muted)]',
      )}
    >
      <span
        className={cn(
          'h-1.5 w-1.5 rounded-full',
          isOnline
            ? 'bg-[var(--color-status-online)] animate-pulse-dot'
            : 'bg-[var(--color-text-muted)]',
        )}
      />
      <span>{label}</span>
    </span>
  );
}
