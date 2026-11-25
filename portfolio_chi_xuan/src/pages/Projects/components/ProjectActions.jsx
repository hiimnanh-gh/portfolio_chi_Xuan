import { Code2, ExternalLink, Eye, FileText } from 'lucide-react';
import { Button } from '@/components/ui';

function ActionExternalLink({ href, label, icon }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-3 py-1.5 text-xs font-semibold text-[var(--color-text-heading)] transition-colors hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)]"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

export function ProjectActions({
  demoUrl,
  githubUrl,
  documentUrl,
  onOpenDetail,
}) {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-2.5">
      {onOpenDetail && (
        <Button
          variant="outline"
          size="sm"
          leftIcon={<Eye className="h-3.5 w-3.5" />}
          onClick={onOpenDetail}
        >
          Xem chi tiết
        </Button>
      )}
      <ActionExternalLink
        href={demoUrl}
        label="Demo"
        icon={<ExternalLink className="h-3.5 w-3.5" />}
      />
      <ActionExternalLink
        href={githubUrl}
        label="GitHub"
        icon={<Code2 className="h-3.5 w-3.5" />}
      />
      <ActionExternalLink
        href={documentUrl}
        label="Tài liệu"
        icon={<FileText className="h-3.5 w-3.5" />}
      />
    </div>
  );
}
