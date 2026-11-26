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
                'mb-2.5 flex items-center gap-2.5 text-eyebrow text-xs text-[var(--color-brand-primary)] sm:mb-3 sm:gap-3 sm:text-sm md:text-base',
                isCentered && 'justify-center',
              )}
            >
              <span className="inline-block h-[2px] w-5 shrink-0 bg-[var(--color-brand-primary)] sm:w-7" />
              <span>{eyebrowText}</span>
            </div>
          )}

          {title && (
            <h2
              className={cn(
                'font-bold tracking-tight text-[var(--color-text-heading)]',
                singleLine
                  ? 'text-xl sm:text-2xl lg:text-[1.75rem] xl:text-[1.95rem]'
                  : 'text-2xl sm:text-[1.75rem] lg:text-[2rem]',
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
