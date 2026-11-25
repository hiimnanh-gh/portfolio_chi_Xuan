import { cn } from '@/utils';

export function BrandIdentity({ name, subtitle = '', className = '' }) {
  return (
    <div className={cn('flex flex-col leading-tight', className)}>
      <span className="whitespace-nowrap text-sm font-bold text-[var(--color-text-heading)] sm:text-[15px]">
        {name}
      </span>
      {subtitle && (
        <span className="whitespace-nowrap font-mono-tech text-[10px] font-medium tracking-wider text-[var(--color-text-muted)] uppercase">
          {subtitle}
        </span>
      )}
    </div>
  );
}
