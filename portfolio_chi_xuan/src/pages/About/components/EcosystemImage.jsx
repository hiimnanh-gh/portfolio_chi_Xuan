import { OptimizedImage } from '@/components/shared';

export function EcosystemImage({ src = '', alt = '', placeholderLabel = '' }) {
  return (
    <div className="mt-4 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-bg-page)]">
      <OptimizedImage
        src={src}
        alt={alt}
        fallbackText={placeholderLabel}
        aspectRatio="4/3"
        rounded="none"
        className="w-full"
      />
    </div>
  );
}
