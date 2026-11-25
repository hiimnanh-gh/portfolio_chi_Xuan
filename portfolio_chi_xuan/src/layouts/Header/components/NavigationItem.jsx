import { cn } from '@/utils';

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
            : 'text-[var(--color-text-body)] hover:bg-[var(--color-bg-page)] hover:text-[var(--color-text-heading)]',
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
        'relative whitespace-nowrap px-2 py-1.5 text-[13px] font-medium transition-colors duration-150',
        isActive
          ? 'font-semibold text-[var(--color-brand-primary)]'
          : 'text-[var(--color-text-body)] hover:text-[var(--color-text-heading)]',
      )}
    >
      {label}
      {isActive && (
        <span
          aria-hidden="true"
          className="absolute right-2 -bottom-0.5 left-2 h-[2px] rounded-full bg-[var(--color-brand-primary)]"
        />
      )}
    </a>
  );
}
