import { cn } from '@/utils';

export function SystemSeparator({ className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={cn('hidden text-[var(--color-border-strong)] sm:inline', className)}
    >
      |
    </span>
  );
}
