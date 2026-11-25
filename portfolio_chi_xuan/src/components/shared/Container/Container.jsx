import { cn } from '@/utils';

const WIDTH_CLASSES = {
  narrow: 'max-w-[var(--container-narrow-width)]',
  default: 'max-w-[var(--container-max-width)]',
  wide: 'max-w-[var(--container-wide-width)]',
};

export function Container({ children, maxWidth = 'default', className = '' }) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        WIDTH_CLASSES[maxWidth] || WIDTH_CLASSES.default,
        className,
      )}
    >
      {children}
    </div>
  );
}
