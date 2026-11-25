import { ChevronDown } from 'lucide-react';
import { cn } from '@/utils';

export function Select({
  label = '',
  id,
  required = false,
  options = [],
  placeholder = '',
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
      <div className="relative">
        <select
          id={id}
          required={required}
          aria-invalid={Boolean(error) || undefined}
          className={cn(
            'w-full appearance-none rounded-[var(--radius-sm)] border bg-[var(--color-bg-input)] py-2.5 pr-10 pl-3.5 text-sm text-[var(--color-text-heading)] transition-colors duration-150 focus:bg-[var(--color-bg-surface)] focus:outline-none',
            error
              ? 'border-[var(--color-status-error)] focus:border-[var(--color-status-error)]'
              : 'border-[var(--color-border)] focus:border-[var(--color-brand-primary)]',
            className,
          )}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-[var(--color-text-muted)]" />
      </div>
      {error && <p className="text-xs text-[var(--color-status-error)]">{error}</p>}
      {!error && helperText && <p className="text-xs text-[var(--color-text-muted)]">{helperText}</p>}
    </div>
  );
}
