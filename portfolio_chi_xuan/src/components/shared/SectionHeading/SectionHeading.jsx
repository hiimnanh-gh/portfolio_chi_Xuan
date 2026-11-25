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
        <div className={cn('max-w-2xl', isCentered && 'mx-auto')}>
          {eyebrowText && (
            <div
              className={cn(
                'mb-2.5 flex items-center gap-2.5 text-eyebrow text-[var(--color-brand-primary)]',
                isCentered && 'justify-center',
              )}
            >
              <span className="inline-block h-[1.5px] w-5 bg-[var(--color-brand-primary)]" />
              <span>{eyebrowText}</span>
            </div>
          )}

          {title && (
            <h2 className="text-2xl font-bold tracking-tight text-[var(--color-text-heading)] sm:text-3xl lg:text-[2rem]">
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
