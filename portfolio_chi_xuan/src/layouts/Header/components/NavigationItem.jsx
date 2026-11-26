import { cn } from '@/utils';
import styles from '../Header.module.css';

export function NavigationItem({
  id,
  label,
  isActive = false,
  onSelect,
  variant = 'desktop',
}) {
  const handleClick = (event) => {
    event.preventDefault();
    if (onSelect) {
      onSelect(id);
    }
  };

  if (variant === 'mobile') {
    return (
      <a
        href={`#${id}`}
        onClick={handleClick}
        aria-current={isActive ? 'location' : undefined}
        className={cn(
          'block rounded-[var(--radius-sm)] px-3 py-2.5 text-sm font-medium transition-colors duration-150',
          isActive
            ? 'bg-[var(--color-brand-primary-soft)] font-semibold text-[var(--color-brand-primary)]'
            : 'text-[var(--color-text-body)] hover:bg-[var(--color-brand-primary-soft)]/60 hover:text-[var(--color-brand-primary)]',
        )}
      >
        {label}
      </a>
    );
  }

  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      aria-current={isActive ? 'location' : undefined}
      className={cn(
        'whitespace-nowrap rounded-[var(--radius-pill)] px-3 py-2 text-[13px] font-medium',
        styles.navLink,
        isActive
          ? cn(
              'bg-[var(--color-brand-primary-soft)]/70 font-semibold text-[var(--color-brand-primary)]',
              styles.navLinkActive,
            )
          : 'text-[var(--color-text-body)] hover:bg-[var(--color-brand-primary-soft)]/50 hover:text-[var(--color-brand-primary)]',
      )}
    >
      {label}
    </a>
  );
}
