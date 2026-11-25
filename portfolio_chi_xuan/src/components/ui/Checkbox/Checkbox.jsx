import { cn } from "@/utils";

export function Checkbox({
  label = "",
  description = "",
  id,
  error = "",
  className = "",
  ...props
}) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <label
        htmlFor={id}
        className="inline-flex items-start gap-2.5 text-xs text-[var(--color-text-body)] cursor-pointer select-none"
      >
        <input
          id={id}
          type="checkbox"
          aria-invalid={Boolean(error) || undefined}
          className="mt-0.5 h-4 w-4 shrink-0 rounded-[var(--radius-xs)] border-[var(--color-border-strong)] accent-[var(--color-brand-primary)] cursor-pointer"
          {...props}
        />
        <span className="flex flex-col">
          {label && (
            <span className="font-medium text-[var(--color-text-body)]">
              {label}
            </span>
          )}
          {description && (
            <span className="text-[var(--color-text-muted)]">
              {description}
            </span>
          )}
        </span>
      </label>
      {error && (
        <p className="text-xs text-[var(--color-status-error)]">{error}</p>
      )}
    </div>
  );
}
