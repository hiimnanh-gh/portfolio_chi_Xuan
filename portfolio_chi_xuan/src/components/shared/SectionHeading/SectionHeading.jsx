import { cn } from '@/utils';
import { Reveal } from '../Reveal';

export function SectionHeading({
  number = '',
  label = '',
  title,
  description = '',
  action = null,
  children = null,
  align = 'left',
  singleLine = false,
  className = '',
}) {
  const isCentered = align === 'center';
  const eyebrowText = [number, label].filter(Boolean).join(' • ');

  return (
    <Reveal direction="up">
      <div
        className={cn(
          'mb-8 md:mb-10 flex flex-col gap-4',
          !isCentered && (action || children) && 'md:flex-row md:items-end md:justify-between',
          isCentered && 'items-center text-center',
          className,
        )}
      >
        <div className={cn(singleLine ? 'w-full' : 'max-w-2xl', isCentered && 'mx-auto')}>
          {eyebrowText && (
            <div
              className={cn(
                'mb-3 flex items-center gap-3 text-eyebrow text-sm text-[var(--color-brand-primary)] sm:text-base',
                isCentered && 'justify-center',
              )}
            >
              <span className="inline-block h-[2px] w-7 bg-[var(--color-brand-primary)]" />
              <span>{eyebrowText}</span>
            </div>
          )}

          {title && (
            <h2
              className={cn(
                'font-bold tracking-tight text-[var(--color-text-heading)]',
                singleLine
                  ? 'text-[1.625rem] sm:text-[1.875rem] lg:text-[2.125rem] xl:text-[2.25rem]'
                  : 'text-[1.75rem] sm:text-[2.125rem] lg:text-[2.375rem]',
              )}
            >
              {title}
            </h2>
          )}

          {description && (
            <p
              className={cn(
                'mt-3 text-sm leading-relaxed text-[var(--color-text-body)] sm:text-base',
                !isCentered && 'text-justify',
              )}
            >
              {description}
            </p>
          )}
        </div>

        {(action || children) && (
          <div className={cn('flex flex-wrap items-center gap-2', isCentered && 'justify-center')}>
            {action}
            {children}
          </div>
        )}
      </div>
    </Reveal>
  );
}
