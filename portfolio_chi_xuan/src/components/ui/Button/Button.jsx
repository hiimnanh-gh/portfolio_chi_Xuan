import { cn } from '@/utils';
import styles from './Button.module.css';

const VARIANT_CLASSES = {
  primary:
    'bg-[var(--color-brand-primary)] text-white border border-transparent hover:bg-[var(--color-brand-primary-hover)]',
  secondary:
    'bg-[var(--color-bg-surface)] text-[var(--color-text-heading)] border border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-bg-page)]',
  outline:
    'bg-transparent text-[var(--color-brand-primary)] border border-[var(--color-brand-primary)] hover:bg-[var(--color-brand-primary-soft)]',
  ghost:
    'bg-transparent text-[var(--color-text-body)] border border-transparent hover:bg-[var(--color-bg-muted)] hover:text-[var(--color-text-heading)]',
};

const SIZE_CLASSES = {
  sm: 'px-3.5 py-2 text-xs rounded-[var(--radius-sm)]',
  md: 'px-5 py-2.5 text-sm rounded-[var(--radius-sm)]',
  lg: 'px-6 py-3 text-base rounded-[var(--radius-md)]',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  leftIcon = null,
  rightIcon = null,
  fullWidth = false,
  type = 'button',
  className = '',
  ...props
}) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed',
        styles.button,
        VARIANT_CLASSES[variant] || VARIANT_CLASSES.primary,
        SIZE_CLASSES[size] || SIZE_CLASSES.md,
        fullWidth && 'w-full',
        className,
      )}
      {...props}
    >
      {leftIcon && <span className="inline-flex shrink-0 items-center">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0 items-center">{rightIcon}</span>}
    </button>
  );
}
