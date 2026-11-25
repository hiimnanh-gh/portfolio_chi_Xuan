import { X } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { OptimizedImage } from '@/components/shared';
import { ProjectActions } from './ProjectActions';
import { ProjectMetadata } from './ProjectMetadata';
import { ProjectMetrics } from './ProjectMetrics';
import { ProjectTechnologyTags } from './ProjectTechnologyTags';

export function ProjectDetailModal({ project, onClose }) {
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);

  useEffect(() => {
    if (!project) return undefined;

    previousFocusRef.current = document.activeElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (previousFocusRef.current && typeof previousFocusRef.current.focus === 'function') {
        previousFocusRef.current.focus();
      }
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-[2px]"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] p-6 shadow-[var(--shadow-elevated)] sm:p-8">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Đóng chi tiết dự án"
          className="absolute top-4 right-4 inline-flex h-9 w-9 items-center justify-center rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] text-[var(--color-text-heading)] transition-colors hover:bg-[var(--color-bg-page)] cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="pr-10">
          <ProjectMetadata
            categoryLabel={project.categoryLabel}
            status={project.status}
            year={project.year}
          />
          <h3
            id="project-modal-title"
            className="mt-3 text-2xl font-bold text-[var(--color-text-heading)]"
          >
            {project.title}
          </h3>
          {project.role && (
            <p className="mt-1 text-xs font-medium text-[var(--color-brand-primary)] sm:text-sm">
              Vai trò: {project.role}
            </p>
          )}
        </div>

        <div className="mt-5 overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)]">
          <OptimizedImage
            src={project.coverImage?.src}
            alt={project.coverImage?.alt || project.title}
            fallbackText={project.coverImage?.placeholderLabel || project.title}
            aspectRatio="16/9"
            rounded="none"
            className="w-full"
          />
        </div>

        <div className="mt-5 space-y-3 text-sm leading-relaxed text-[var(--color-text-body)]">
          {Array.isArray(project.fullDescription) && project.fullDescription.length > 0 ? (
            project.fullDescription.map((paragraph, idx) => <p key={idx}>{paragraph}</p>)
          ) : (
            <p>{project.description}</p>
          )}
        </div>

        <ProjectMetrics metrics={project.metrics} />
        <ProjectTechnologyTags technologies={project.technologies} />

        {Array.isArray(project.gallery) && project.gallery.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {project.gallery.map((item, idx) => (
              <OptimizedImage
                key={idx}
                src={item.src}
                alt={item.alt || `${project.title} ${idx + 1}`}
                aspectRatio="4/3"
                rounded="md"
              />
            ))}
          </div>
        )}

        <ProjectActions
          demoUrl={project.demoUrl}
          githubUrl={project.githubUrl}
          documentUrl={project.documentUrl}
        />
      </div>
    </div>
  );
}
