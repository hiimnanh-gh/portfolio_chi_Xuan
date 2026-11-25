import { ExternalLink, MapPin } from 'lucide-react';
import { Card } from '@/components/ui';

export function ContactMap({ mapData, address }) {
  if (!mapData?.hasVerifiedLocation || !mapData?.googleMapsUrl) {
    return (
      <Card variant="muted" padding="md" className="flex items-start gap-3">
        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-text-muted)]" />
        <div className="text-xs leading-relaxed text-[var(--color-text-muted)]">
          <p className="font-semibold text-[var(--color-text-heading)]">{mapData?.title}</p>
          <p className="mt-1">{mapData?.placeholderText}</p>
        </div>
      </Card>
    );
  }

  return (
    <Card variant="default" padding="md" className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-3 min-w-0">
        <MapPin className="h-4 w-4 shrink-0 text-[var(--color-brand-primary)]" />
        <div className="min-w-0">
          <p className="truncate text-xs font-semibold text-[var(--color-text-heading)]">
            {mapData.title}
          </p>
          {address && (
            <p className="truncate text-xs text-[var(--color-text-muted)]">{address}</p>
          )}
        </div>
      </div>

      <a
        href={mapData.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex shrink-0 items-center gap-1 rounded-[var(--radius-sm)] border border-[var(--color-border)] bg-[var(--color-bg-surface)] px-3 py-1.5 text-xs font-semibold text-[var(--color-brand-primary)] transition-colors hover:bg-[var(--color-brand-primary-soft)]"
      >
        <span>Mở Google Maps</span>
        <ExternalLink className="h-3.5 w-3.5" />
      </a>
    </Card>
  );
}
