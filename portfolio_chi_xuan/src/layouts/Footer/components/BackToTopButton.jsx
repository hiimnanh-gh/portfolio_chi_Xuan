import { ArrowUp } from 'lucide-react';

export function BackToTopButton({ label = 'Lên đầu trang' }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      onClick={handleScrollToTop}
      aria-label={label}
      className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-3 py-1.5 text-xs font-medium text-[var(--color-text-body)] transition-colors duration-150 hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)] cursor-pointer"
    >
      <ArrowUp className="h-3.5 w-3.5" />
      <span>{label}</span>
    </button>
  );
}
