import { useState } from 'react';
import { cn } from '@/utils';

export function HeaderAvatar({ src = '', alt = '', initials = 'AI', className = '' }) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={cn(
        'flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-[var(--color-border)] bg-[var(--color-brand-primary-soft)] text-xs font-bold text-[var(--color-brand-primary)]',
        className,
      )}
      title={alt}
    >
      {src && !hasError ? (
        <img
          src={src}
          alt={alt}
          onError={() => setHasError(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <span>{initials}</span>
      )}
    </div>
  );
}
