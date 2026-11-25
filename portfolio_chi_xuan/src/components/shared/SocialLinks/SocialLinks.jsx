import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/utils';

const VARIANT_CLASSES = {
  button:
    'rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-input)] text-[var(--color-text-body)] hover:border-[var(--color-brand-primary)] hover:bg-[var(--color-bg-surface)] hover:text-[var(--color-brand-primary)]',
  pill:
    'rounded-[var(--radius-pill)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] text-[var(--color-text-body)] hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)]',
  minimal:
    'rounded-[var(--radius-sm)] bg-transparent text-[var(--color-text-body)] hover:bg-[var(--color-bg-muted)] hover:text-[var(--color-text-heading)]',
};

const SIZE_CLASSES = {
  sm: 'px-3 py-1.5 text-xs',
  md: 'px-3.5 py-2 text-xs sm:text-sm',
};

export function SocialLinks({
  links = [],
  variant = 'button',
  size = 'sm',
  showExternalIcon = false,
  className = '',
}) {
  return (
    <div className={cn('flex flex-wrap items-center gap-2', className)}>
      {links.map((item) => (
        <a
          key={item.id}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'inline-flex items-center gap-1.5 font-medium transition-colors duration-150',
            VARIANT_CLASSES[variant] || VARIANT_CLASSES.button,
            SIZE_CLASSES[size] || SIZE_CLASSES.sm,
          )}
        >
          <span>{item.label}</span>
          {showExternalIcon && <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />}
        </a>
      ))}
    </div>
  );
}
