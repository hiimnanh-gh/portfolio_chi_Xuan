import { ExternalLink } from 'lucide-react';

export function AwardEvidenceLink({ url }) {
  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-brand-primary)] transition-colors hover:text-[var(--color-brand-primary-hover)]"
    >
      <span>Xem minh chứng</span>
      <ExternalLink className="h-3.5 w-3.5" />
    </a>
  );
}
