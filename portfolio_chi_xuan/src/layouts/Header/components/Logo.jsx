import { cn } from '@/utils';

export function Logo({ src, alt = 'Brand logo', className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn('h-9 w-9 shrink-0 rounded-[var(--radius-sm)] object-contain', className)}
    />
  );
}
