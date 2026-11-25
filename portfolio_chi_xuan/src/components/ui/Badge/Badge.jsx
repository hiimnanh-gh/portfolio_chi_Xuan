import { cn } from '@/utils';
import styles from './Badge.module.css';

const VARIANT_CLASSES = {
  primary: 'bg-[var(--color-brand-primary-soft)] text-[var(--color-brand-primary)] border border-transparent',
  secondary: 'bg-[var(--color-brand-secondary-soft)] text-[var(--color-brand-secondary)] border border-transparent',
  success: 'bg-[var(--color-status-success-soft)] text-[var(--color-status-success)] border border-transparent',
  neutral: 'bg-[var(--color-bg-muted)] text-[var(--color-text-body)] border border-transparent',
  outline: 'bg-[var(--color-bg-surface)] text-[var(--color-text-body)] border border-[var(--color-border)]',
};

const SIZE_CLASSES = {
  sm: 'px-2.5 py-0.5 text-[11px]',
  md: 'px-3 py-1 text-xs',
};

export function Badge({
  children,
  variant = 'primary',
  size = 'md',
  dot = false,
  mono = false,
  icon = null,
  className = '',
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] font-semibold leading-none',
        styles.badge,
        VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary,
        SIZE_CLASSES[size] || SIZE_CLASSES.md,
        mono && 'font-mono-tech tracking-normal',
        className,
      )}
    >
      {dot && (
        <span
          className={cn(
            'h-1.5 w-1.5 rounded-full',
            variant === 'success' ? 'bg-[var(--color-status-online)]' : 'bg-current',
          )}
        />
      )}
      {icon && <span className="inline-flex shrink-0 items-center">{icon}</span>}
      <span>{children}</span>
    </span>
  );
}
