import { cn } from '@/utils';

export function FilterButton({ label, isActive = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={cn(
        'rounded-[var(--radius-pill)] border px-3.5 py-1.5 text-xs font-semibold transition-colors duration-150 cursor-pointer whitespace-nowrap',
        isActive
          ? 'border-[var(--color-brand-primary)] bg-[var(--color-brand-primary)] text-white'
          : 'border-[var(--color-border)] bg-[var(--color-bg-surface)] text-[var(--color-text-body)] hover:border-[var(--color-border-strong)] hover:text-[var(--color-text-heading)]',
      )}
    >
      {label}
    </button>
  );
}
