import { IconBox } from '@/components/ui';

export function ContactInfoItem({ icon, label, value, href = '' }) {
  if (!value) return null;

  return (
    <div className="flex items-start gap-3.5">
      <IconBox variant="primary" size="md">
        {icon}
      </IconBox>
      <div className="min-w-0">
        <p className="text-xs font-medium text-[var(--color-text-muted)]">{label}</p>
        {href ? (
          <a
            href={href}
            className="mt-0.5 block break-words text-sm font-semibold text-[var(--color-text-heading)] transition-colors hover:text-[var(--color-brand-primary)]"
          >
            {value}
          </a>
        ) : (
          <p className="mt-0.5 break-words text-sm font-semibold text-[var(--color-text-heading)]">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}
