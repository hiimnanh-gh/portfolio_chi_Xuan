import { cn } from '@/utils';

export function TextArea({
  label = '',
  id,
  required = false,
  rows = 4,
  error = '',
  helperText = '',
  className = '',
  ...props
}) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-xs font-semibold text-[var(--color-text-heading)]">
          {label}
          {required && <span className="ml-1 text-[var(--color-brand-primary)]">*</span>}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        required={required}
        aria-invalid={Boolean(error) || undefined}
        className={cn(
          'w-full rounded-[var(--radius-sm)] border bg-[var(--color-bg-input)] px-3.5 py-2.5 text-sm text-[var(--color-text-heading)] placeholder:text-[var(--color-text-muted)] transition-colors duration-150 focus:bg-[var(--color-bg-surface)] focus:outline-none',
          error
            ? 'border-[var(--color-status-error)] focus:border-[var(--color-status-error)]'
            : 'border-[var(--color-border)] focus:border-[var(--color-brand-primary)]',
          className,
        )}
        {...props}
      />
      {error && <p className="text-xs text-[var(--color-status-error)]">{error}</p>}
      {!error && helperText && <p className="text-xs text-[var(--color-text-muted)]">{helperText}</p>}
    </div>
  );
}
