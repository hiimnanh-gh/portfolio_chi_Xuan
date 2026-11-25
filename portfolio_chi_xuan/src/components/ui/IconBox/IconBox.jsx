import { cn } from '@/utils';

const VARIANT_CLASSES = {
  primary: 'bg-[var(--color-brand-primary-soft)] text-[var(--color-brand-primary)]',
  secondary: 'bg-[var(--color-brand-secondary-soft)] text-[var(--color-brand-secondary)]',
  slate: 'bg-[var(--color-brand-slate-soft)] text-[var(--color-brand-slate)]',
  success: 'bg-[var(--color-status-success-soft)] text-[var(--color-status-success)]',
  neutral: 'bg-[var(--color-bg-muted)] text-[var(--color-text-heading)]',
};

const SIZE_CLASSES = {
  sm: 'h-8 w-8 rounded-[var(--radius-sm)]',
  md: 'h-10 w-10 rounded-[var(--radius-md)]',
  lg: 'h-12 w-12 rounded-[var(--radius-md)]',
};

export function IconBox({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) {
  return (
    <div
      className={cn(
        'inline-flex shrink-0 items-center justify-center',
        VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary,
        SIZE_CLASSES[size] || SIZE_CLASSES.md,
        className,
      )}
    >
      {children}
    </div>
  );
}
