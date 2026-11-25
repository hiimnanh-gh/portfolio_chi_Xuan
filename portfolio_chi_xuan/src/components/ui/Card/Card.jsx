import { cn } from '@/utils';
import styles from './Card.module.css';

const VARIANT_CLASSES = {
  default: 'bg-[var(--color-bg-surface)] border border-[var(--color-border)]',
  elevated: cn('bg-[var(--color-bg-surface)] border border-[var(--color-border)]', styles.elevated),
  muted: 'bg-[var(--color-bg-page)] border border-[var(--color-border)]',
  interactive: cn(
    'bg-[var(--color-bg-surface)] border border-[var(--color-border)]',
    styles.interactive,
  ),
};

const PADDING_CLASSES = {
  none: 'p-0',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-6 sm:p-8',
};

export function Card({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  ...props
}) {
  return (
    <div
      className={cn(
        'rounded-[var(--radius-lg)]',
        styles.card,
        VARIANT_CLASSES[variant] || VARIANT_CLASSES.default,
        PADDING_CLASSES[padding] || PADDING_CLASSES.md,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
