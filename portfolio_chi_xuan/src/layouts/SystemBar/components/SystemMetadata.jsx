import { cn } from '@/utils';

export function SystemMetadata({ items = [] }) {
  if (!items.length) return null;

  return (
    <div className="flex flex-wrap items-center gap-2">
      {items.map((item) => (
        <span
          key={item.id}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-[var(--radius-xs)] px-2 py-0.5 text-[11px]',
            item.highlighted
              ? 'bg-[var(--color-bg-muted)] font-medium text-[var(--color-text-heading)]'
              : 'border border-[var(--color-border)] bg-[var(--color-bg-surface)] text-[var(--color-text-muted)]',
          )}
        >
          {item.label && <span className="text-[var(--color-text-muted)]">{item.label}:</span>}
          <span>{item.value}</span>
        </span>
      ))}
    </div>
  );
}
