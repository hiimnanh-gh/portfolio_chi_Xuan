import { OptimizedImage } from '@/components/shared';
import { cn } from '@/utils';
import { ProjectImageBadge } from './ProjectImageBadge';

export function ProjectImage({ image, badge, title, className = '' }) {
  return (
    <div className={cn('relative overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)]', className)}>
      <OptimizedImage
        src={image?.src}
        alt={image?.alt || title}
        fallbackText={image?.placeholderLabel || title}
        aspectRatio="16/10"
        rounded="none"
        className="w-full"
      />
      {badge && (
        <div className="absolute top-3 left-3">
          <ProjectImageBadge text={badge} />
        </div>
      )}
    </div>
  );
}
