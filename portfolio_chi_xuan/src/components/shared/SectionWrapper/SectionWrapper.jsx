import { cn } from '@/utils';
import { Container } from '../Container';

const BACKGROUND_CLASSES = {
  default: 'bg-[var(--color-bg-page)]',
  surface: 'bg-[var(--color-bg-surface)]',
};

const SPACING_CLASSES = {
  sm: 'py-8 sm:py-12 lg:py-14',
  md: 'py-10 sm:py-14 lg:py-20',
  lg: 'py-10 sm:py-16 lg:py-20',
};

export function SectionWrapper({
  id,
  children,
  background = 'default',
  spacing = 'md',
  containerWidth = 'default',
  className = '',
}) {
  return (
    <section
      id={id}
      className={cn(
        'scroll-mt-24 overflow-x-clip',
        BACKGROUND_CLASSES[background] || BACKGROUND_CLASSES.default,
        SPACING_CLASSES[spacing] || SPACING_CLASSES.md,
        className,
      )}
    >
      <Container maxWidth={containerWidth}>{children}</Container>
    </section>
  );
}
