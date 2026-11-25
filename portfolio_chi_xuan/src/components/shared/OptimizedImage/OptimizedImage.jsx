import { useState } from 'react';
import { cn } from '@/utils';

const ASPECT_CLASSES = {
  auto: '',
  '16/9': 'aspect-video',
  '4/3': 'aspect-[4/3]',
  '1/1': 'aspect-square',
  '4/5': 'aspect-[4/5]',
};

const ROUNDED_CLASSES = {
  none: 'rounded-none',
  sm: 'rounded-[var(--radius-sm)]',
  md: 'rounded-[var(--radius-md)]',
  lg: 'rounded-[var(--radius-lg)]',
  xl: 'rounded-[var(--radius-xl)]',
};

export function OptimizedImage({
  src,
  alt = '',
  aspectRatio = 'auto',
  rounded = 'md',
  fallbackText = '',
  loading = 'lazy',
  className = '',
  imgClassName = '',
  ...props
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-[var(--color-bg-muted)]',
        ASPECT_CLASSES[aspectRatio] || '',
        ROUNDED_CLASSES[rounded] || ROUNDED_CLASSES.md,
        className,
      )}
    >
      {!src || hasError ? (
        <div className="flex h-full min-h-32 w-full items-center justify-center p-4 text-center font-mono-tech text-xs text-[var(--color-text-muted)]">
          {fallbackText || alt || 'Image placeholder'}
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onError={() => setHasError(true)}
          className={cn('block h-full w-full object-cover', imgClassName)}
          {...props}
        />
      )}
    </div>
  );
}
