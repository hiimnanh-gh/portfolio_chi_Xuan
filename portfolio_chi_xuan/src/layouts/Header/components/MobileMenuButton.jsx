import { Menu, X } from 'lucide-react';
import { cn } from '@/utils';

export function MobileMenuButton({ isOpen = false, onToggle, className = '' }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-label={isOpen ? 'Đóng menu điều hướng' : 'Mở menu điều hướng'}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] text-[var(--color-text-heading)] transition-colors hover:bg-[var(--color-bg-page)] lg:hidden cursor-pointer',
        className,
      )}
    >
      {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
    </button>
  );
}
