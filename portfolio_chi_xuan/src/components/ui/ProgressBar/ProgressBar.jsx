import { cn } from '@/utils';

const BAR_VARIANTS = {
  primary: 'bg-[var(--color-brand-primary)]',
  secondary: 'bg-[var(--color-brand-secondary)]',
  tertiary: 'bg-[var(--color-brand-tertiary)]',
  neutral: 'bg-[var(--color-brand-neutral)]',
  slate: 'bg-[var(--color-brand-slate)]',
  success: 'bg-[var(--color-status-success)]',
};

const SIZE_CLASSES = {
  sm: 'h-1.5',
  md: 'h-2',
};

export function ProgressBar({
  value = 0,
  max = 100,
  label = '',
  showValue = false,
  variant = 'primary',
  size = 'sm',
  className = '',
}) {
  const safeMax = max > 0 ? max : 100;
  const percentage = Math.max(0, Math.min(100, Math.round((value / safeMax) * 100)));

  return (
    <div className={cn('w-full', className)}>
      {(label || showValue) && (
        <div className="mb-1.5 flex items-center justify-between gap-2 text-xs">
          {label && <span className="font-medium text-[var(--color-text-heading)]">{label}</span>}
          {showValue && (
            <span className="font-mono-tech font-medium text-[var(--color-text-muted)]">
              {percentage}%
            </span>
          )}
        </div>
      )}
      <div
        role="progressbar"
        aria-valuenow={percentage}
        aria-valuemin={0}
        aria-valuemax={100}
        className={cn(
          'w-full overflow-hidden rounded-[var(--radius-pill)] bg-[var(--color-bg-muted)]',
          SIZE_CLASSES[size] || SIZE_CLASSES.sm,
        )}
      >
        <div
          className={cn(
            'h-full rounded-[var(--radius-pill)] transition-all duration-500 ease-out',
            BAR_VARIANTS[variant] || BAR_VARIANTS.primary,
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}
